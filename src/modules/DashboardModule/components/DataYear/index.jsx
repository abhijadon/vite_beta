import { useEffect, useState } from 'react';
import { Table, Space, Typography, Spin, Pagination, Avatar, Collapse } from 'antd';
import { request } from '@/request';
import useFetch from '@/hooks/useFetch';

const { Text } = Typography;
const { Panel } = Collapse;

const Index = () => {
    const { data: paymentResult, isLoading: paymentLoading } = useFetch(() =>
        request.filter({ entity: 'payment' })
    );

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; // Number of items per page
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const formatTime = (timeString) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        const time = new Date(timeString);
        return time.toLocaleTimeString('en-US', options);
    };

    const sortDataByDateTime = (data) => {
        return data.sort((a, b) => {
            const dateA = new Date(a.date + 'T' + a.time);
            const dateB = new Date(b.date + 'T' + b.time);
            return dateB - dateA;
        });
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsHeaderSticky(scrollPosition > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const generateColor = (input) => {
        const hash = input
            .split('')
            .reduce((acc, char) => char.charCodeAt(0) + (acc << 6) + (acc << 16) - acc, 0);
        const color = `hsl(${hash % 360}, 70%, 80%)`;
        return color;
    };

    if (paymentLoading) {
        return <Spin size="large" />;
    }

    const sortedData = sortDataByDateTime(paymentResult?.result || []);
    const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const columns = [
        {
            title: 'Avatar',
            key: 'avatar',
            render: (text, record) => (
                <Avatar style={{ backgroundColor: generateColor(record.student_name) }}>
                    {record.student_name.charAt(0)}
                </Avatar>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'student_name',
            key: 'student_name',
            render: (text) => <Text>{text}</Text>,
        },
        {
            title: 'Amount',
            dataIndex: 'total_paid_amount',
            key: 'total_paid_amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text) => formatDate(text),
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: (text) => formatTime(text),
        },
        {
            title: 'Details',
            key: 'details',
            render: (text, record) => (
                <Collapse>
                    <Panel header={`Details for ${record.userId.fullname}`} key="1">
                        <Space>
                            <Text>{`Full Name: ${record.userId.fullname}`}</Text>
                            <Text>{`Username: ${record.userId.username}`}</Text>
                        </Space>
                    </Panel>
                </Collapse>
            ),
        },
    ];


    return (
        <div className="space-y-4" >
            <div className={`capitalize text-center text-blue-500 text-base ${isHeaderSticky ? 'sticky-header' : ''}`}>
                <p className="font-thin border-b-2">Recent Transactions</p>
            </div>
            <div className="custom-scrollbar">
                <Table
                    dataSource={paginatedData}
                    columns={columns}
                    pagination={false}

                />
            </div>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={sortedData.length}
                onChange={handleChangePage}
                className="text-center"
            />
        </div>
    );
};

export default Index;