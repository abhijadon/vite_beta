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
                    <Select
                        showSearch
                        placeholder='select session' options={[
                            { value: 'JAN 20', label: 'JAN 20' },
                            { value: 'JULY 20', label: 'JULY 20' },
                            { value: 'JAN 21', label: 'JAN 21' },
                            { value: 'JULY 21', label: 'JULY 21' },
                            { value: 'JAN 22', label: 'JAN 22' },
                            { value: 'JULY 22', label: 'JULY 22' },
                            { value: 'JAN 23', label: 'JAN 23' },
                            { value: 'JULY 23', label: 'JULY 23' },
                            { value: 'JAN 24', label: 'JAN 24' },
                            { value: 'JULY 24', label: 'JULY 24' },
                            { value: 'JAN 25', label: 'JAN 25' },
                            { value: 'JULY 25', label: 'JULY 25' },
                            { value: 'MAR 23', label: 'MAR 23' },
                            { value: 'APR 23', label: 'APR 23' },
                            { value: 'OCT 23', label: 'OCT 23' },
                            { value: 'NOV 23', label: 'NOV 23' },
                        ]}>

                    </Select>
                </Form.Item>
                <Form.Item
                    label={translate('admission type')}
                    name={['customfields', 'admission_type']}
                >
                    <Select
                        showSearch
                        placeholder='select admission type'
                        options={[
                            { value: 'FRESH', label: 'FRESH' },
                            { value: 'LATERAL ENTRY', label: 'LATERAL ENTRY' }
                        ]}
                    ></Select>
                </Form.Item>
                <Form.Item
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
                    label={translate('university name')}
                    name={['customfields', 'university_name']}
                >
                    <Select
                        showSearch
                        optionFilterProp='children'
                        options={[
                            { value: 'SGVU', label: 'SGVU' },
                            { value: 'CU', label: 'CU' },
                            { value: 'SPU', label: 'SPU' },
                            { value: 'LPU', label: 'LPU' },
                            { value: 'DPU', label: 'DPU' },
                            { value: 'JAIN', label: 'JAIN' },
                            { value: 'SVSU', label: 'SVSU' },
                            { value: 'VIGNAN', label: 'VIGNAN' },
                            { value: 'MANIPAL', label: 'MANIPAL' },
                            { value: 'SMU', label: 'SMU' },
                            { value: 'HU', label: 'HU' },
                            { value: 'BOSSSE', label: 'BOSSSE' },
                            { value: 'UU', label: 'UU' },
                            { value: 'UPES', label: 'UPES' },
                            { value: 'MANGALAYATAN', label: 'MANGALAYATAN' },
                            { value: 'MANGALAYATAN ONLINE', label: 'MANGALAYATAN ONLINE' },
                        ]}
                    ></Select>
                </Form.Item>

                <Form.Item
                    label={translate('Counselor Email')}
                    name={['customfields', 'counselor_email']}
                >
                    <Select
                        showSearch
                        options={[
                            // DES External email with name
                            { value: 'apoorvasrivastava@sode.co.in', label: 'Apoorva Srivastava' },
                            { value: 'nehaprashar@sode.co.in', label: 'Neha Prasher' },
                            { value: 'priya@sode.co.in', label: 'Priya Anand' },
                            { value: 'diksha@sode.co.in', label: 'Diksha Singh' },
                            { value: 'abhilasha@sode.co.in', label: 'Abhilasha Gupta' },
                            { value: 'saher@sode.co.in', label: 'Saher Khan' },

                            // DES Internal email with name 
                            { value: 'muskan@distanceeducationschool.com', label: 'Muskaan ' },
                            { value: 'aniruddh@distanceeducationschool.com', label: 'Aniruddh Prakash' },
                            { value: 'amritpal@sode.co.in', label: 'Amritpal Singh' },
                            { value: 'salman@sode.co.in', label: 'Salman' },
                            { value: 'tariq@sode.co.in', label: 'Tariq Hasan' },
                            { value: 'shivam@sode.co.in', label: 'Shivam sharma' },
                            { value: 'pushpa@sode.co.in', label: 'Pushpa Pramanik' },

                            // DES Internal email with name 
                            { value: 'anurag@distanceeducationschool.com', label: 'Anurag Yadav' },
                            { value: 'kavitakumari@sode.co.in', label: 'Kavita Kumari' },
                            { value: 'rupal@sode.co.in', label: 'Rupal Gautam' },
                            { value: 'deva@sode.co.in', label: 'Devendra' },
                            { value: 'manshi@sode.co.in', label: 'Manshi Kem' },
                            { value: 'medha@distanceeducationschool.com', label: 'Medha' },

                            // DES - INTERNATIONAL email with name 
                            { value: 'zarin@distanceeducationschool.com', label: 'Zarin Badar' },

                            // HES team email with name 
                            { value: 'kanchan@highereducationschool.com', label: 'Kanchan Sharma' },
                            { value: 'kirti@highereducationschool.com', label: 'Kirti Dubey' },
                            { value: 'ramandeep@highereducationschool.com', label: 'Ramandeep Kaur' },
                            { value: 'kavita@highereducationschool.com', label: 'Kavita Yadav' },
                            { value: 'imra@highereducationschool.com', label: 'Imra Khan' },
                            { value: 'mahak@highereducationschool.com', label: 'Mahek' },
                            { value: 'abhay@highereducationschool.com', label: 'Abhay Dubey' },
                            { value: 'swati@highereducationschool.com', label: 'Swati' },
                            { value: 'gulshan@highereducationschool.com', label: 'Gulshan Nayyar' },
                            { value: 'isha@highereducationschool.com', label: 'Isha Jaiswal' },
                            { value: 'sakshi@highereducationschool.com', label: 'Sakshi Arora' },

                            // Jain team email with name 
                            { value: 'anitha@sode.co.in', label: 'A.Anitha' },
                            { value: 'vani@sode.co.in', label: 'Vani Ruckmani' },

                            // Manipal team email with name 
                            { value: 'swatiramani.manipal@gmail.com', label: 'Swati Ramani' },
                            { value: 'ankitakumar@sode.co.in', label: 'Ankita Kumari' },
                            { value: 'nidhi@sode.co.in', label: 'Nidhi' },
                            { value: 'amreen@sode.co.in', label: 'Amreen ALI Khan' },
                            { value: 'umar@sode.co.in', label: 'MD Umar' },
                            { value: 'nehagupta@sode.co.in', label: 'Neha Gupta' },
                            { value: 'pawankumar@sode.co.in', label: 'Pawan Kumar' },
                            { value: 'bhavya@sode.co.in', label: 'Bhavya' },

                            // ALL DES && HES team email with name 
                            { value: 'rajesh@distanceeducationschool.com', label: 'Rajesh Sir' },
                            { value: 'manisha@distanceeducationschool.com', label: 'Manisha Yadav' },
                            { value: 'admin@distanceeducationschool.com', label: 'Nouman Sir' },
                            { value: 'sandy@distanceeducationschool.com', label: 'Sandy' },
                            { value: 'neha@distanceeducationschool.com', label: 'Neha Raj' },
                            { value: 'yashpriya@distanceeducationschool.com', label: 'Yash Priya' },
                            { value: 'kavitahaldar@distanceeducationschool.com', label: 'Kavita Haldar' },
                            { value: 'ifla@distanceeducationschool.com', label: 'Ifla' },
                            { value: 'shalu@distanceeducationschool.com', label: 'Shalu' },
                            { value: 'zainubia@distanceeducationschool.com', label: 'Zainbuia' },
                            { value: 'pallovi@distanceeducationschool.com', label: 'Pallovi' },
                            { value: 'hansi@distanceeducationschool.com', label: 'Hansi' },
                            { value: 'shristi@distanceeducationschool.com', label: 'Shristi' },
                            { value: 'aashita@highereducationschool.com', label: 'Aashita' },
                            { value: 'pratibha@highereducationschool.com', label: 'Pratibha' },
                            { value: 'shreyashi@highereducationschool.com', label: 'Shreyashi' },
                            { value: 'spuhelpdesk@gmail.com', label: 'Binny' },
                            { value: 'ruchika.spu@gmail.com', label: 'Ruchika' },
                            { value: 'ramiz.spu@gmail.com', label: 'Ramiz' },
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
                        showSearch
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