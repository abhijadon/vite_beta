import { useCallback, useEffect, useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Table, Button, Card, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { useCrudContext } from '@/context/crud';
import AutoCompleteAsync from '../AutoCompleteAsync';
import { request } from '@/request';
import { BiReset } from 'react-icons/bi';

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
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [counselors, setCounselors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const { success, result } = await request.filter({ entity: 'payment' });
      if (success) {
        // Extract unique values for counselors, statuses, institutes, universities, and user IDs
        const uniqueCounselors = [...new Set(result.map(item => item.counselor_email))];
        const uniqueStatuses = [...new Set(result.map(item => item.status))];
        const uniqueInstitutes = [...new Set(result.map(item => item.institute_name))];
        const uniqueUniversities = [...new Set(result.map(item => item.university_name))];
        const uniqueUserNames = [...new Set(result.map(item => item.userId?.fullname))];

        setCounselors(uniqueCounselors);
        setStatuses(uniqueStatuses);
        setInstitutes(uniqueInstitutes);
        setUniversities(uniqueUniversities);
        setUserNames(uniqueUserNames); // New state for unique user names
        setTotalCount(result.length);
      }
    };

    fetchData();
  }, []);

  // Function to extract counselor name from email
  const getCounselorName = (email) => {
    // Check if email is defined before splitting
    return email ? email.split('@')[0] : '';
  };

  // Function to reset all values
  const resetValues = () => {
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedCounselor(null);
    setSelectedStatus(null);
    setSelectedUserId(null);

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
    editBox.open(); // Open the edit form
    panel.open();
    collapsedBox.open();
    setActiveForm('updateForm');
  }

  function handleAddpayment(record) {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    addBox.open(); // Open the add payment form
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
              // else if (key === '2')handleCloseTask
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
  // Function to handle data table load
  const handelDataTableLoad = useCallback(
    async (pagination, searchQuery = '') => {
      const options = {
        page: pagination.current || 1,
        items: pagination.pageSize || 10,
        filter: {
          q: searchQuery,
          institute: selectedInstitute,
          university: selectedUniversity,
          counselor: selectedCounselor,
          status: selectedStatus,
          userId: selectedUserId,
        },
      };

      const { success, result } = await dispatch(crud.list({ entity, options }));
      if (success) {
        setTotalCount(result.length); // Update filtered count based on the filtered data
      }
    },
    [entity, selectedInstitute, selectedUniversity, selectedCounselor, selectedStatus, selectedUserId]
  );

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
      const counselorMatch = !selectedCounselor || item.customfields.counselor_email === selectedCounselor;
      const statusMatch = !selectedStatus || item.customfields.status === selectedStatus;
      const userMatch = !selectedUserId || item.customfields.userId?.fullname === selectedUserId;

      return instituteMatch && universityMatch && counselorMatch && statusMatch && userMatch;
    });
  };

  const renderTable = () => (
    <>
      <Card className='mt-8'>
        <div className='flex justify-between items-center mb-3'>
          <AutoCompleteAsync entity={'lead'} displayLabels={['lead']} searchFields={'email'} />
          <div className='space-x-2 flex items-center'>
            <AddNewItem key="addNewItem" config={config} />
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
                {/* Select for Institute */}
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
                {/* Select for University */}
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
                {/* Select for Counselor Name */}
                <Select
                  placeholder="Select counselor name"
                  className='w-60 h-10 capitalize'
                  value={selectedCounselor}
                  onChange={(value) => setSelectedCounselor(value)}
                >
                  {counselors.map(counselorEmail => (
                    <Select.Option className="capitalize" key={counselorEmail}>
                      {getCounselorName(counselorEmail)}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div>
                {/* Select for Status */}
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
              {/* Select for User Full Name */}
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
                <Button title='Reset All Filters' onClick={resetValues} className='bg-transparent text-red-500 font-thin text-lg h-10 hover:text-red-600'>
                  <BiReset />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    // Add more conditions for other entities as needed
    return null;
  };

  return (
    <>
      <div>
        {renderFilters()}
      </div>
      <div>
        {/* Wrap the Table component with a div for styling */}
        <div className="table-container">
          {renderTable()}
        </div>
      </div>
    </>
  );
}
