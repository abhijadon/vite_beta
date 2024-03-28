import React from 'react';
import { Drawer, Card } from 'antd';
import moment from 'moment';

const StudentDetailsModal = ({ visible, onClose, student }) => {
    const renderPreviousInstallmentType = () => {
        if (!student || !student.previousstatus || !student.previousInstallmentType) return '';

        const previousStatus = student.previousstatus.reverse(); // Reverse the array to display the most recent status first
        const previousInstallmentType = student.previousInstallmentType.reverse(); // Reverse the array to display the most recent installment type first

        const getSuffix = (num) => {
            if (num === 1) return 'st';
            if (num === 2) return 'nd';
            if (num === 3) return 'rd';
            return 'th';
        };

        const getStatusChange = (date) => {
            const status = previousStatus.find(item => item.date === date);
            return status ? status.value : '';
        };

        const installmentsAndStatus = previousInstallmentType.map((installment, index) => {
            const statusChange = getStatusChange(installment.date);
            const numericPart = installment.value.match(/\d+/)[0]; // Extract numeric part from the installment value
            const suffix = getSuffix(parseInt(numericPart)); // Get suffix based on the numeric part
            return { numericPart: `${numericPart}${suffix}`, statusChange }; // Append suffix to numeric part
        });

        return installmentsAndStatus.map(({ numericPart, statusChange }) => `${numericPart} (${statusChange})`).join(' / ');
    };

    const renderPreviousPaidamount = () => {
        if (!student || !student.previousPaidAmounts || student.previousPaidAmounts.length === 0) return '';

        let previousPaidAmounts = student.previousPaidAmounts.map(installment => `${installment.value} (${moment(installment.date).format('DD/MM/YYYY')})`);
        let currentPaidAmount = `${student.customfields.paid_amount} (${moment().format('DD/MM/YYYY')})`;

        return `${previousPaidAmounts.join('/')} / ${currentPaidAmount}`;
    };


    return (
        <Drawer
            placement='right'
            title="Student Details"
            visible={visible}
            onClose={onClose}
            footer={null}
            width={700}
        >
            <Card>
                {student && (
                    <>
                        <ul>
                            <li><strong>Student ID:</strong> {student.lead_id}</li>
                            <li><strong>Full Name:</strong> {student.full_name}</li>
                            <li><strong>Email:</strong> {student.contact.email}</li>
                            <li><strong>Phone:</strong> {student.contact.phone}</li>
                            <li><strong>Course:</strong> {student.education.course}</li>
                            <li><strong>Sliecialization:</strong> {student.customfields.enter_sliecialization}</li>
                            <li><strong>Session:</strong> {student.customfields.session}</li>
                            <li><strong>Admission Tylie:</strong> {student.customfields.admission_tylie}</li>
                            <li><strong>Institute Name:</strong> {student.customfields.institute_name}</li>
                            <li><strong>University Name:</strong> {student.customfields.university_name}</li>
                            <li><strong>User:</strong> {student.userId.fullname}</li>
                            <li><strong>Father Name:</strong> {student.customfields.father_name}</li>
                            <li><strong>Mother Name:</strong> {student.customfields.mother_name}</li>
                            <li><strong>Date of Birth:</strong> {moment(student.customfields.dob).format('DD/MM/YYYY')}</li>
                            <li><strong>Gender:</strong> {student.customfields.gender}</li>
                            <li><strong>Previous Installment Type:</strong> {renderPreviousInstallmentType()}</li>
                            <li><strong>Payment Mode:</strong> {student.customfields.payment_mode}</li>
                            <li><strong>Payment Type:</strong> {student.customfields.payment_type}</li>
                            <li><strong>Total Course Fee:</strong> {student.customfields.total_course_fee}</li>
                            <li><strong>Total Paid Amount:</strong> {student.customfields.total_paid_amount}</li>
                            <li><strong>Paid Amount:</strong> {student.customfields.paid_amount}</li>
                            <li><strong>Due Amount:</strong> {student.customfields.paid_amount}</li>
                            <li><strong>Previous Paid Amount:</strong> {renderPreviousPaidamount()}</li>
                            <li><strong>Remark:</strong> {student.customfields.remark}</li>
                            <li><strong>Created:</strong> {moment(student.created).format('DD/MM/YYYY')}</li>
                            {/* Include more fields as needed */}
                        </ul>
                    </>
                )}
            </Card>
        </Drawer>
    );
};

export default StudentDetailsModal;
