import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import useLanguage from '@/locale/useLanguage';

const UpdatePaymentForm = ({ entity, id, recordDetails, onCloseModal }) => {
    const [loading, setLoading] = useState(false);
    const translate = useLanguage();
    const [role, setRole] = useState('');

    useEffect(() => {
        // Retrieve the role from localStorage and parse it as JSON
        const storedRole = window.localStorage.getItem('auth');
        const parsedRole = storedRole ? JSON.parse(storedRole).current.role : '';
        setRole(parsedRole);
    }, []);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axios.put(`/${entity}/updatePayment/${id}`, values);
            // Check if the update operation was successful
            if (response && response.data && response.data.success) {
                // If successful, call the onCloseModal callback to close the modal
                onCloseModal();
            }
        } catch (error) {
            console.error('Update failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const isLoggedIn = window.localStorage.getItem('isLoggedIn');

    // Define function to get status options based on role
    const getStatusOptions = (role) => {
        switch (role) {
            case 'admin':
                return [
                    { value: 'Payment Approved', label: translate('Payment Approved') },
                    { value: 'Payment Received', label: translate('Payment Received') },
                    { value: 'Payment Rejected', label: translate('Payment Rejected') },
                ];

            case 'subadmin':
                return [
                    { value: 'Payment Approved', label: translate('Payment Approved') },
                    { value: 'Payment Received', label: translate('Payment Received') },
                    { value: 'Payment Rejected', label: translate('Payment Rejected') },
                ];

            case 'manager':
                return [
                    { value: 'Payment Approved', label: translate('Payment Approved') },
                    { value: 'Payment Received', label: translate('Payment Received') },
                    { value: 'Payment Rejected', label: translate('Payment Rejected') },
                ];


            case 'supportiveassociate':
                return [
                    { value: 'Payment Received', label: translate('Payment Received') },
                ];


            case 'teamleader':
                return [
                    { value: 'Payment Received', label: translate('Payment Received') },
                ];

            case 'user':
                return [
                    { value: 'Payment Received', label: translate('Payment Received') },
                ];

            default:
                return [];
        }
    };

    // Get status options based on the role
    const statusOptions = getStatusOptions(role);

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={recordDetails || null}
        >
            <Form.Item
                name="full_name"
                label="Fullname"
                rules={[{ required: true, message: 'Please enter fullname' }]}
            >
                <Input disabled />
            </Form.Item>

            <Form.Item
                label={translate('email')}
                name={['contact', 'email']}
            >
                <Input type='email' autoComplete='on' disabled />
            </Form.Item>

            <Form.Item
                label={translate('phone')}
                name={['contact', 'phone']}
            >
                <Input type='tel' autoComplete='on' disabled />
            </Form.Item>
            <Form.Item
                label={translate('Installment Type')}
                name={['customfields', 'installment_type']}
            >
                <Select
                    showSearch
                    options={[
                        { value: '1st Installment', label: '1st Installment' },
                        { value: '2nd Installment', label: '2nd Installment' },
                        { value: '3rd Installment', label: '3rd Installment' },
                        { value: '4th Installment', label: '4th Installment' },
                        { value: '5th Installment', label: '5th Installment' },
                        { value: '6th Installment', label: '6th Installment' },
                        { value: '7th Installment', label: '7th Installment' },
                        { value: '8th Installment', label: '8th Installment' },
                        { value: '9th Installment', label: '9th Installment' },
                        { value: '10th Installment', label: '10th Installment' },
                    ]}
                ></Select>
            </Form.Item>


            <Form.Item
                label={translate('Payment Mode')}
                name={['customfields', 'payment_mode']}
            >
                <Select
                    showSearch
                    options={[
                        { value: 'DES Bank Account/UPI', label: 'DES Bank Account/UPI' },
                        { value: 'HES Bank Account/UPI', label: 'HES Bank Account/UPI' },
                        { value: 'University Bank Account', label: 'University Bank Account' },
                        { value: 'Payment Gateway', label: 'Payment Gateway' },
                        { value: 'Cash/DD', label: 'Cash/DD' }

                    ]}
                ></Select>
            </Form.Item>
            <Form.Item
                label={translate('payment type')}
                name={['customfields', 'payment_type']}
            >
                <Select
                    showSearch
                    options={[
                        { value: 'Semester', label: translate('semester') },
                        { value: 'Yearly', label: translate('Yearly') },
                        { value: 'Fullfees', label: translate('Fullfees') },
                    ]}
                ></Select>
            </Form.Item>

            <Form.Item
                label={translate('Total Course Fee')}
                name={['customfields', 'total_course_fee']}
                rules={[{ required: true, message: 'Enter Course Fee' }]}
            >
                <Input disabled />
            </Form.Item>
            <Form.Item
                rules={[{ required: true, message: 'Enter Total Paid Amount' }]}
                label={translate('Total Paid Amount')}
                name={['customfields', 'total_paid_amount']}
            >
                <Input disabled />
            </Form.Item>
            <Form.Item
                rules={[{ required: true, message: 'Enter paid amount' }]}
                label={translate('Paid Amount')}
                name={['customfields', 'paid_amount']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('paymentStatus')}
                name={['customfields', 'paymentStatus']}
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                {/* Render Select component based on isLoggedIn and role */}
                {isLoggedIn && role ? (
                    <Select
                        showSearch
                        optionFilterProp='children'
                        options={statusOptions}
                    ></Select>
                ) : null}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Update Payment
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdatePaymentForm;
