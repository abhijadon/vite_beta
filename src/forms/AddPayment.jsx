import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';
import axios from 'axios';
import useLanguage from '@/locale/useLanguage';
import { InboxOutlined } from '@ant-design/icons';

const UpdatePaymentForm = ({ entity, id, recordDetails, onCloseModal }) => {
    const [loading, setLoading] = useState(false);
    const translate = useLanguage();
    const [role, setRole] = useState('');
    const [success, setSuccess] = useState(false); // Track success state

    useEffect(() => {
        // Retrieve the role from localStorage and parse it as JSON
        const storedRole = window.localStorage.getItem('auth');
        const parsedRole = storedRole ? JSON.parse(storedRole).current.role : '';
        setRole(parsedRole);
    }, []);

    useEffect(() => {
        // Automatically refresh the page after 2 seconds when success state changes to true
        if (success) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, 2000); // 2000 milliseconds = 2 seconds
            // Clear the timer when the component unmounts or success state changes
            return () => clearTimeout(timer);
        }
    }, [success]);
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('full_name', values.full_name);
            formData.append('contact[email]', values.contact.email);
            formData.append('contact[phone]', values.contact.phone);
            formData.append('education[course]', values.education.course);
            formData.append('customfields[institute_name]', values.customfields.institute_name);
            formData.append('customfields[university_name]', values.customfields.university_name);
            formData.append('customfields[session]', values.customfields.session);
            formData.append('customfields[father_name]', values.customfields.father_name);
            formData.append('customfields[dob]', values.customfields.dob);
            formData.append('customfields[installment_type]', values.customfields.installment_type);
            formData.append('customfields[payment_mode]', values.customfields.payment_mode);
            formData.append('customfields[payment_type]', values.customfields.payment_type);
            formData.append('customfields[total_course_fee]', values.customfields.total_course_fee);
            formData.append('customfields[total_paid_amount]', values.customfields.total_paid_amount);
            formData.append('customfields[paid_amount]', values.customfields.paid_amount);
            formData.append('customfields[paymentStatus]', values.customfields.paymentStatus);

            // Append existing images
            if (recordDetails && recordDetails.feeDocument) {
                recordDetails.feeDocument.forEach((image) => {
                    formData.append('feeDocument', image);
                });
            }
            // Append newly uploaded images
            if (values.feeDocument && Array.isArray(values.feeDocument)) {
                values.feeDocument.forEach((file) => {
                    formData.append('feeDocument', file.originFileObj);
                });
            }

            const response = await axios.put(`/${entity}/updatePayment/${id}`, formData);
            if (response && response.data && response.data.success) {
                // Set success state to true upon successful update
                setSuccess(true);
                onCloseModal(); // Close modal if needed
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
                hidden
                label={translate('University name')}
                name={['customfields', 'university_name']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                hidden
                label={translate('session')}
                name={['customfields', 'session']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                hidden
                label={translate('Institute name')}
                name={['customfields', 'institute_name']}
            >
                <Select
                    showSearch
                    optionFilterProp='children'
                    options={[
                        { value: 'HES', label: 'HES' },
                        { value: 'DES', label: 'DES' },
                    ]}
                ></Select>
            </Form.Item>
            <Form.Item
                hidden
                label={translate('Course name')}
                name={['education', 'course']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                hidden
                label={translate('father name')}
                name={['customfields', 'father_name']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                hidden
                label={translate('Date of birth')}
                name={['customfields', 'dob']}
            >
                <Input />
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
            <Form.Item
                label="Fee Documents"
                name="feeDocument"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
                rules={[
                    {
                        required: true,
                        message: 'Please upload fee documents!',
                    },
                ]}
            >
                <Upload.Dragger
                    multiple={true} // Allow multiple file upload
                    listType="picture"
                    accept="image/png, image/jpeg, image/svg+xml"
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag files to this area to upload</p>
                    <p className="ant-upload-hint">Support for multiple images</p>
                </Upload.Dragger>
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
