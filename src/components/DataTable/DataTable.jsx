import { useCallback, useEffect, useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Table, Button, Card, Select, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { useCrudContext } from '@/context/crud';
import * as XLSX from 'xlsx';
import { request } from '@/request';
import { BiReset } from 'react-icons/bi';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { debounce } from 'lodash';

const { Search } = Input;

function AddNewItem({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;

  const handelClick = () => {
    panel.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}

export default function DataTable({ config, extra = [], setActiveForm }) {
  let { entity, dataTableColumns } = config;
  const dispatch = useDispatch();  // Move this line to the top
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, modal, readBox, editBox, addBox, advancedBox } = crudContextAction;
  const translate = useLanguage();
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [statuses, setStatuses] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [session, setSession] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [filteredCount, setFilteredCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { success, result } = await request.filter({ entity: 'payment' });
      if (success) {
        const uniqueStatuses = [...new Set(result.map(item => item.status))];
        const uniqueInstitutes = [...new Set(result.map(item => item.institute_name))];
        const uniqueSession = [...new Set(result.map(item => item.session))];
        const uniqueUniversities = [...new Set(result.map(item => item.university_name))];
        const uniqueUserNames = [...new Set(result.map(item => item.userId?.fullname))];


        setStatuses(uniqueStatuses);
        setInstitutes(uniqueInstitutes);
        setSession(uniqueSession);
        setUniversities(uniqueUniversities);
        setUserNames(uniqueUserNames);
        setTotalCount(result.length); // Set total count initially
        setFilteredCount(result.length); // Set filtered count initially
      }
    };

    fetchData();
  }, []);


  const resetValues = () => {
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedSession(null);
    setSelectedStatus(null);
    setSelectedUserId(null);
    setSearchQuery('')
  };

  const items = [
    {
      label: translate('Show'),
      key: 'read',
      icon: <EyeOutlined />,
    },
    {
      label: translate('Edit'),
      key: 'edit',
      icon: <EditOutlined />,
    },
    {
      label: translate('Add_payment'),
      key: 'add',
      icon: <LiaRupeeSignSolid className='text-base' />,
    },
    ...extra,
    {
      type: 'divider',
    },
    {
      label: translate('Delete'),
      key: 'delete',
      icon: <DeleteOutlined />,
    },
  ];

  const handleRead = (record) => {
    dispatch(crud.currentItem({ data: record }));
    panel.open();
    collapsedBox.open();
    readBox.open();
  };

  function handleEdit(record) {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    editBox.open();
    panel.open();
    collapsedBox.open();
    setActiveForm('updateForm');
  }

  function handleAddpayment(record) {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    addBox.open();
    panel.open();
    collapsedBox.open();
    setActiveForm('addForm');
  }

  function handleDelete(record) {
    dispatch(crud.currentAction({ actionType: 'delete', data: record }));
    modal.open();
  }

  function handleUpdatePassword(record) {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    advancedBox.open();
    panel.open();
    collapsedBox.open();
  }

  dataTableColumns = [
    ...dataTableColumns,
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'read':
                  handleRead(record);
                  break;
                case 'edit':
                  handleEdit(record);
                  break;
                case 'add':
                  handleAddpayment(record);
                  break;
                case 'delete':
                  handleDelete(record);
                  break;
                case 'updatePassword':
                  handleUpdatePassword(record);
                  break;
                default:
                  break;
              }
            },
          }}
          trigger={['click']}
        >
          <EllipsisOutlined
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      ),
    },
  ];

  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
  const { items: dataSource } = listResult;
  const handelDataTableLoad = useCallback(
    async (pagination, newSearchQuery = '') => {
      const options = {
        page: pagination.current || 1,
        items: pagination.pageSize || 10,
        filter: {
          q: newSearchQuery,
          institute: selectedInstitute,
          university: selectedUniversity,
          session: selectedSession,
          status: selectedStatus,
          userId: selectedUserId,
        },
      };

      const { success, result } = await dispatch(crud.list({ entity, options }));
      if (success) {
        const filteredData = filterDataSource(result);
        setFilteredCount(filteredData.length); // Update filtered count
      }
    },
    [entity, selectedInstitute, selectedUniversity, selectedStatus, selectedUserId, selectedSession]
  );

  const handleSearch = debounce((value) => {
    console.log('Search Value:', value);
    setSearchQuery(value);
    handelDataTableLoad({}, value); // Trigger search on each keystroke
  }, 500);
  const dispatcher = () => {
    dispatch(crud.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    return () => {
      controller.abort();
    };
  }, [entity]);

  const { tableColumns } = useResponsiveTable(dataTableColumns, items);

  const filterDataSource = (data) => {
    return data.filter(item => {
      const instituteMatch = !selectedInstitute || item.customfields.institute_name === selectedInstitute;
      const universityMatch = !selectedUniversity || item.customfields.university_name === selectedUniversity;
      const sessionMatch = !selectedSession || item.customfields.session === selectedSession;
      const statusMatch = !selectedStatus || item.customfields.status === selectedStatus;
      const userMatch = !selectedUserId || item.userId?.fullname === selectedUserId;

      const phoneAsString = item.contact?.phone?.toString();
      const emailLowerCase = item.contact?.email?.toLowerCase();

      const searchMatch = !searchQuery || (
        item.lead_id.includes(searchQuery) ||
        (emailLowerCase && emailLowerCase.includes(searchQuery.toLowerCase())) ||
        (typeof phoneAsString === 'string' && phoneAsString.includes(searchQuery)) ||
        item.full_name.includes(searchQuery)
      );
      return instituteMatch && universityMatch && statusMatch && userMatch && searchMatch && sessionMatch;
    });

  };

  const handleExportToExcel = () => {
    if (dataSource.length === 0) {
      return;
    }
    const fileName = 'data.xlsx';

    const exportData = [
      dataTableColumns.map(column => column.title),
      ...dataSource.map(item => dataTableColumns.map(column => {
        let value = item;
        const dataIndex = column.dataIndex;
        const keys = dataIndex ? (Array.isArray(dataIndex) ? dataIndex : dataIndex.split('.')) : [];
        keys.forEach(key => {
          value = value?.[key];
        });
        return value;
      })),
    ];

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Lead Data');

    try {
      XLSX.writeFile(wb, fileName);
    } catch (error) {
      console.error('Error exporting data to Excel:', error);
    }
  };

  const renderTable = () => (
    <>
      <Card className='mt-8'>
        <div className='flex justify-between items-center mb-3'>
          {entity === 'lead' && (
            <div className='flex items-center gap-2'>
              <span className='text-red-500 font-thin'>{`${searchQuery ? filteredCount : totalCount}`}</span>
              <Search
                placeholder="Search by email"
                onSearch={handleSearch} // Remove this line
                onChange={(e) => handleSearch(e.target.value)} // Add this line
                className='w-full'
              />
            </div>
          )}
          <div className='space-x-2 flex items-center'>
            <AddNewItem key="addNewItem" config={config} />
            <div className='font-thin'>
              <LiaFileDownloadSolid title='Export excel' onClick={handleExportToExcel} className='text-3xl text-blue-500 hover:text-blue-700 cursor-pointer' />
            </div>
          </div>
        </div>
        <Table
          columns={tableColumns}
          rowKey={(item) => item._id}
          dataSource={filterDataSource(dataSource)}
          pagination={false}
          loading={listIsLoading}
          onChange={handelDataTableLoad}
        />
      </Card>
    </>
  );

  const renderFilters = () => {
    if (entity === 'lead') {
      return (
        <Card title="Filters" className="custom-card">
          <div className='flex items-center justify-start mb-10 gap-3'>
            <div className='grid grid-cols-5 gap-3'>
              <div>
                <Select
                  placeholder="Select institute"
                  className='w-60 h-10 capitalize'
                  value={selectedInstitute}
                  onChange={(value) => setSelectedInstitute(value)}
                >
                  {institutes.map(institute => (
                    <Select.Option key={institute}>{institute}</Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  placeholder="Select university"
                  className='w-60 h-10 capitalize'
                  value={selectedUniversity}
                  onChange={(value) => setSelectedUniversity(value)}
                >
                  {universities.map(university => (
                    <Select.Option key={university}>{university}</Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  placeholder="Select status"
                  className='w-60 h-10 capitalize'
                  value={selectedStatus}
                  onChange={(value) => setSelectedStatus(value)}
                >
                  {statuses.map(status => (
                    <Select.Option key={status}>{status}</Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  placeholder="Select user full name"
                  className='w-60 h-10 capitalize'
                  value={selectedUserId}
                  onChange={(value) => setSelectedUserId(value)}
                >
                  {userNames.map((userName) => (
                    <Select.Option className="capitalize font-thin font-mono" key={userName}>
                      {userName}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  placeholder="Select session"
                  className='w-60 h-10 capitalize'
                  value={selectedSession}
                  onChange={(value) => setSelectedSession(value)}
                >
                  {session.map((session) => (
                    <Select.Option className="capitalize font-thin font-mono" key={session}>
                      {session}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                <Button title='Reset All Filters' onClick={resetValues} className='bg-transparent text-red-500 font-thin text-lg h-10 hover:text-red-600'>
                  <BiReset />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return null;
  };

  return (
    <>
      <div>
        {renderFilters()}
      </div>
      <div className="table-container">
        {renderTable()}
      </div>
    </>
  );
}
