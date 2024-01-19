import { Form, Input, Upload, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
const { Dragger } = Upload;
const { TextArea } = Input;
export default function LeadForm() {
    const translate = useLanguage();

    return (
        <>
            <Form.Item
                label={translate('send fee reciept')}
                name={['customfields', 'send_fee_receipt']}
            >
                <Input disabled />
            </Form.Item>
            <Form.Item
                label={translate('studentid')}
                name={['lead_id']}
            >
                <Input disabled />
            </Form.Item>
            <Form.Item
                label={translate('student name')}
                name={['full_name']}
            >
                <Input type='text' autoComplete='on' />
            </Form.Item>

            <Form.Item
                label={translate('email')}
                name={['contact', 'email']}
            >
                <Input type='email' autoComplete='
                on'/>
            </Form.Item>

            <Form.Item
                label={translate('phone')}
                name={['contact', 'phone']}
            >
                <Input type='tel' autoComplete='on' />
            </Form.Item>

            <Form.Item
                label={translate('course')}
                name={['education', 'course']}
            >
                <Input type="text" />
            </Form.Item>

            <Form.Item
                label={translate('Specialization')}
                name={['customfields', 'enter_specialization']}
            >
                <Input type='text' autoComplete='on' />
            </Form.Item>
            <Form.Item
                label={translate('session')}
                name={['customfields', 'session']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('session type')}
                name={['customfields', 'admission_type']}
            >
                <Select placeholder='select session type'
                    options={[
                        { value: 'Jan', label: translate('Jan') },
                        { value: 'July', label: translate('July') },
                        { value: 'N/A', label: translate('N/A') },
                    ]}
                ></Select>
            </Form.Item>
            <Form.Item
                label={translate('Institute name')}
                name={['customfields', 'institute_name']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={translate('university name')}
                name={['customfields', 'university_name']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={translate('Counselor Email')}
                name={['customfields', 'counselor_email']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('father name')}
                name={['customfields', 'father_name']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('mother name')}
                name={['customfields', 'mother_name']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('date of birth')}
                name={['customfields', 'dob']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={translate('gender')}
                name={['customfields', 'gender']}
            >
                <Select
                    options={[
                        { value: 'Male', label: translate('Male') },
                        { value: 'Female', label: translate('Female') },
                        { value: 'Other', label: translate('Other') },
                    ]}
                ></Select>
            </Form.Item>

            <Form.Item
                label={translate('Installment Type')}
                name={['customfields', 'installment_type']}
            >
                <Select
                    options={[
                        { value: '1st installmenttype/New Admission', label: translate('1st installmenttype/New Admission') },
                        { value: '2nd installment', label: translate('2nd installment') },
                        { value: '3rd installmen', label: translate('3rd installment') },
                        { value: '4th installmen', label: translate('4th installment') },
                        { value: '5th installmen', label: translate('5th installment') },
                        { value: '6th installmen', label: translate('6th installment') },
                        { value: '6th installmen', label: translate('8th installment') },
                        { value: '9th installmen', label: translate('9th installment') },
                        { value: '10th installmen', label: translate('10th installment') },
                    ]}
                ></Select>
            </Form.Item>
            <Form.Item
                label={translate('Payment Mode')}
                name={['customfields', 'payment_mode']}
            >
                <Select
                    options={[
                        { value: 'DES Bank Account/UPI', label: translate('DES Bank Account/UPI') },
                        { value: 'University Bank Account', label: translate('University Bank Account') },
                        { value: 'PayUMoney', label: 'PayUMoney' },
                        { value: 'Cash/DD', label: 'Cash/DD' },

                    ]}
                ></Select>
            </Form.Item>

            <Form.Item
                label={translate('Total Course Fee')}
                name={['customfields', 'total_course_fee']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('Total Paid Amount')}
                name={['customfields', 'total_paid_amount']}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={translate('Paid Amount')}
                name={['customfields', 'paid_amount']}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label={translate("upload student document")}
                name={['customfields', 'upload_student_document']}
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
            >
                <Dragger
                    multiple
                    beforeUpload={() => false} // Prevent automatic upload on file selection
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag files to this area to upload</p>
                    <p className="ant-upload-hint">Support for multiple images</p>
                </Dragger>
            </Form.Item>
            <Form.Item
                label={translate("student fee receipt")}
                name={['customfields', 'upload_fee_receipt_screenshot']}
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}

            >
                <Dragger
                    multiple
                    beforeUpload={() => false} // Prevent automatic upload on file selection
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag files to this area to upload</p>
                    <p className="ant-upload-hint">Support for multiple images</p>
                </Dragger>
            </Form.Item>
            <Form.Item
                label={translate('status')}
                name={['customfields', 'status']}
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                <Select
                    options={[
                        { value: 'New', label: translate('New') },
                        { value: 'Enrolled', label: translate('Enrolled') },
                        { value: 'Cancel', label: translate('cancel') },
                        { value: 'Alumini', label: translate('Alumini') },
                    ]}
                ></Select>
            </Form.Item>
            <Form.Item
                label={translate('Remark')}
                name={['customfields', 'remark']}
            >
                <TextArea rows={4} />
            </Form.Item>
        </>
    );
}