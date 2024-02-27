import { Row, Col, Progress, Button, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';
import Card from '@mui/joy/Card';
import { request } from '@/request';
import RecentTable from './components/RecentTable';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';
import DataYear from './components/DataYear'
import { FcBearish, FcBullish, FcSalesPerformance } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { BiReset } from 'react-icons/bi';


export default function DashboardModule() {
  const translate = useLanguage();
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [counselors, setCounselors] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [paymentMode, setPaymentMode] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [userNames, setUserNames] = useState([]);
  // Use state to store payment data
  const [paymentData, setPaymentData] = useState({ result: null, isLoading: false });



  const fetchData = async () => {
    try {
      const { result, isLoading } = await request.summary({
        entity: 'payment',
        params: {
          institute_name: selectedInstitute,
          university_name: selectedUniversity,
          counselor_email: selectedCounselor,
          status: selectedStatus,
          payment_mode: selectedPaymentMode,
          payment_type: selectedPaymentType,
        },
      });

      // Update the payment data state
      setPaymentData({ result, isLoading });
      console.log('Selected userId:', selectedUserId);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedUniversity, selectedInstitute, selectedCounselor, selectedStatus, selectedPaymentMode, selectedPaymentType]);


  useEffect(() => {
    const fetchData = async () => {
      const { result } = await request.filter({ entity: 'payment' });
      if (result) {
        // Extract unique values for counselors, statuses, institutes, universities, and user IDs
        const uniqueCounselors = [...new Set(result.map(item => item.counselor_email))];
        const uniquePaymentMode = [...new Set(result.map(item => item.payment_mode))];
        const uniquePaymentType = [...new Set(result.map(item => item.payment_type))];
        const uniqueStatuses = [...new Set(result.map(item => item.status))];
        const uniqueInstitutes = [...new Set(result.map(item => item.institute_name))];
        const uniqueUniversities = [...new Set(result.map(item => item.university_name))];
        const uniqueUserNames = [...new Set(result.map(item => item.userId?.fullname))];

        setCounselors(uniqueCounselors);
        setStatuses(uniqueStatuses);
        setPaymentType(uniquePaymentType);
        setInstitutes(uniqueInstitutes);
        setPaymentMode(uniquePaymentMode);
        setUniversities(uniqueUniversities);
        setUserNames(uniqueUserNames); // New state for unique user names
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
    setSelectedPaymentMode(null)
    setSelectedPaymentType(null)
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
              <Progress percent={paymentData?.result?.total_course_fee_total} status="active" strokeColor={{
                from: 'green',
                to: 'blue',
              }} className='mt-3' />
            </div>
          </div>
        </div>
      </Card>
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
            placeholder="Select payment mode"
            className='w-60 h-10 capitalize'
            value={selectedPaymentMode}
            onChange={(value) => setSelectedPaymentMode(value)}
          >
            {paymentMode.map((paymentmode) => (
              <Select.Option className="capitalize font-thin font-mono" key={paymentmode}>
                {paymentmode}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Select
            placeholder="Select payment type"
            className='w-60 h-10 capitalize'
            value={selectedPaymentType}
            onChange={(value) => setSelectedPaymentType(value)}
          >
            {paymentType.map((paymenttype) => (
              <Select.Option className="capitalize font-thin font-mono" key={paymenttype}>
                {paymenttype}
              </Select.Option>
            ))}
          </Select>
        </div>
        {/* Date Range Picker */}
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
          <div>
            <Row>
              <PreviewCard />
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
