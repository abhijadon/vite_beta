import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import useLanguage from '@/locale/useLanguage';

const UpdatePaymentForm = ({ entity, id, recordDetails, onCloseModal }) => {
    const [loading, setLoading] = useState(false);
    const translate = useLanguage();
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
                        { value: '1st Installment/ New Admission', label: '1st Installment/ New Admission' },
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
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Update Payment
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdatePaymentForm;
