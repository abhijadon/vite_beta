import { Form, Input, Upload, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';
const { Dragger } = Upload;
const { TextArea } = Input;
export default function LeadForm() {
    const translate = useLanguage();

    return (
        <>
            <div className='grid grid-cols-4 gap-3'>
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
                    <Select placeholder='select session' options={[
                        { value: 'jan 20-jan 20', label: 'Jan 20-Jan 20' },
                        { value: 'july 20-july 20', label: 'July 20-July 20' },
                        { value: 'jan 21-jan 21', label: 'Jan 21-Jan 21' },
                        { value: 'july 21-july 21', label: 'July 21-July 21' },
                        { value: 'jan 22-jan 22', label: 'Jan 22-Jan 22' },
                        { value: 'july 22-july 22', label: 'July 22-July 22' },
                        { value: 'jan 23-jan 23', label: 'Jan 23-Jan 23' },
                        { value: 'july 23-july 23', label: 'July 23-July 23' },
                        { value: 'jan 24-jan 24', label: 'Jan 24-Jan 24' },
                        { value: 'july 24-july 24', label: 'July 24-July 24' },
                        { value: 'jan 25-jan 25', label: 'Jan 25-Jan 25' },
                        { value: 'july 25-july 25', label: 'July 25-July 25' }
                    ]}>

                    </Select>
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
                    <Select options={[
                        { value: 'zarin@highereducationschool.com', label: 'Zarin' },
                        { value: 'kanchan@highereducationschool.com', label: 'Kanchan' },
                        { value: 'kirti@highereducationschool.com', label: 'Kirti   ' },
                        { value: 'ramandeep@highereducationschool.com', label: 'Raman  ' },
                        { value: 'kavita@highereducationschool.com', label: 'kavita' },
                        { value: 'imra@highereducationschool.com', label: 'Imra' },
                        { value: 'Mahak@highereducationschool.com', label: 'Mahek' },
                        { value: 'abhay@highereducationschool.com', label: 'abhay' },
                        { value: 'swati@highereducationschool.com', label: 'swati' },
                        { value: 'gulshan@highereducationschool.com', label: 'Gulshan' },
                        { value: 'isha@highereducationschool.com', label: 'Isha' },
                        { value: 'Sakshi@highereducationschool.com', label: 'Sakshi' },
                        { value: 'aashita@highereducationschool.com', label: 'aashita' },
                        { value: 'pratibha@highereducationschool.com', label: 'pratibha' },
                        { value: 'shreyashi@highereducationschool.com', label: 'Shreyashi ' }
                    ]}>

                    </Select>
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
                    <Input type='date' className='uppercase' />
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
            </div>
            <div className='grid grid-cols-3 gap-3'>
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
                        beforeUpload={() => false}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag files to this area to upload</p>
                        <p className="ant-upload-hint">Support for multiple images</p>
                    </Dragger>
                </Form.Item>

                <Form.Item
                    label={translate('Remark')}
                    name={['customfields', 'remark']}
                >
                    <TextArea rows={7} />
                </Form.Item>
            </div>
        </>
    );
}