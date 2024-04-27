import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Upload, message, Radio } from 'antd';
import axios from 'axios';
import useLanguage from '@/locale/useLanguage';
import { InboxOutlined } from '@ant-design/icons';

const uploadDocument = ({ entity, id, recordDetails, onCloseModal }) => {
    const [loading, setLoading] = useState(false);
    const translate = useLanguage();
    const [success, setSuccess] = useState(false); // Track success state

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

            // Append existing documents from recordDetails
            if (recordDetails) {
                if (recordDetails.feeDocument) {
                    recordDetails.feeDocument.forEach((file) => {
                        formData.append('feeDocument', file);
                    });
                }

                if (recordDetails.studentDocument) {
                    recordDetails.studentDocument.forEach((file) => {
                        formData.append('studentDocument', file);
                    });
                }
            }

            // Append newly uploaded documents
            if (values.feeDocuments) {
                values.feeDocuments.forEach((file) => {
                    formData.append('feeDocument', file.originFileObj); // Use originFileObj to append the raw file
                });
            }

            if (values.studentDocuments) {
                values.studentDocuments.forEach((file) => {
                    formData.append('studentDocument', file.originFileObj);
                });
            }

            const response = await axios.put(`/${entity}/uploadDocument/${id}`, formData);

            console.log('responsedata:', response)

            if (response?.data?.success) {
                setSuccess(true);
                if (onCloseModal) {
                    onCloseModal();
                }
                message.success(response.data.message); // Display success message
            }
        } catch (error) {
            console.error('Upload failed:', error);
            message.error('Failed to upload documents. Please try again.');
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
                label="Upload Fee Documents"
                name="feeDocuments"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
            >
                <Upload.Dragger
                    multiple
                    listType="picture"
                    accept="image/*,application/pdf" // Adjust accepted formats as needed
                    beforeUpload={() => false} // Prevent automatic upload
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p>Click or drag files to upload fee documents.</p>
                </Upload.Dragger>
            </Form.Item>

            <Form.Item
                label="Upload Student Documents"
                name="studentDocuments"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
            >
                <Upload.Dragger
                    multiple
                    listType="picture"
                    accept="image/*,application/pdf" // Adjust accepted formats as needed
                    beforeUpload={() => false} // Prevent automatic upload
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p>Click or drag files to upload student documents.</p>
                </Upload.Dragger>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Upload Documents
                </Button>
            </Form.Item>
        </Form>
    );
};

export default uploadDocument;
