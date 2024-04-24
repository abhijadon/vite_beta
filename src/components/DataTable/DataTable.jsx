import React, { useCallback, useEffect, useState } from 'react';
import { EyeOutlined, EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Table, Button, Card, Select, Input, DatePicker, Modal, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { selectCreatedItem, selectListItems } from '@/redux/crud/selectors';
import useLanguage from '@/locale/useLanguage';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { GrHistory } from "react-icons/gr";
import { useCrudContext } from '@/context/crud';
import * as XLSX from 'xlsx';
import { request } from '@/request';
import { BiReset } from 'react-icons/bi';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { debounce } from 'lodash';
import UpdatePaymentForm from '@/forms/AddPayment';
import StudentDetailsModal from '../StudentDetailsModal';
import HistoryModal from '../HistoryModal';
const { Search } = Input;
const { RangePicker } = DatePicker;

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

export default function DataTable({ config, extra = [] }) {
  let { entity, dataTableColumns } = config;
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const dispatch = useDispatch();
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, modal, editBox, advancedBox } = crudContextAction;
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
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [updatePaymentRecord, setUpdatePaymentRecord] = useState(null);
  const [showStudentDetailsModal, setShowStudentDetailsModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [Paymentstatus, setSelectedPaymentstatus] = useState(null);

  // Function to handle click event on action button
  const handleShowStudentDetails = (record) => {
    setSelectedStudent(record); // Store selected student details
    setShowStudentDetailsModal(true); // Show modal
  };

  const handleCancelAddPaymentModal = () => {
    setShowAddPaymentModal(false);
    setUpdatePaymentRecord(null);
  };

  const handleSuccessUpdate = () => {
    setShowAddPaymentModal(false); // Close the payment modal
    handelDataTableLoad({}, searchQuery); // Reload the table data
  };

  useEffect(() => {
    const fetchData = async () => {
      const { success, result } = await request.list({ entity: 'payment' });
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
      }
    };

    fetchData();
  }, [isSuccess]);

  const resetValues = () => {
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedSession(null);
    setSelectedStatus(null);
    setSelectedUserId(null);
    setSearchQuery('');
    setStartDate(null);
    setEndDate(null);
    setSelectedPaymentstatus(null)
  };

  const handleDateRangeChange = (dates) => {
    if (dates && dates.length === 2) {
      setStartDate(dates[0]);
      setEndDate(dates[1]); // Set the end date correctly
    }
  };

  const items = [
    {
      label: translate('Show'),
      key: 'showDetails',
      icon: <EyeOutlined />,
    }, ,
    {
      label: translate('Edit'),
      key: 'edit',
      icon: <EditOutlined />,
    },
    {
      label: translate('History'),
      key: 'history',
      icon: <GrHistory />,
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

  const handleHistory = async (record) => {
    try {
      const historyData = await request.history({ entity: 'lead', id: record._id });
      // Sort the history data in descending order based on the time it was changed
      if (historyData && historyData.history) {
        historyData.history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      }
      setHistoryData(historyData);
      setShowHistoryModal(true);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };


  const handleEdit = (record) => {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    editBox.open();
    panel.open();
    collapsedBox.open();
  };

  const handleAddpayment = async (record) => {
    try {
      setUpdatePaymentRecord(record); // Ensure record details are correctly set
      setShowAddPaymentModal(true);
    } catch (error) {
      console.error("Error preparing payment update:", error);
    }
  };

  const handleDelete = (record) => {
    dispatch(crud.currentAction({ actionType: 'delete', data: record }));
    modal.open();
  };

  const handleUpdatePassword = (record) => {
    dispatch(crud.currentItem({ data: record }));
    dispatch(crud.currentAction({ actionType: 'update', data: record }));
    advancedBox.open();
    panel.open();
    collapsedBox.open();
  };
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: entity === 'lead' ? items : items.filter(item => item.key !== 'showDetails' && item.key !== 'add' && item.key !== 'history'), // Conditionally render items based on the entity
            onClick: ({ key }) => {
              switch (key) {
                case 'showDetails':
                  handleShowStudentDetails(record); // Handle 'Show Details' action
                  break;
                case 'edit':
                  handleEdit(record);
                  break;
                case 'delete':
                  handleDelete(record);
                  break;
                case 'updatePassword':
                  handleUpdatePassword(record);
                  break;
                case 'add':
                  handleAddpayment(record);
                  break;
                case 'history':
                  handleHistory(record);
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


  const { result: listResult } = useSelector(selectListItems);
  const { items: dataSource } = listResult;


  const handelDataTableLoad = useCallback(
    async (pagination, newSearchQuery = '') => {
      const options = {
        filter: {
          q: newSearchQuery,
          institute: selectedInstitute,
          university: selectedUniversity,
          session: selectedSession,
          status: selectedStatus,
          userId: selectedUserId,
          startDate,
          endDate,
        },
      };

      const { success, result } = await dispatch(crud.list({ entity, options }));
      if (success) {
        const filteredData = filterDataSource(result);
      }
    },
    [entity, selectedInstitute, selectedUniversity, selectedStatus, selectedUserId, selectedSession, startDate, endDate]
  );

  const handleSearch = debounce((value) => {
    setSearchQuery(value);
    handelDataTableLoad({}, value);
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
      const customfields = item.customfields || {};
      const instituteMatch = !selectedInstitute || customfields.institute_name === selectedInstitute;
      const universityMatch = !selectedUniversity || customfields.university_name === selectedUniversity;
      const sessionMatch = !selectedSession || customfields.session === selectedSession;
      const statusMatch = !selectedStatus || customfields.status === selectedStatus;
      const userMatch = !selectedUserId || item.userId?.fullname === selectedUserId;

      const createdDate = new Date(item.created);
      const startDateMatch = !startDate || createdDate >= startDate;
      const endDateMatch = !endDate || createdDate <= endDate;

      const phoneAsString = item.contact?.phone?.toString();
      const emailLowerCase = item.contact?.email?.toLowerCase();

      const searchMatch = !searchQuery || (
        item.lead_id.includes(searchQuery) ||
        (emailLowerCase && emailLowerCase.includes(searchQuery.toLowerCase())) ||
        (typeof phoneAsString === 'string' && phoneAsString.includes(searchQuery)) ||
        item.full_name.includes(searchQuery)
      );

      // Check if paymentStatus matches
      let paymentStatusMatch = true;
      if (Paymentstatus === 'payment received') {
        paymentStatusMatch = customfields.paymentStatus === 'payment received';
      } else if (Paymentstatus === 'payment rejected') {
        paymentStatusMatch = customfields.paymentStatus === 'payment rejected';
      } else if (Paymentstatus === 'payment approved') {
        paymentStatusMatch = customfields.paymentStatus === 'payment approved';
      }

      return instituteMatch && universityMatch && sessionMatch && searchMatch && statusMatch && userMatch && startDateMatch && endDateMatch && paymentStatusMatch;
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

  const renderTable = () => {
    const filteredData = filterDataSource(dataSource);
    return (
      <>
        <Card className='mt-8'>
          <div className='flex justify-between items-center mb-3'>
            {entity === 'lead' && (
              <div className='flex items-center gap-2'>
                <div className="flex justify-center items-center text-red-500">
                  <span className='font-thin text-sm'>Total:</span> <span className='font-thin text-sm'> {filteredData.length}</span>
                </div>
                <Search
                  placeholder="Search by email"
                  onSearch={handleSearch}
                  onChange={(e) => handleSearch(e.target.value)}
                  className='w-full'
                />
              </div>
            )}
            {entity === 'admin' && (
              <div className='flex items-center gap-2'>
                <div className="flex justify-center items-center text-red-500">
                  <span className='font-thin text-sm'>Total:</span> <span className='font-thin text-sm'> {filteredData.length}</span>
                </div>
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
            dataSource={filteredData}
            pagination={true}
            onChange={handelDataTableLoad}
          />
        </Card>
      </>
    );
  };


  const handlePaymentStatus = (status) => {
    setSelectedPaymentstatus(status);
  };

  const renderFilters = () => {
    // Calculate counts for each payment status
    const paymentReceivedCount = dataSource.filter(item => item.customfields?.paymentStatus === 'payment received').length;
    const paymentApprovedCount = dataSource.filter(item => item.customfields?.paymentStatus === 'payment approved').length;
    const paymentRejectedCount = dataSource.filter(item => item.customfields?.paymentStatus === 'payment rejected').length;

    if (entity === 'lead') {
      return (
        <div>
          <div className='flex items-center space-x-2'>
            <div>
              <Select showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
              <Select showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
              <Select showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
              <Select showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
              <Select showSearch optionFilterProp="children" filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
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
          </div>
          <div className='flex items-center space-x-2'>
            <div>
              <RangePicker
                className='w-60 h-10 mt-3 capitalize'
                onChange={handleDateRangeChange}
                style={{ width: '100%' }}
                placeholder={['Start Date', 'End Date']}
              />
            </div>
            <div>
              {/* Button to filter Payment Received */}
              <Button className='w-24 mt-3 capitalize text-center text-sm font-thin hover:bg-cyan-100 bg-cyan-100 hover:text-cyan-700 text-cyan-700' onClick={() => handlePaymentStatus('payment received')}>
                <span className="font-thin text-sm -ml-2">Received</span>
                <span className="font-thin text-sm ml-1">({paymentReceivedCount})</span>
              </Button>
            </div>
            <div>
              {/* Button to filter Payment Approved */}
              <Button className='w-24 mt-3 capitalize text-center text-sm font-thin hover:bg-green-100 bg-green-100 hover:text-green-700 text-green-700' onClick={() => handlePaymentStatus('payment approved')}>
                <span className="font-thin text-sm -ml-2">Approved</span>
                <span className="font-thin text-sm ml-1">({paymentApprovedCount})</span>
              </Button>
            </div>
            <div>
              {/* Button to filter Payment Rejected */}
              <Button className='w-24 mt-3 capitalize text-center text-sm font-thin hover:bg-red-100 bg-red-100 hover:text-red-700 text-red-700' onClick={() => handlePaymentStatus('payment rejected')}>
                <span className="font-thin text-sm -ml-2">Rejected</span>
                <span className="font-thin text-sm ml-1">({paymentRejectedCount})</span>
              </Button>
            </div>
          </div>
          <div className='relative float-right -mt-10 mr-2'>
            <Button title='Reset All Filters' onClick={resetValues} className='text-red-500 text-lg h-10 hover:text-red-600 bg-white rounded'>
              <BiReset />
            </Button>
          </div>
        </div>
      );
    }

    return null;
  };

  // Add useEffect to handle automatic table reload
  useEffect(() => {
    if (isSuccess) {
      handelDataTableLoad({}, searchQuery); // Call handelDataTableLoad function with the current searchQuery
    }
  }, [isSuccess, handelDataTableLoad, searchQuery]);


  return (
    <>
      <div>
        {renderFilters()}
      </div>
      <div className="table-container">
        {renderTable()}
      </div>
      <Drawer
        title="Add Payment"
        open={showAddPaymentModal}
        onClose={handleCancelAddPaymentModal}
        footer={null}
        width={500}
      >
        {/* Pass the onCloseModal callback to the UpdatePaymentForm component */}
        {updatePaymentRecord && <UpdatePaymentForm entity="lead" id={updatePaymentRecord?._id} recordDetails={updatePaymentRecord} onCloseModal={handleSuccessUpdate} />}
      </Drawer>
      <div>
        <StudentDetailsModal
          visible={showStudentDetailsModal}
          onClose={() => setShowStudentDetailsModal(false)}
          student={selectedStudent}
        />
      </div>
      <HistoryModal
        showHistoryModal={showHistoryModal}
        historyData={historyData}
        onClose={() => setShowHistoryModal(false)}
      />
    </>
  );
}
