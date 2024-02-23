import { useCallback, useEffect, useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Table, Button, Select, Input, Modal, Radio } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GrPowerReset } from "react-icons/gr";
import { selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { AiOutlineExport } from "react-icons/ai";
import { useCrudContext } from '@/context/crud';
import ExcelJS from 'exceljs';
import '@/style/tailwind.css'
import AutoCompleteAsync from '../AutoCompleteAsync';
const { Option } = Select;

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
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, modal, readBox, editBox, addBox, advancedBox } = crudContextAction;
  const translate = useLanguage();
  const [downloadCount, setDownloadCount] = useState(0); // Start with 0 to indicate dynamic count
  const [exportFormat, setExportFormat] = useState('xlsx'); // Default export format is XLSX
  const [exportModalVisible, setExportModalVisible] = useState(false);
  const [totalCount, setTotalCount] = useState(0); // State to hold the total count of data
  const [selectOptions, setSelectOptions] = useState({
    instituteNames: [],
    universityNames: [],
    sessions: [],
    counselorEmails: [],
    statuses: [],
  });
  const [selectedFilters, setSelectedFilters] = useState({
    institute_name: null,
    university_name: null,
    session: null,
    counselor_email: null,
    status: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const fetchData = async (entity = '') => {
    try {
      const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}api/lead/filter?entity=${entity}`;
      const response = await fetch(apiUrl);
      const apiData = await response.json();

      const filteredData = apiData.result.map((item) => ({
        institute_name: item.customfields.institute_name,
        university_name: item.customfields.university_name,
        session: item.customfields.session,
        counselor_email: item.customfields.counselor_email,
        status: item.customfields.status,
      }));
      setTotalCount(apiData.result.length);
      const uniqueInstituteNames = [...new Set(filteredData.map((item) => item.institute_name))];
      const uniqueUniversityNames = [...new Set(filteredData.map((item) => item.university_name))];
      const uniqueSessions = [...new Set(filteredData.map((item) => item.session))];
      const uniqueCounselorEmails = [...new Set(filteredData.map((item) => item.counselor_email))];
      const uniqueStatuses = [...new Set(filteredData.map((item) => item.status))];

      setSelectOptions({
        instituteNames: uniqueInstituteNames,
        universityNames: uniqueUniversityNames,
        sessions: uniqueSessions,
        counselorEmails: uniqueCounselorEmails,
        statuses: uniqueStatuses,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const resetFilters = (fieldName) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [fieldName]: null,
    }));
    setSearchQuery('');
    setDownloadCount(0);
  };

  const resetAllFilters = () => {
    setSelectedFilters({
      institute_name: null,
      university_name: null,
      session: null,
      counselor_email: null,
      status: null,
    });
    setSearchQuery('');
    setDownloadCount(0);
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
  const { pagination, items: dataSource } = listResult;
  const dispatch = useDispatch();

  const handelDataTableLoad = useCallback(
    (pagination, searchQuery = '') => {
      const options = {
        page: pagination.current || 1,
        items: pagination.pageSize || 10,
        filter: {
          ...selectedFilters,
          q: searchQuery,
        },
      };

      dispatch(crud.list({ entity, options }));
    },
    [entity, selectedFilters]
  );


  const dispatcher = () => {
    dispatch(crud.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    fetchData(entity, searchQuery);
    return () => {
      controller.abort();
    };
  }, [entity, searchQuery, selectedFilters]);
  const { tableColumns, tableHeader } = useResponsiveTable(dataTableColumns, items);

  const handleSelectChange = (fieldName, selectedValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [fieldName]: selectedValue,
    }));
  };

  const getDataByPath = (item, path) => {
    if (!path) return null;

    const pathArray = Array.isArray(path) ? path : path.split('.');
    let value = item;

    for (const key of pathArray) {
      value = value[key];
      if (value === undefined || value === null) {
        return null;
      }
    }

    return value;
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    handelDataTableLoad({ current: 1, pageSize: pagination.pageSize }, value);
    console.log('Selected Filters:', selectedFilters);
    console.log('Filtered Data Source:', filteredDataSource);
  };
  const exportToExcel = async () => {
    try {
      setExportModalVisible(false);

      const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}api/lead/filter?entity=${entity}`;
      const response = await fetch(apiUrl);
      const apiData = await response.json();

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet 1');

      // Remove Action column from the dataTableColumns array
      const columnsWithoutAction = dataTableColumns.filter((column) => column.title !== 'Action');

      // Add headers to the worksheet
      const headers = columnsWithoutAction.map((column) => column.title);
      worksheet.addRow(headers);

      // Add data rows to the worksheet
      const rowsToDownload = downloadCount > 0 ? apiData.result.slice(0, downloadCount) : apiData.result;
      rowsToDownload.forEach((item) => {
        const rowData = columnsWithoutAction.map((column) => {
          const dataIndex = column.dataIndex;
          const cellData = getDataByPath(item, dataIndex);
          return cellData;
        });
        worksheet.addRow(rowData);
      });

      // Create a blob from the Excel file
      const blob = await workbook.xlsx.writeBuffer();

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `exported_data.${exportFormat}`);
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Cleanup
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  const handleExportModalOk = () => {
    exportToExcel();
  };

  const handleExportModalCancel = () => {
    setExportModalVisible(false);
  };
  const extractNameFromEmail = (email) => {
    if (!email) return ''; // Add a check for undefined or null
    const parts = email.split('@');
    return parts[0];
  };
  const filteredDataSource = dataSource
    .filter((item) => {
      return (
        (!selectedFilters.institute_name || item.customfields.institute_name === selectedFilters.institute_name) &&
        (!selectedFilters.university_name || item.customfields.university_name === selectedFilters.university_name) &&
        (!selectedFilters.session || item.customfields.session === selectedFilters.session) &&
        (!selectedFilters.counselor_email || item.customfields.counselor_email === selectedFilters.counselor_email) &&
        (!selectedFilters.status || item.customfields.status === selectedFilters.status)
      );
    })
    .filter((item) => {
      if (!searchQuery) {
        return true;
      }
      const searchFields = ['lead_id', 'contact.phone', 'contact.email'];

      return searchFields.some((field) => {
        const fieldParts = field.split('.');
        let fieldValue = item;

        for (const part of fieldParts) {
          fieldValue = fieldValue[part];
        }
        return (
          fieldValue &&
          String(fieldValue).toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    });

  return (
    <>
      {entity === 'lead' && (
        <div className='flex items-center justify-between -mt-10'>
          {/* Select components for filtering */}
          <div className='grid grid-cols-4 gap-6'>
            <div>
              <Select className='w-[270px] h-10'
                placeholder="Select Institute Name"
                onChange={(value) => handleSelectChange('institute_name', value)}
                value={selectedFilters.institute_name}
              >
                {selectOptions.instituteNames.map((name) => (
                  <Option key={name} value={name}>
                    {name}
                  </Option>
                ))}
              </Select>
              <p
                onClick={() => resetFilters('institute_name')}
                className="text-red-600 font-thin text-[12px] cursor-pointer"
              >
                Reset Institute
              </p>
            </div>

            <div>
              <Select className='w-[270px] h-10'
                placeholder="Select University Name"
                onChange={(value) => handleSelectChange('university_name', value)}
                value={selectedFilters.university_name}
              >
                {selectOptions.universityNames.map((name) => (
                  <Option key={name} value={name}>
                    {name}
                  </Option>
                ))}
              </Select >
              <p
                onClick={() => resetFilters('university_name')}
                className="text-red-600 font-thin text-[12px] cursor-pointer"
              >
                Reset University
              </p>
            </div >

            <div>
              <Select className='w-[270px] h-10'
                placeholder="Select Session"
                onChange={(value) => handleSelectChange('session', value)
                }
                value={selectedFilters.session}
              >
                {
                  selectOptions.sessions.map((session) => (
                    <Option key={session} value={session}>
                      {session}
                    </Option>
                  ))
                }
              </Select >
              <p
                onClick={() => resetFilters('session')}
                className="text-red-600 font-thin text-[12px] cursor-pointer"
              >
                Reset Session
              </p>
            </div >

            <div>
              <Select className='w-[270px] h-10'
                placeholder="Select Counselor"
                onChange={(value) => handleSelectChange('counselor_email', value)}
                value={selectedFilters.counselor_email}
              >
                {
                  selectOptions.counselorEmails.map((email) => {
                    const name = extractNameFromEmail(email); // Replace this function with your logic to extract the name from the email
                    return (
                      <Option key={email} value={email}>
                        {name}
                      </Option>
                    );
                  })
                }
              </Select >
              <p
                onClick={() => resetFilters('counselor_email')}
                className="text-red-600 font-thin text-[12px] cursor-pointer"
              >
                Reset Counselor
              </p>
            </div >
            <div>
              <Select className='w-[270px] h-10'
                placeholder="Select Status"
                onChange={(value) => handleSelectChange('status', value)}
                value={selectedFilters.status}
              >
                {selectOptions.statuses.map((status) => (
                  <Option key={status} value={status}>
                    {status}
                  </Option>
                ))}
              </Select>
              <p
                onClick={() => resetFilters('status')}
                className="text-red-600 font-thin text-[12px] cursor-pointer"
              >
                Reset Status
              </p>
            </div>
          </div >
          <div className='relative mt-5 float-right flex items-center'>
            <Button onClick={resetAllFilters} className='text-xs gap-2 bg-transparent text-gray-500 hover:text-blue-500 font-thin cursor-pointer flex items-center' title='Reset All' >
              <GrPowerReset /> Reset
            </Button>
            <AutoCompleteAsync
              entity={'lead'}
              displayLabels={['company']}
              searchFields={'company'}
            // onUpdateValue={autoCompleteUpdate}
            />
          </div>
          {/* Other filters... */}
        </div >
      )
      }
      <Modal
        title="Select Export Format"
        open={exportModalVisible}
        onOk={handleExportModalOk}
        onCancel={handleExportModalCancel}
      >
        <Radio.Group onChange={(e) => setExportFormat(e.target.value)} value={exportFormat}>
          <Radio value="xlsx">XLSX</Radio>
          <Radio value="csv">CSV</Radio>
          <Radio value="pdf" disabled>PDF</Radio>
        </Radio.Group>
      </Modal>
      <div className='mt-16'>
        <div ref={tableHeader}>
          <PageHeader
            onBack={() => window.history.back()}
            ghost={false}
            style={{
              padding: '20px 0px',
            }}
          />
          {entity === 'lead' && (
            <div>
              <div className='flex justify-between mb-5'>
                <div>
                  <div className='mt-2 text-red-600 text-xs mb-2 font-thin'>
                    {`Showing ${filteredDataSource.length} of ${totalCount} items`}
                  </div>
                  <Input.Search className='w-64'
                    placeholder="Search"
                    onSearch={handleSearch}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                <div className='space-x-2 flex items-center'>
                  <Button onClick={() => setExportModalVisible(true)} className='bg-transparent text-gray-500 flex items-center gap-2 hover:text-blue-500'>
                    <AiOutlineExport />Export to Excel
                  </Button>
                  <AddNewItem key="addNewItem" config={config} />
                </div>
              </div >
            </div>
          )}
          {/* amdin entity show this button for add users  */}
          {entity === 'admin' && (
            <div>
              <div className='flex justify-between items-center mb-5'>
                <AutoCompleteAsync
                  entity={'admin'}
                  displayLabels={['admin']}
                  searchFields={'username'}
                // onUpdateValue={autoCompleteUpdate}
                />
                <div className='space-x-2 flex items-center'>
                  <AddNewItem key="addNewItem" config={config} />
                </div>
              </div >
            </div>
          )}
          {entity === 'teams' && (
            <div>
              <div className='flex justify-between items-center mb-5'>
                <AutoCompleteAsync
                  entity={'teams'}
                  displayLabels={['teams']}
                  searchFields={'username'}
                // onUpdateValue={autoCompleteUpdate}
                />
                <div className='space-x-2 flex items-center'>
                  <AddNewItem key="addNewItem" config={config} />
                </div>
              </div >
            </div>
          )}
          {/* amdin entity show this button for add users  */}
        </div>
        {/* Table component */}
        <Table
          columns={tableColumns}
          rowKey={(item) => item._id}
          dataSource={filteredDataSource}
          pagination={false}
          loading={listIsLoading}
          onChange={handelDataTableLoad}
        />

      </div>
    </>
  );
}