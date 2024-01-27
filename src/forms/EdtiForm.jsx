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
                        { value: 'jan 20', label: 'Jan 20' },
                        { value: 'july 20', label: 'July 20' },
                        { value: 'jan 21', label: 'Jan 21' },
                        { value: 'july 21', label: 'July 21' },
                        { value: 'jan 22', label: 'Jan 22' },
                        { value: 'july 22', label: 'July 22' },
                        { value: 'jan 23', label: 'Jan 23' },
                        { value: 'july 23', label: 'July 23' },
                        { value: 'jan 24', label: 'Jan 24' },
                        { value: 'july 24', label: 'July 24' },
                        { value: 'jan 25', label: 'Jan 25' },
                        { value: 'july 25', label: 'July 25' }
                    ]}>

                    </Select>
                </Form.Item>
                <Form.Item
                    label={translate('admission type')}
                    name={['customfields', 'admission_type']}
                >
                    <Select placeholder='select admission type'
                        options={[
                            { value: 'Fresh', label: translate('Fresh') },
                            { value: 'LATERAL ENTRY', label: 'LATERAL ENTRY' }
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
                        { value: 'shreyashi@highereducationschool.com', label: 'Shreyashi ' },
                        { value: 'apoorvasrivastava@distanceeducationschool.com', label: 'Apoorva_DES' },
                        { value: 'asma@distanceeducationschool.com', label: 'Asma_DES' },
                        { value: 'nehaprashar@distanceeducationschool.com', label: 'Neha_Prasher_DES' },
                        { value: 'priya@distanceeducationschool.com', label: 'Priya_DES' },
                        { value: 'diksha@distanceeducationschool.com', label: 'Diksha_DES' },
                        { value: 'abhilasha@distanceeducationschool.com', label: 'Abhilasha_Gupta_DES' },
                        { value: 'saher@distanceeducationschool.com', label: 'Saher_Khan_DES' },
                        { value: 'fiza@distanceeducationschool.com', label: 'Fiza_DES' },
                        { value: 'muskan@distanceeducationschool.com', label: 'Muskaan_DES' },
                        { value: 'aniruddh@distanceeducationschool.com', label: 'Aniruddh_DES' },
                        { value: 'deva@distanceeducationschool.com', label: 'Devendra_DES' },
                        { value: 'amritpal@distanceeducationschool.com', label: 'Amritpal_DES' },
                        { value: 'Salman@distanceeducationschool.com:', label: 'Salman_DES' },
                        { value: 'tariq@distanceeducationschool.com', label: 'Traiq_DES' },
                        { value: 'shivam@distanceeducationschool.com', label: 'Shivam_sharma_DES' },
                        { value: 'pushpa@distanceeducationschool.com', label: 'Puspa_DES' },
                        { value: 'zarin@distanceeducationschool.com', label: 'Zarin_DES' },
                        { value: 'kanchan@distanceeducationschool.com', label: 'Kanchan_DES' },
                        { value: 'manu@distanceeducationschool.com', label: 'Manu_DES' },

                        // Jain Team Emails
                        { value: 'a.anitha.ju@gmail.com', label: 'Anita_JU' },
                        { value: 'vaniruckmani.ju@gmail.com', label: 'Vani_Ruckmani_JU' },
                        { value: 'priyankapalle.ju@gmail.com', label: 'Priyanka_JU' },
                        { value: 'SwatiRamani.manipal@gmail.com', label: 'Swati_JU' },

                        // Manipal Team Email
                        { value: 'ankitakumari.manipal@gmail.com', label: 'Ankita_MU' },
                        { value: 'medhahandoo.manipal@gmail.com', label: 'Medha_MU' },
                        { value: 'amreen.manipal@gmail.com', label: 'Amreen_MU' },

                        // Support Team Email
                        { value: 'rajesh@distanceeducationschool.com', label: 'Rajesh_sir' },
                        { value: 'manisha@distanceeducationschool.com', label: 'Manisha' },
                        { value: 'admin@distanceeducationschool.com', label: 'Nouman_sir' },
                        { value: 'sandy@distanceeducationschool.com', label: 'Sandy' },
                        { value: 'neha@distanceeducationschool.com', label: 'Neha' },
                        { value: 'yashpriya@distanceeducationschool.com', label: 'Yash_Priya' },
                        { value: 'kavitahaldar@distanceeducationschool.com', label: 'kavitahaldar' },
                        { value: 'ifla@distanceeducationschool.com', label: 'Ifla' },
                        { value: 'shalu@distanceeducationschool.com', label: 'Shalu' },
                        { value: 'zainubia@distanceeducationschool.com', label: 'zainbuia' },
                        { value: 'pallovi@distanceeducationschool.com', label: 'Pallovi' },
                        { value: 'kavitakumari@distanceeducationschool.com', label: 'Kavita_Kumari' },
                        { value: 'manshi@distanceeducationschool.com', label: 'Mansi' },
                        { value: 'Bhavya.manipal@gmail.com', label: 'Bhavya' },
                        { value: 'anurag@distanceeducationschool.com', label: 'Anuraj' },
                        { value: 'rupal@distanceeducationschool.com', label: 'Rupal' },
                        //B2B Team Email
                        { value: 'spuhelpdesk@gmail.com', label: 'Binny' },
                        { value: 'ruchika.spu@gmail.com', label: 'Ruchika' },
                        { value: 'lalit@distanceeducationschool.com', label: 'Lalit_DES' },
                        { value: 'lalit.spu@gmail.com', label: 'Lalit' },
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
                            { value: 'Payment Gateway', label: 'Payment Gateway' },
                            { value: 'Cash/DD', label: 'Cash/DD' },

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
            </div>
        </>
    );
}