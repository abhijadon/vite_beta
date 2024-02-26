import { Row, Col, Progress, Button, Modal, Input, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';
import Card from '@mui/joy/Card';
import dayjs from 'dayjs';
import { request } from '@/request';
import RecentTable from './components/RecentTable';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';
import DataYear from './components/DataYear'
import { FcBearish, FcBullish, FcSalesPerformance } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { BiReset } from 'react-icons/bi';
import { LocalizationProvider, StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import { CalendarOutlined } from '@ant-design/icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const shortcutsItems = [
  {
    label: 'This Week',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  {
    label: 'Last Week',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, 'day');
      return [prevWeek.startOf('week'), prevWeek.endOf('week')];
    },
  },
  {
    label: 'Last 7 Days',
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, 'day'), today];
    },
  },
  {
    label: 'Current Month',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('month'), today.endOf('month')];
    },
  },
  {
    label: 'Next Month',
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf('month').add(1, 'day');
      return [startOfNextMonth, startOfNextMonth.endOf('month')];
    },
  },
  { label: 'Reset', getValue: () => [null, null] },
];


export default function DashboardModule() {
  const translate = useLanguage();
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
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
  // Use state to store payment data
  const [paymentData, setPaymentData] = useState({ result: null, isLoading: false });

  useEffect(() => {
    const fetchData = async () => {
      // Check if a university is selected
      if (selectedUniversity || selectedInstitute || selectedCounselor) {
        const { result, isLoading } = await request.summary({
          entity: 'payment',
          params: {
            institute_name: selectedInstitute,
            university_name: selectedUniversity,
            counselor_email: selectedCounselor,
          },
        });

        // Update the payment data state
        setPaymentData({ result, isLoading });
      } else {
        // If no university is selected, set payment data to null
        setPaymentData({ result: null, isLoading: false });
      }
    };

    fetchData();
  }, [selectedUniversity, selectedInstitute, selectedCounselor]);


  useEffect(() => {
    const fetchData = async () => {
      const { result } = await request.filter({ entity: 'payment' });
      if (result) {
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
      }
    };

    fetchData();
  }, [selectedUniversity]);
  const handleDateChange = (date) => {
    setSelectedRange(date);
  };

  const openDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  // Function to extract counselor name from email
  const getCounselorName = (email) => {
    // Check if email is defined before splitting
    return email ? email.split('@')[0] : '';
  };

  // Function to reset all values
  const resetValues = () => {
    setSelectedRange([null, null]);
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedCounselor(null);
    setSelectedStatus(null);
    setSelectedUserId(null);
  };

  const amountCardsData = [
    {
      title: 'Total Course Fee',
      color: 'green',
      value: paymentData.result?.total_course_fee,
      total: paymentData.result?.total_course_fee_total,
      icon: <FcSalesPerformance style={{ fontSize: 48, color: 'green' }} />,
    },
    {
      title: 'Total Paid Amount',
      color: 'blue',
      value: paymentData.result?.total_paid_amount,
      total: paymentData.result?.total_paid_amount_total,
      icon: <FcBullish style={{ fontSize: 48, color: 'blue' }} />,
    },
    {
      title: 'Due Amount',
      color: 'red',
      value: paymentData.result?.due_amount,
      total: paymentData.result?.due_amount_total,
      icon: <FcBearish style={{ fontSize: 48, color: 'blue' }} />,
    },
  ];

  const amountCards = amountCardsData.map((card, index) => {
    const percentage = card.total ? (card.value / card.total) * 100 : 0;

    return (
      <Card className="w-1/3 shadow-lg" key={index}>
        <div>
          <div>
            <div className="flex gap-10 justify-between items-center">
              <div>{card.icon}</div>
              <div>
                <div className={`text-${card.color}-500 mb-2 text-sm font-normal font-serif`}>
                  {card.title}
                </div>
                <div className={`text-${card.color}-500 text-2xl`}>₹ {card.value}</div>
              </div>
            </div>
            <div className="mt-2">
              <Progress percent={Math.floor(percentage)} status="active" strokeColor={{
                from: 'green',
                to: 'blue',
              }} className='mt-3' />
            </div>
          </div>
        </div>
      </Card>
    );
  });

  //  this is api 
  const entityData = [
    {
      result: paymentData,
      isLoading: paymentData,
      entity: 'payment',
      title: translate('Status preview'),
    },
  ];

  const statisticCards = entityData.map((data, index) => {
    const { result, entity, isLoading, title } = data;
    return (
      <PreviewCard
        key={index}
        title={title}
        isLoading={isLoading}
        entity={entity}
        statistics={
          !isLoading &&
          result?.performance?.map((item) => ({
            tag: item?.status,
            color: 'blue',
            value: item?.percentage,
          }))
        }
      />
    );
  });


  const filterRender = () => (
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
        {/* Date Range Picker */}
        <div>
          {/* Input for Date Range */}
          <Input
            className='w-52 h-10'
            value={`${selectedRange[0]?.format('YYYY-MM-DD')} - ${selectedRange[1]?.format('YYYY-MM-DD')}`}
            placeholder='Select Date Range'
            onClick={openDatePicker}
            suffix={<CalendarOutlined />}
          />
          {/* Modal for Date Range Picker */}
          <Modal
            visible={isDatePickerVisible}
            onCancel={() => {
              closeDatePicker();
              resetValues(); // Reset values when closing the modal
            }}
            footer={null}
            destroyOnClose={true}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateRangePicker
                value={selectedRange}
                onChange={handleDateChange}
                slotProps={{
                  shortcuts: {
                    items: shortcutsItems,
                  },
                }}
                calendars={1}
              />
            </LocalizationProvider>
          </Modal>
        </div>
        <div>
          <Button title='Reset All Filters' onClick={resetValues} className='bg-transparent text-red-500 font-thin text-lg h-10 hover:text-red-600'>
            <BiReset />
          </Button>
        </div>
      </div>

    </div>
  )





  return (
    <>
      <div>
        <Card className="custom-card mb-5">
          {filterRender()}
        </Card>
      </div>
      <div className='mb-10 flex gap-4'>
        {amountCards}
      </div>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 18 }}>
          <div className="whiteBox shadow" style={{ height: 458 }}>
            <Row className="pad20" gutter={[0, 0]}>
              {statisticCards}
            </Row>
          </div>
        </Col>
        <Col className="gutter-row w-full" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 6 }}>
          <CustomerPreviewCard />
        </Col>
      </Row><div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row w-full" sm={{ span: 24 }} lg={{ span: 12 }}>
          <div>
            <RecentTable />
          </div>
        </Col>

        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="whiteBox shadow-md rounded-xl pad20" style={{ height: '100%' }}>
            <DataYear />
          </div>
        </Col>
      </Row>
    </>
  );
}
