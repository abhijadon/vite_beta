// import { DownloadOutlined, LeftOutlined, RightOutlined, PrinterOutlined } from '@ant-design/icons';
import { Tag, Space } from 'antd';
import dayjs from 'dayjs'; // Import dayjs if not already imported
import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';
import useLanguage from '@/locale/useLanguage';
import EditForm from '../../forms/EdtiForm';
export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';
  const searchConfig = {
    displayLabels: ['full_name', 'company', 'contact.email'],
    searchFields: ['full_name', 'company', 'contact.email'],
    outputValue: '_id',
  };
  const counselorEmailToName = {
    // HES Team email 
    'zarin@highereducationschool.com': 'Zarin_HES',
    'kanchan@highereducationschool.com': 'Kanchan_HES',
    'kirti@highereducationschool.com': 'Kirti_HES',
    'ramandeep@highereducationschool.com': 'Raman_HES',
    'kavita@highereducationschool.com': 'Kavita_HES',
    'imra@highereducationschool.com': 'Imra_HES',
    'mahak@highereducationschool.com': 'Mahek-HES',
    'abhay@highereducationschool.com': 'Abhay_HES',
    'swati@highereducationschool.com': 'Swati_HES',
    'gulshan@highereducationschool.com': 'Gulshan_HES',
    'isha@highereducationschool.com': 'Isha_HES',
    'sakshi@highereducationschool.com': 'Sakshi_HES',
    'aashita@highereducationschool.com': 'Ashita_HES',
    'pratibha@highereducationschool.com': 'Pratibha_HES',
    'shreyashi@highereducationschool.com': 'Shreyashi_HES',

    // DES Team Email 
    'apoorvasrivastava@distanceeducationschool.com': 'Apoorva_DES',
    'asma@distanceeducationschool.com': 'Asma_DES',
    'nehaprashar@distanceeducationschool.com': 'Neha_Prasher_DES',
    'priya@distanceeducationschool.com': 'Priya_DES',
    'diksha@distanceeducationschool.com': 'Diksha_DES',
    'abhilasha@distanceeducationschool.com': 'Abhilasha_Gupta_DES',
    'saher@distanceeducationschool.com': 'Saher_Khan_DES',
    'fiza@distanceeducationschool.com': 'Fiza_DES',
    'muskan@distanceeducationschool.com': 'Muskaan_DES',
    'aniruddh@distanceeducationschool.com': 'Aniruddh_DES',
    'deva@distanceeducationschool.com': 'Devendra_DES',
    'amritpal@distanceeducationschool.com': 'Amritpal_DES',
    'Salman@distanceeducationschool.com:': 'Salman_DES',
    'tariq@distanceeducationschool.com': 'Traiq_DES',
    'shivam@distanceeducationschool.com': 'Shivam_sharma_DES',
    'pushpa@distanceeducationschool.com': 'Puspa_DES',
    'zarin@distanceeducationschool.com': 'Zarin_DES',
    'kanchan@distanceeducationschool.com': 'Kanchan_DES',
    'manu@distanceeducationschool.com': 'Manu_DES',

    // Jain Team Emails
    'a.anitha.ju@gmail.com': 'Anita_JU',
    'vaniruckmani.ju@gmail.com': 'Vani_Ruckmani_JU',
    'priyankapalle.ju@gmail.com': 'Priyanka_JU',
    'SwatiRamani.manipal@gmail.com': 'Swati_JU',

    // Manipal Team Email
    'ankitakumari.manipal@gmail.com': 'Ankita_MU',
    'medhahandoo.manipal@gmail.com': 'Medha_MU',
    'amreen.manipal@gmail.com': 'Amreen_MU',

    // Support Team Email
    'rajesh@distanceeducationschool.com': 'Rajesh_sir',
    'manisha@distanceeducationschool.com': 'Manisha',
    'admin@distanceeducationschool.com': 'Nouman_sir',
    'sandy@distanceeducationschool.com': 'Sandy',
    'neha@distanceeducationschool.com': 'Neha',
    'yashpriya@distanceeducationschool.com': 'Yash_Priya',
    'kavitahaldar@distanceeducationschool.com': 'kavitahaldar',
    'ifla@distanceeducationschool.com': 'Ifla',
    'shalu@distanceeducationschool.com': 'Shalu',
    'zainubia@distanceeducationschool.com': 'zainbuia',
    'pallovi@distanceeducationschool.com': 'Pallovi',
    'kavitakumari@distanceeducationschool.com': 'Kavita_Kumari',
    'manshi@distanceeducationschool.com': 'Mansi',
    'Bhavya.manipal@gmail.com': 'Bhavya',
    'anurag@distanceeducationschool.com': 'Anuraj',
    'rupal@distanceeducationschool.com': 'Rupal',
    //B2B Team Email
    'spuhelpdesk@gmail.com': 'BINNY',
    'ruchika.spu@gmail.com': 'Ruchika',
    'lalit@distanceeducationschool.com': 'Lalit_DES',
    'lalit.spu@gmail.com': 'Lalit',
    'ramiz.spu@gmail.com': 'Ramiz'
  };
  const toTitleCase = (str) => {
    if (!str) return ''; // Check for undefined or null
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  };
  const entityDisplayLabels = ['number', 'company'];

  const readColumns = [
    {
      title: translate('StudentID'),
      dataIndex: 'lead_id',
    },
    {
      title: translate('Student Name'),
      dataIndex: 'full_name',
    },
    {
      title: translate('Email'),
      dataIndex: 'contact.email',
    },
    {
      title: translate('Phone'),
      dataIndex: 'contact.phone',
    },
    {
      title: translate('course'),
      dataIndex: 'education.course',
    },
    {
      title: translate('Specialization'),
      dataIndex: 'customfields.enter_specialization',
    },
    {
      title: translate('Session'),
      dataIndex: 'customfields.session',
    },
    {
      title: translate('Session type'),
      dataIndex: 'customfields.admission_type',
    },
    {
      title: translate('Institute Name'),
      dataIndex: 'customfields.institute_name',
    },

    {
      title: translate('University name'),
      dataIndex: 'customfields.university_name',
    },

    {
      title: translate('counselor email'),
      dataIndex: 'customfields.counselor_email',
    },

    {
      title: translate('Father Name'),
      dataIndex: 'customfields.father_name',
    },
    {
      title: translate('Mother name'),
      dataIndex: 'customfields.mother_name',
    },

    {
      title: translate('Date of birth'),
      dataIndex: 'customfields.dob',
    },
    {
      title: translate('gender'),
      dataIndex: 'customfields.gender',
    },
    {
      title: translate('Installment type'),
      dataIndex: 'customfields.installment_type',
    },
    {
      title: translate('Payment mode'),
      dataIndex: 'customfields.payment_mode',
    },

    {
      title: translate('Total Course Fee'),
      dataIndex: 'customfields.total_course_fee',
    },
    {
      title: translate('Total Paid amount'),
      dataIndex: 'customfields.total_paid_amount',
    },
    {
      title: translate('paid amount'),
      dataIndex: 'customfields.paid_amount',
    },

    {
      title: translate('Send Fee Receipt'),
      dataIndex: 'customfields.send_fee_receipt',
    },
    {
      title: translate('status'),
      dataIndex: 'customfields.status',
    },
  ];

  const dataTableColumns = [

    {
      title: 'S.No.',
      dataIndex: '',
      render: (text, record, index) => index + 1,
    },
    {
      title: translate('StudentID'),
      dataIndex: ['lead_id'],
    },
    {
      title: translate('Student Name'),
      dataIndex: ['full_name'],
      render: (text) => toTitleCase(text),
    },
    {
      title: 'Email',
      dataIndex: ['contact', 'email'],
      key: 'email',
      render: (email) => toTitleCase(email),
    },
    {
      title: 'Phone',
      dataIndex: ['contact', 'phone'],
      key: 'phone',
    },
    {
      title: translate('Course'),
      dataIndex: ['education', 'course'],
      key: 'course'
    },
    {
      title: translate('Specialization'),
      dataIndex: ['customfields', 'enter_specialization'],
      key: 'enter_specialization'
    },
    {
      title: translate('Session'),
      dataIndex: ['customfields', 'session'],
      key: 'session'
    },
    {
      title: translate('Admission type'),
      dataIndex: ['customfields', 'admission_type'],
      key: 'admission_type'
    },
    {
      title: translate('Institute Name'),
      dataIndex: ['customfields', 'institute_name'],
      key: 'institute_name'
    },

    {
      title: 'University Name', // Assuming 'university_name' is within customfields
      dataIndex: ['customfields', 'university_name'],
      key: 'university_name',
    },
    {
      title: translate('Counselor Name'),
      dataIndex: ['customfields', 'counselor_email'],
      key: 'counselor_email',
      render: (email) => toTitleCase(counselorEmailToName[email] || email),
    },

    {
      title: translate('Father Name'),
      dataIndex: ['customfields', 'father_name'],
      key: 'father_name'
    },
    {
      title: translate('Mother Name'),
      dataIndex: ['customfields', 'mother_name'],
      key: 'mother_name'
    },
    {
      title: translate('Date of birth'),
      dataIndex: ['customfields', 'dob'],
      key: 'dob',
    },
    {
      title: translate('gender'),
      dataIndex: ['customfields', 'gender'],
      key: 'gender'
    },

    {
      title: translate('Installment type'),
      dataIndex: ['customfields', 'installment_type'],
      key: 'installmentType'
    },

    {
      title: translate('Payment mode'),
      dataIndex: ['customfields', 'payment_mode'],
      key: 'payment_mode'
    },
    {
      title: translate('Total Course Fee'),
      dataIndex: ['customfields', 'total_course_fee'],
      key: 'total_course_fee'
    },
    {
      title: translate('Total Paid amount'),
      dataIndex: ['customfields', 'total_paid_amount'],
      key: 'total_paid_amount'
    },
    {
      title: translate('paid amount'),
      dataIndex: ['customfields', 'paid_amount'],
      key: 'paid_amount'
    },
    {
      title: translate('Due amount'),
      key: 'due_amount',
      render: (text, record) => {
        const totalCourseFee = record.customfields.total_course_fee;
        const totalPaidAmount = record.customfields.total_paid_amount;
        const dueAmount = totalCourseFee - totalPaidAmount;

        return (
          <span>
            {dueAmount}
          </span>
        );
      }
    },

    {
      title: "studnet fee reciept",
      dataIndex: ['customfields', 'upload_fee_receipt_screenshot'],
      key: "upload_fee_receipt_screenshot",
      render: (studentReceipts) => (
        <Space size="middle">
          {studentReceipts.map((record) => (
            <div key={record._id}>
              <img
                src={`${import.meta.env.VITE_BACKEND_SERVER}public/uploads/studentDocument/${record.filename}`}
                alt={record.originalFilename}
                style={{ width: "100%", height: "50px" }}
              />
            </div>
          ))}
        </Space>
      ),
    },
    {
      title: "Student document",
      dataIndex: ['customfields', 'upload_student_document'],
      key: "upload_student_document",
      render: (studentReceipts) => (
        <Space size="middle">
          {studentReceipts.map((record) => (
            <div key={record._id}>
              <img
                src={`${import.meta.env.VITE_BACKEND_SERVER}public/uploads/studentDocument/${record.filename}`}
                alt={record.originalFilename}
                style={{ width: "100%", height: "50px" }}
              />
            </div>
          ))}
        </Space>
      ),
    },
    {
      title: translate('Status'),
      dataIndex: ['customfields', 'status'],
      render: (status) => {
        let color =
          status === 'New'
            ? 'cyan'
            : status === 'Cancel'
              ? 'blue'
              : status === 'Alumini'
                ? 'green'
                : status === 'Not Intrested'
                  ? 'orange'
                  : 'red';
        return <Tag color={color}>{status && translate(status)}</Tag>;
      },

    },
    {
      title: 'Remark',
      dataIndex: ['customfields', 'remark'],
      key: 'remark',
    },
    {
      title: translate('Created'),
      dataIndex: 'created',
      render: (date) => dayjs(date).format('DD/MM/YYYY'),
    },
    {
      title: translate('Lms'),
      dataIndex: ['lms'],
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('applications'),
    DATATABLE_TITLE: translate('Applications'),
    ADD_NEW_ENTITY: translate('add_applications'),
    ENTITY_NAME: translate('applications'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    readColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <>

      <CrudModule
        createForm={<LeadForm />}
        updateForm={<EditForm isUpdateForm={true} />}
        config={config}
      />
    </>
  );
}
