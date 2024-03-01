import React, { useEffect, useState } from 'react';
import { Row, Col, Progress, Button, Select, Card } from 'antd';
import { request } from '@/request';
import RecentTable from './components/RecentTable';
import PreviewCard from './components/PreviewCard';
import CustomerPreviewCard from './components/CustomerPreviewCard';
import DataYear from './components/DataYear';
import { FcBearish, FcBullish, FcSalesPerformance } from "react-icons/fc";
import { BiReset } from 'react-icons/bi';

export default function DashboardModule() {
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [statuses, setStatuses] = useState([]);
  const [paymentMode, setPaymentMode] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const [paymentData, setPaymentData] = useState({ result: null });

  useEffect(() => {
    fetchData();
  }, [selectedUniversity, selectedInstitute, selectedStatus, selectedPaymentMode, selectedPaymentType]);

  useEffect(() => {
    fetchData();
  }, []);
  // Modify fetchData to accept a callback
  const fetchData = async (callback) => {
    try {
      setPaymentData({ result: null });

      const params = {
        institute_name: selectedInstitute,
        university_name: selectedUniversity,
        status: selectedStatus,
        payment_mode: selectedPaymentMode,
        payment_type: selectedPaymentType,
      };

      const { result } = await request.summary({ entity: 'payment', params });

      setPaymentData({ result }, () => {
        if (callback) {
          callback();
        }
      });
    } catch (error) {
      setPaymentData({ result: null });
      console.error('Error fetching data:', error);
    }
  };

  const resetValues = async () => {
    setSelectedInstitute(null);
    setSelectedUniversity(null);
    setSelectedStatus(null);
    setSelectedUserId(null);
    setSelectedPaymentMode(null);
    setSelectedPaymentType(null);

    // Use the callback function to ensure the state is updated before fetching data
    await fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const { result } = await request.filter({ entity: 'payment' });
      if (result) {
        const uniquePaymentMode = [...new Set(result.map(item => item.payment_mode))];
        const uniquePaymentType = [...new Set(result.map(item => item.payment_type))];
        const uniqueStatuses = [...new Set(result.map(item => item.status))];
        const uniqueInstitutes = [...new Set(result.map(item => item.institute_name))];
        const uniqueUniversities = [...new Set(result.map(item => item.university_name))];
        const uniqueUserNames = [...new Set(result.map(item => item.userId?.fullname))];

        setStatuses(uniqueStatuses);
        setPaymentType(uniquePaymentType);
        setInstitutes(uniqueInstitutes);
        setPaymentMode(uniquePaymentMode);
        setUniversities(uniqueUniversities);
        setUserNames(uniqueUserNames);
      }
    };
    fetchData();
  }, []);

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
    return (
      <Card className="w-1/3 shadow drop-shadow-lg" key={index}>
        <div>
          <div>
            <div className="flex gap-10 justify-between items-center">
              <div>{card.icon}</div>
              <div>
                <div className={`text-${card.color}-500 mb-2 text-sm font-normal`}>
                  {card.title}
                </div>
                <div className={`text-${card.color}-500 text-2xl`}>₹ {card.value}</div>
              </div>
            </div>
            <div className="mt-2">
              <Progress
                percent={Math.min(Math.round((card.value / 50000000) * 100), 100)}
                status="active"
                strokeColor={{
                  '0%': 'red',
                  '40%': 'blue',
                  '100%': 'green',
                }}
                className='mt-3'
              />
            </div>
          </div>
        </div>
      </Card>
    );
  });

  const SelectOption = React.memo(({ value }) => (
    <Select.Option>{value}</Select.Option>
  ));
  const filterRender = () => (
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
              <SelectOption key={institute} value={institute} />
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
              <SelectOption key={university} value={university} />
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
              <SelectOption key={status} value={status} />
            ))}
          </Select>
        </div>
        <div>
          <Select
            placeholder="Select payment mode"
            className='w-60 h-10 capitalize'
            value={selectedPaymentMode}
            onChange={(value) => setSelectedPaymentMode(value)}
          >
            {paymentMode.map((paymentmode) => (
              <SelectOption key={paymentmode} value={paymentmode} />
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
              <SelectOption key={paymenttype} value={paymenttype} />
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
              <SelectOption key={userName} value={userName} />
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
  );

  return (
    <>
      <div>
        <Card className="custom-card shadow drop-shadow-md">
          {filterRender()}
        </Card>
        <div className="space30"></div>
      </div>
      <div className='flex gap-4'>
        {amountCards}
      </div>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
          <div>
            <Row>
              <PreviewCard />
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }}>
          <div>
            <Card className="shadow drop-shadow-lg w-full h-[355px]">
              <RecentTable />
            </Card>
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[32, 32]}>
        <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 14 }}>
          <Card className="shadow drop-shadow-lg" >
            <DataYear />
          </Card>
        </Col>
        <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 10 }}>
          <Card className="shadow drop-shadow-lg w-full h-full" >
            <CustomerPreviewCard />
          </Card>
        </Col>
      </Row>
    </>
  );
}
