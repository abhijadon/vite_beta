import { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Progress, Select } from 'antd';
import CircularProgress from '@mui/joy/CircularProgress';
import { GrPowerReset } from "react-icons/gr";
import { AiOutlineExport } from "react-icons/ai";
import SvgIcon from '@mui/joy/SvgIcon';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Dropdown, Table, Button, Input } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';

import { useSelector, useDispatch } from 'react-redux';
import useLanguage from '@/locale/useLanguage';
import { erp } from '@/redux/erp/actions';
import { selectListItems } from '@/redux/erp/selectors';
import { useErpContext } from '@/context/erp';
import { generate as uniqueId } from 'shortid';
import { useNavigate } from 'react-router-dom';
import useResponsiveTable from '@/hooks/useResponsiveTable';
import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
const { Search } = Input;




function AddNewItem({ config, hasCreate = true }) {
  const navigate = useNavigate();
  const { ADD_NEW_ENTITY, entity } = config;

  const handleClick = () => {
    navigate(`/${entity.toLowerCase()}/create`);
  };

  if (hasCreate)
    return (
      <Button onClick={handleClick} type="primary" icon={<PlusOutlined />}>
        {ADD_NEW_ENTITY}
      </Button>
    );
  else return null;
}
export default function DataTable({ config, extra = [] }) {
  const translate = useLanguage();
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [totalCount, setTotalCount] = useState(0); // State to hold the total count of data
  const [filteredCount, setFilteredCount] = useState(0);
  let { entity, dataTableColumns, create = true } = config;
  const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);
  const { pagination, items: dataSource } = listResult;
  const { erpContextAction } = useErpContext();
  const { modal } = erpContextAction;
  {/* filters code  */ }
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [counselors, setCounselors] = useState([]);
  const [paymentType, setpaymentType] = useState([]);
  const [filters, setFilters] = useState({
    selectedInstitute: '',
    selectedUniversity: '',
    selectedCounselor: '',
    selectedPayment: '',
  });
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });

    // Calculate and update the filtered count
    const filteredData = dataSource.filter(item => {
      const { selectedInstitute, selectedUniversity, selectedCounselor, selectedPayment } = filters;
      return (
        (!selectedInstitute || item.institute_name === selectedInstitute) &&
        (!selectedUniversity || item.university_name === selectedUniversity) &&
        (!selectedCounselor || item.counselor_email === selectedCounselor) &&
        (!selectedPayment || item.payment_type === selectedPayment)
      );
    });

    setFilteredCount(filteredData.length);
  };

  const handleResetFilters = () => {
    setFilters({
      selectedInstitute: '',
      selectedUniversity: '',
      selectedCounselor: '',
      selectedPayment: '',
    });

    // Reset filtered count to total count
    setFilteredCount(totalCount);
  };

  {/* filters code  */ }

  /*api fetch */
  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/payment/filter`);
      const data = await response.json();

      if (data.success && data.result !== null) {
        // Update the totalCount state with the count received from the API
        setTotalCount(data.count);
        setFilteredCount(data.count)
        const uniqueInstitutes = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.institute_name))] : [];
        const uniqueUniversities = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.university_name))] : [];
        const uniqueCounselors = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.counselor_email))] : [];
        const uniquePayment = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.payment_type))] : [];

        setInstitutes(uniqueInstitutes);
        setUniversities(uniqueUniversities);
        setCounselors(uniqueCounselors);
        setpaymentType(uniquePayment);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const controller = new AbortController();

    const fetchPaymentSummary = async () => {
      try {
        const { selectedInstitute, selectedUniversity, selectedCounselor, selectedPayment } = filters;
        const queryParams = new URLSearchParams({
          institute_name: selectedInstitute,
          university_name: selectedUniversity,
          counselor_email: selectedCounselor,
          payment_type: selectedPayment
        });
        const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/payment/summary?${queryParams}`, { signal: controller.signal });
        const data = await response.json();
        setPaymentSummary(data);
      } catch (error) {
        console.error('Error fetching payment summary:', error);
      }
    };

    fetchPaymentSummary();

    return () => {
      controller.abort();
    };
  }, [filters]);

  {/*api fetch */ }


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
      label: translate('Download'),
      key: 'download',
      icon: <FilePdfOutlined />,
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

  const navigate = useNavigate();

  const handleRead = (record) => {
    dispatch(erp.currentItem({ data: record }));
    navigate(`/${entity}/read/${record._id}`);
  };
  const handleEdit = (record) => {
    dispatch(erp.currentAction({ actionType: 'update', data: record }));
    navigate(`/${entity}/update/${record._id}`);
  };
  const handleDownload = (record) => {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${record._id}.pdf`, '_blank');
  };

  const handleDelete = (record) => {
    dispatch(erp.currentAction({ actionType: 'delete', data: record }));
    modal.open();
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
            items,
            onClick: ({ key }) => {
              switch (key) {
                case 'read':
                  handleRead(record);
                  break;
                case 'edit':
                  handleEdit(record);
                  break;
                case 'download':
                  handleDownload(record);
                  break;
                case 'delete':
                  handleDelete(record);
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

  const dispatch = useDispatch();

  const handelDataTableLoad = (pagination) => {
    const options = { page: pagination.current || 1, items: pagination.pageSize || 10 };
    dispatch(erp.list({ entity, options }));
  };

  const dispatcher = () => {
    dispatch(erp.list({ entity }));
  };

  useEffect(() => {
    const controller = new AbortController();
    dispatcher();
    return () => {
      controller.abort();
    };
  }, []);

  const { tableColumns, tableHeader } = useResponsiveTable(
    dataTableColumns,
    items
  );

  {/* progrsh bar */ }
  const calculatePercentage = (currentAmount, targetAmount) => {
    return (currentAmount / targetAmount) * 100;
  };
  const percentage1 = paymentSummary ? calculatePercentage(paymentSummary.result.total_course_fee, 3000000) : 0;
  const percentage2 = paymentSummary ? calculatePercentage(paymentSummary.result.total_course_feet, 2000000) : 0;
  const percentage3 = paymentSummary ? calculatePercentage(paymentSummary.result.total_course_fee, 1000000) : 0;
  {/* progrsh bar */ }
  {/* progrsh bar */ }

  {/* email split code onlye show name */ }
  {/* email split code onlye show name */ }

  const getEmailName = (email) => {
    if (!email) return '';
    const parts = email.split('@');
    return parts[0];
  };


  useEffect(() => {
    const filteredData = dataSource.filter(item => {
      const { selectedInstitute, selectedUniversity, selectedCounselor, selectedPayment } = filters;
      return (
        (!selectedInstitute || item.institute_name === selectedInstitute) &&
        (!selectedUniversity || item.university_name === selectedUniversity) &&
        (!selectedCounselor || item.counselor_email === selectedCounselor) &&
        (!selectedPayment || item.payment_type === selectedPayment)
      );
    });

    setFilteredCount(filteredData.length);
  }, [filters]);

  const filteredData = dataSource.filter(item => {
    const { selectedInstitute, selectedUniversity, selectedCounselor, selectedPayment } = filters;
    return (
      (!selectedInstitute || item.institute_name === selectedInstitute) &&
      (!selectedUniversity || item.university_name === selectedUniversity) &&
      (!selectedCounselor || item.counselor_email === selectedCounselor) &&
      (!selectedPayment || item.payment_type === selectedPayment)
    );
  });

  return (
    <>
      {entity === 'payment' && (
        <div>
          <div className='mb-10 mt-4 relative'>
            <div>
              <GrPowerReset onClick={handleResetFilters} className='float-right ml-5 text-xl font-thin text-red-600 cursor-pointer' title='Reset All ' />

            </div>
          </div>
          <div className='flex justify-center items-center mb-10 gap-3 -mt-20'>
            <Select
              className='w-72 shadow h-10'
              value={filters.selectedInstitute}
              onChange={value => handleFilterChange('selectedInstitute', value)}
              placeholder="Select Institute Name"
            >
              <Select.Option value=''>Select Institute Name</Select.Option>
              {institutes.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>

            <Select
              className='w-72 shadow h-10'
              value={filters.selectedUniversity}
              onChange={value => handleFilterChange('selectedUniversity', value)}
              placeholder="Select University Name"
            ><Select.Option value=''>Select University Name</Select.Option>
              {universities.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>

            <Select
              className='w-72 shadow h-10'
              value={filters.selectedCounselor}
              onChange={value => handleFilterChange('selectedCounselor', value)}
              placeholder="Select Counselor Name"
            >
              <Select.Option value=''>Select Counselor</Select.Option>
              {counselors.map((email) => (
                <Select.Option key={email} value={email}>
                  {getEmailName(email)}
                </Select.Option>
              ))}
            </Select>
            <Select
              className='w-72 shadow h-10'
              value={filters.selectedPayment}
              onChange={value => handleFilterChange('selectedPayment', value)}
              placeholder="Select Payment_type"
            >
              <Select.Option value=''>Select Payment Type</Select.Option>
              {paymentType.map((payment) => (
                <Select.Option key={payment} value={payment}>
                  {payment}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      )}

      <div ref={tableHeader}>
        <div className='mb-24'>
          {paymentSummary && entity === 'payment' && (
            <div className='mb-10 flex gap-4'>
              <Card className="w-1/3 shadow-lg">
                <div className='flex justify-between'>
                  <div>
                    <CardContent orientation="horizontal">
                      <CardContent>
                        <Typography className="text-gray-500">Total Course Fee</Typography>
                        <Typography level="h3" className="text-green-500">₹ {paymentSummary.result.total_course_fee}</Typography>
                      </CardContent>
                    </CardContent>
                  </div>
                  <div>
                    <CircularProgress size="lg" determinate value={percentage1}>
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </SvgIcon>
                    </CircularProgress>
                  </div>
                </div>
                <Progress percent={Math.floor(percentage1)} status="active" strokeColor={{
                  from: 'green',
                  to: 'blue',
                }} className='mt-3' />
              </Card>
              <Card className="w-1/3 shadow-lg">
                <div className='flex justify-between'>
                  <div>
                    <CardContent orientation="horizontal">
                      <CardContent>
                        <Typography className="text-gray-500 ">Total Paid Amount</Typography>
                        <Typography level="h3" className="text-blue-500">₹ {paymentSummary.result.total_paid_amount}</Typography>
                      </CardContent>
                    </CardContent>
                  </div>
                  <div>
                    <CircularProgress size="lg" determinate value={percentage2}>
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </SvgIcon>
                    </CircularProgress>
                  </div>
                </div>

                <Progress percent={Math.floor(percentage2)} status="active" strokeColor={{
                  from: 'blue',
                  to: 'black',
                }} className='mt-3' />
              </Card>
              <Card className="w-1/3 shadow-lg">
                <div className='flex justify-between'>
                  <div>
                    <CardContent orientation="horizontal">
                      <CardContent>
                        <Typography className="text-gray-500 ">Due Amount</Typography>
                        <Typography level="h3" className="text-red-500">₹ {paymentSummary.result.due_amount}</Typography>
                      </CardContent>
                    </CardContent>
                  </div>
                  <div>
                    <CircularProgress size="lg" determinate value={percentage3}>
                      <SvgIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          />
                        </svg>
                      </SvgIcon>
                    </CircularProgress>
                  </div>
                </div>
                <Progress percent={Math.floor(percentage3)} status="active" strokeColor={{
                  from: 'red',
                  to: 'green',
                }} className='mt-3' />
              </Card>
            </div>
          )}
        </div>

        <PageHeader
          ghost={true}
          style={{
            padding: '20px 0px',
          }}
        >
          {entity === 'payment' && (
            <div>
              <div className='flex justify-between items-center'>
                <div className='grid grid-rows-1 gap-1 font-thin text-red-500 '>
                  <p>Showing {totalCount} to {filteredCount}</p>
                  <Search placeholder="input search text" allowClear style={{ width: 200 }} />
                </div>
                <div className='flex items-center gap-4'>
                  <Button onClick={handelDataTableLoad} key={`${uniqueId()}`} icon={<AiOutlineExport />} className='flex items-center bg-transparent text-gray-500 hover:text-black p-4 h-6'>
                    {translate('Export')}
                  </Button>
                  <AddNewItem config={config} key={`${uniqueId()}`} hasCreate={create} />
                </div>

              </div>
            </div>
          )}
        </PageHeader>
      </div>
      <Table
        columns={tableColumns}
        rowKey={(item) => item._id}
        dataSource={filteredData}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />

    </>
  );
}


