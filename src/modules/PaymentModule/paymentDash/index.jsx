import { Row, Button, Select, Input, Col, message } from 'antd';
import { request } from '@/request';
import SummaryCard from '../../DashboardModule/components/SummaryCard';
import useLanguage from '@/locale/useLanguage';
import useFetch from '@/hooks/useFetch';
import { useState, useEffect } from 'react';
import { useMoney } from '@/settings';
const PaymentSummary = () => {
    const { moneyFormatter } = useMoney();
    const translate = useLanguage();
    const [institutes, setInstitutes] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [counselors, setCounselors] = useState([]);
    const [selectedInstitute, setSelectedInstitute] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectedCounselor, setSelectedCounselor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredPaymentData, setFilteredPaymentData] = useState({});
    const [universityExistenceMessage, setUniversityExistenceMessage] = useState('');

    const handleInstituteChange = (value) => {
        setSelectedInstitute(value);
    };

    const handleUniversityChange = async (value) => {
        setSelectedUniversity(value);
        setUniversityExistenceMessage(''); // Reset the university existence message

        // Check if the selected university exists in the dataset
        if (value && universities.indexOf(value) === -1) {
            setUniversityExistenceMessage(`The specified university (${value}) does not exist in the dataset.`);
            setFilteredPaymentData({ total_course_fee: 0 }); // Set payment to 0
        } else {
            setFilteredPaymentData({}); // Clear filtered data
        }
    };

    const handleCounselorChange = (value) => {
        setSelectedCounselor(value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const resetData = () => {
        setSelectedInstitute('');
        setSelectedUniversity('');
        setSelectedCounselor('');
        setSelectedDate('');
        setFilteredPaymentData({});
        setUniversityExistenceMessage('');
    };
    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/payment/filter`);
            const data = await response.json();

            if (data.success && data.result !== null) {
                const uniqueInstitutes = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.institute_name))] : [];
                const uniqueUniversities = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.university_name))] : [];
                const uniqueCounselors = Array.isArray(data.result) ? [...new Set(data.result.map((item) => item.counselor_email))] : [];

                setInstitutes(uniqueInstitutes);
                setUniversities(uniqueUniversities);
                setCounselors(uniqueCounselors);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (selectedInstitute || selectedUniversity || selectedCounselor || selectedDate) {
                try {
                    const response = await fetch(
                        `${import.meta.env.VITE_BACKEND_SERVER}api/payment/summary?institute_name=${selectedInstitute}&university_name=${selectedUniversity}&counselor_email=${selectedCounselor}&date=${selectedDate}`
                    );
                    const data = await response.json();
                    if (data.success && data.result !== null) {
                        setFilteredPaymentData(data.result || {});

                        let successMessage = 'Data fetched successfully.';
                        if (selectedUniversity) {
                            successMessage = `Data fetched successfully for the specified university: ${selectedUniversity}.`;
                        } else if (selectedInstitute) {
                            successMessage = `Data fetched successfully for the specified institute: ${selectedInstitute}.`;
                        } else if (selectedCounselor) {
                            successMessage = `Data fetched successfully for the specified counselor: ${getEmailName(selectedCounselor)}.`;
                        } else if (selectedDate) {
                            successMessage = `Data fetched successfully for the specified date: ${selectedDate}.`;
                        }
                        message.success(successMessage);
                    } else {
                        setFilteredPaymentData({ total_course_fee: 0 }); // Set payment to 0
                        let errorMessage = 'No data found based on the specified filters.';
                        if (selectedUniversity) {
                            errorMessage = `No data found for the specified filters and university: ${selectedUniversity}.`;
                        } else if (selectedInstitute) {
                            errorMessage = `No data found for the specified filters and institute: ${selectedInstitute}.`;
                        } else if (selectedCounselor) {
                            errorMessage = `No data found for the specified filters and counselor: ${getEmailName(selectedCounselor)}.`;
                        } else if (selectedDate) {
                            errorMessage = `No data found for the specified filters and date: ${selectedDate}.`;
                        }
                        message.error(errorMessage);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        const getEmailName = (email) => {
            console.log('Email:', email); // Log the email value
            if (!email) return '';
            const parts = email.split('@');
            return parts[0];
        };
        fetchData();
    }, [selectedInstitute, selectedUniversity, selectedCounselor, selectedDate]);
    const { result: paymentResult, isLoading: paymentLoading } = useFetch(() =>
        request.summary({ entity: 'payment' })
    );

    const invoiceCard = (
        <SummaryCard
            title={translate('Total Course Fee')}
            tagColor={'purple'}
            prefix={translate('Total Amount')}
            isLoading={paymentLoading}
            tagContent={`${moneyFormatter({ amount: filteredPaymentData.total_course_fee || paymentResult?.total_course_fee })}`}
        />
    );

    const totalPaidAmountCard = (
        <SummaryCard
            title={translate('Total Paid Amount')}
            tagColor={'blue'}
            prefix={translate('Total Amount')}
            isLoading={paymentLoading}
            tagContent={`${moneyFormatter({ amount: filteredPaymentData.total_paid_amount || paymentResult?.total_paid_amount })}`}
        />
    );
    const dueAmountCard = (
        <SummaryCard
            title={translate('Due Amount')}
            tagColor={'red'}
            prefix={translate('Due amount')}
            isLoading={paymentLoading}
            tagContent={`${moneyFormatter({ amount: filteredPaymentData.due_amount || paymentResult?.due_amount })}`}
        />
    );
    const getEmailName = (email) => {

        if (!email) return '';
        const parts = email.split('@');
        return parts[0];
    };
    return (
        <>
            <div className='mb-10'>
                {universityExistenceMessage && (
                    <Row gutter={[32, 32]}>
                        <Col span={24}>
                            <div style={{ color: 'red' }}>{universityExistenceMessage}</div>
                        </Col>
                    </Row>
                )}
                <div className='flex justify-items-start items-center mb-[30px]'>
                    <Select
                        value={selectedInstitute}
                        onChange={handleInstituteChange}
                        placeholder="Select Institute Name"
                        style={{ width: 200, marginRight: 16 }}
                    >
                        <Select.Option value=''>Select Institute Name</Select.Option>
                        {institutes.map((option) => (
                            <Select.Option key={option} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        value={selectedUniversity}
                        onChange={handleUniversityChange}
                        style={{ width: 200, marginRight: 16 }}
                    >
                        <Select.Option value=''>Select University Name</Select.Option>
                        {universities.map((option) => (
                            <Select.Option key={option} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        value={selectedCounselor}
                        onChange={handleCounselorChange}
                        style={{ width: 200, marginRight: 16 }}
                    >
                        <Select.Option value=''>Select Counselor</Select.Option>
                        {counselors.map((email) => (
                            <Select.Option key={email} value={email}>
                                {getEmailName(email)}
                            </Select.Option>
                        ))}
                    </Select>

                    <Input className='text-sm font-thin'
                        type='date'
                        onChange={handleDateChange}
                        value={selectedDate}
                        style={{ width: '140px', marginRight: '16px', textTransform: 'uppercase', }}
                    />

                    <Button onClick={resetData}>Reset All</Button>
                </div>

                <Row gutter={[32, 32]}>
                    {invoiceCard}
                    {totalPaidAmountCard}
                    {dueAmountCard}
                </Row>
            </div>
        </>
    );
};

export default PaymentSummary;
