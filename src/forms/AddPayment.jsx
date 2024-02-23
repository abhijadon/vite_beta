import { DatePicker, Form, Input, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';

const { TextArea } = Input;
export default function EditForm() {
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
                    <Input type='text' autoComplete='on' disabled />
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
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label={translate('Total Paid Amount')}
                    name={['customfields', 'total_paid_amount']}
                >
                    <Input disabled />
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
                        showSearch
                        optionFilterProp='children'
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
                    <TextArea rows={1} />
                </Form.Item>
                <Form.Item
                    label={translate('Create_at')}
                    name='created'
                >
                    <DatePicker className='uppercase' />
                </Form.Item>
            </div>
        </>
    );
}