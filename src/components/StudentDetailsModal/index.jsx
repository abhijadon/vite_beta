import React, { useState, useEffect } from 'react';
import { Button, Drawer, Modal, Table } from 'antd';
import moment from 'moment';
import { PiStudent } from "react-icons/pi";
import { SiContactlesspayment } from "react-icons/si";
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const StudentDetailsModal = ({ visible, onClose, student }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [installmentData, setInstallmentData] = useState([]);
    const [dueAmount, setDueAmount] = useState(0);

    useEffect(() => {
        if (student) {
            const totalDue = parseFloat(student.customfields.total_course_fee) - parseFloat(student.customfields.total_paid_amount);
            setDueAmount(totalDue);
        }
    }, [student]);

    const handleViewInstallment = () => {
        if (student) {
            const combinedData = student.previousData.map(data => ({
                installment_type: data.installment_type,
                paymentStatus: data.paymentStatus,
                payment_mode: data.payment_mode,
                payment_type: data.payment_type,
                total_course_fee: data.total_course_fee,
                total_paid_amount: data.total_paid_amount,
                paid_amount: data.paid_amount,
                due_amount: data.due_amount,
                date: moment(data.date).format('DD/MM/YYYY'),
            }));
            setInstallmentData(combinedData);
            setModalVisible(true);
        }
    };

    const columns = [
        {
            title: 'Installment Type',
            dataIndex: 'installment_type',
            key: 'installment_type',
        },
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: (text) => {
                let color = '';
                let icon = '';

                switch (text) {
                    case 'Payment Approved':
                        icon = <CheckCircleOutlined style={{ color: '#009933' }} />;
                        color = '#009933';
                        break;
                    case 'Payment Rejected':
                        icon = <CloseCircleOutlined style={{ color: '#E50201 ' }} />;
                        color = '#E50201 ';
                        break;
                    default:
                        color = '#336699';
                        break;
                }

                return (
                    <span style={{ color }}>
                        {text} {icon}
                    </span>
                );
            },
        },
        {
            title: 'Payment Mode',
            dataIndex: 'payment_mode',
            key: 'payment_mode',
        },
        {
            title: 'Payment Type',
            dataIndex: 'payment_type',
            key: 'payment_type',
        },
        {
            title: 'Total course fee',
            dataIndex: 'total_course_fee',
            key: 'total_course_fee',
        },
        {
            title: 'Total paid amount',
            dataIndex: 'total_paid_amount',
            key: 'total_paid_amount',
        },
        {
            title: 'Paid amount',
            dataIndex: 'paid_amount',
            key: 'paid_amount',
        },
        {
            title: 'Due amount',
            dataIndex: 'due_amount',
            key: 'due_amount',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ];
    return (
        <>
            <Drawer
                placement='right'
                open={visible}
                footer={null}
                onClose={onClose}
                width={1000}
            >
                {student && (
                    <>
                        <div className='flex items-center gap-1 mb-5 -mt-5 ml-4'>
                            <span className='font-thin text-lg'><PiStudent /></span><span className='font-thin text-lg'>Student Details</span>
                        </div>
                        <div className='relative float-right -mt-10 font-thin text-base'>
                            {moment(student.created).format('DD/MM/YYYY')}
                        </div>
                        <div className='flex justify-items-start items-center gap-10'>
                            <ul className='list-disc'>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Student ID</span>
                                    <span className='text-sm font-thin text-gray-500 '>{student.lead_id}</span>
                                </li>
                                <li className=' border-b p-1 ml-8 grid grid-cols-2 gap-20'>
                                    <span className='text-base font-thin text-gray-700'>Fullname</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.full_name}</span>
                                </li>
                                <li className=' border-b p-1 ml-8 grid grid-cols-2 gap-20 '>
                                    <span className='text-base font-thin text-gray-700'>Email</span>
                                    <span className='text-sm font-thin text-left text-gray-500'>{student.contact.email}</span>
                                </li>
                                <li className=' border-b p-1 ml-8 grid grid-cols-2 gap-20'>
                                    <span className='text-base font-thin text-gray-700'>Phone</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.contact.phone}</span>
                                </li>
                                <li className=' border-b p-1 ml-8 grid grid-cols-2 gap-20'>
                                    <span className='text-base font-thin text-gray-700'>Course</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.education.course}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Specialization</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.enter_specialization}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Session</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.session}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Status</span>
                                    <span className='text-sm font-thin text-gray-500'>
                                        {student.customfields.status === 'New' && (
                                            <span className='mt-3 capitalize text-center text-sm font-thin hover:bg-blue-100 bg-blue-100 hover:text-blue-700 text-blue-700 pl-2 pr-2'>New</span>
                                        )}
                                        {student.customfields.status === 'Cancel' && (
                                            <span className='mt-3 capitalize text-center text-sm font-thin hover:bg-red-100 bg-red-100 hover:text-red-700 text-red-700 pl-2 pr-2'>Cancel</span>
                                        )}
                                        {student.customfields.status === 'Alumini' && (
                                            <span className='mt-3 capitalize text-center text-sm font-thin hover:bg-green-100 bg-green-100 hover:text-green-700 text-green-700 pl-2 pr-2'>Alumini</span>
                                        )}
                                        {student.customfields.status === 'Not Intrested' && (
                                            <span style={{ color: 'orange' }}>Not Intrested</span>
                                        )}
                                        {student.customfields.status === 'Enrolled' && (
                                            <span className='capitalize text-center text-sm font-thin hover:bg-yellow-100 bg-yellow-100 hover:text-yellow-700 text-yellow-700 pl-2 pr-2'>Enrolled</span>
                                        )}
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Admission Type</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.admission_type}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Institute Name</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.institute_name}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>University Name</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.university_name}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>User</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.userId?.fullname}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Date of Birth</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.dob}</span>
                                </li>
                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Gender</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.gender}</span>
                                </li>

                                <li className='grid grid-cols-2 gap-20 border-b p-1 ml-8'>
                                    <span className='text-base font-thin text-gray-700'>Remark</span>
                                    <span className='text-sm font-thin text-gray-500'>{student.customfields.remark}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='flex items-center gap-1 mb-5 mt-10 ml-4'><span className='font-thin text-xl'><SiContactlesspayment /></span><span className='font-thin text-lg'>Payment Details</span></div>
                            <div>
                                <ul>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Payment Mode</span>
                                        <span className='text-sm font-thin text-gray-500'>{student.customfields.payment_mode}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Payment Type</span>
                                        <span className='text-sm font-thin text-gray-500'>{student.customfields.payment_type}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Installment</span>
                                        <span className='text-sm font-thin text-gray-500'>{student.customfields.installment_type}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Total Course Fee</span>
                                        <span className='text-sm font-thin text-[#FF0066] relative text-justify'><span className='mr-1'>&#x20B9;</span>{student.customfields.total_course_fee}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Total Paid Amount</span>
                                        <span className='text-sm font-thin text-[#FF0066] relative text-justify'><span className='mr-1'>&#x20B9;</span>{student.customfields.total_paid_amount}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Paid Amount</span>
                                        <span className='text-sm font-thin text-[#FF0066] relative text-justify'><span className='mr-1'>&#x20B9;</span>{student.customfields.paid_amount}</span>
                                    </li>
                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Due Amount</span>
                                        <span className='text-sm font-thin text-[#FF0066] relative text-justify'><span className='mr-1'>&#x20B9;</span>{dueAmount}</span>
                                    </li>

                                    <li className='grid grid-cols-2 gap-20 border-b p-1.5 ml-8'>
                                        <span className='text-base font-thin text-gray-700'>Payments</span>
                                        <Button onClick={handleViewInstallment} className='hover:bg-[#CCFFCC] pl-2 pr-2 bg-[#CCFFCC] hover:text-[#333300] text-[#333300] max-w-32 text-center font-thin text-sm'>View Payments</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                )
                }
            </Drawer >
            <Modal
                title="Previous Installments"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                width={1500}
            >
                <Table dataSource={installmentData} columns={columns} pagination={false} />
            </Modal>
        </>
    );
};

export default StudentDetailsModal;
