// import { DownloadOutlined, LeftOutlined, RightOutlined, PrinterOutlined } from '@ant-design/icons';
import { Tag, Space, Tooltip } from 'antd';
import dayjs from 'dayjs'; // Import dayjs if not already imported
import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';
import useLanguage from '@/locale/useLanguage';
import '@/style/tailwind.css'
import EditForm from '../../forms/EdtiForm';
import AddForm from '../../forms/AddPayment';
export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';
  const searchConfig = {
    displayLabels: ['full_name', 'company', 'contact.email'],
    searchFields: ['full_name', 'company', 'contact.email'],
    outputValue: '_id',
  };
  // const counselorEmailToName = {
  //   'apoorvasrivastava@sode.co.in': 'Apoorva Srivastava',
  //   'nehaprashar@sode.co.in': 'Neha Prasher',
  //   'priya@sode.co.in': 'Priya Anand',
  //   'diksha@sode.co.in': 'Diksha Singh',
  //   'abhilasha@sode.co.in': 'Abhilasha Gupta',
  //   'saher@sode.co.in': 'Saher Khan',

  //   // DES Internal email with name 
  //   'muskan@distanceeducationschool.com': 'Muskaan ',
  //   'aniruddh@distanceeducationschool.com': 'Aniruddh Prakash',
  //   'amritpal@sode.co.in': 'Amritpal Singh',
  //   'salman@sode.co.in': 'Salman',
  //   'tariq@sode.co.in': 'Tariq Hasan',
  //   'shivam@sode.co.in': 'Shivam sharma',
  //   'pushpa@sode.co.in': 'Pushpa Pramanik',
  //   'medha@distanceeducationschool.com': 'Medha',
  //   // DES Internal email with name 
  //   'anurag@distanceeducationschool.com': 'Anurag Yadav',
  //   'kavitakumari@sode.co.in': 'Kavita Kumari',
  //   'rupal@sode.co.in': 'Rupal Gautam',
  //   'deva@sode.co.in': 'Devendra',
  //   'manshi@sode.co.in': 'Manshi Kem',

  //   // DES - INTERNATIONAL email with name 
  //   'zarin@distanceeducationschool.com': 'Zarin Badar',

  //   // HES team email with name 
  //   'kanchan@highereducationschool.com': 'Kanchan Sharma',
  //   'kirti@highereducationschool.com': 'Kirti Dubey',
  //   'ramandeep@highereducationschool.com': 'Ramandeep Kaur',
  //   'kavita@highereducationschool.com': 'Kavita Yadav',
  //   'imra@highereducationschool.com': 'Imra Khan',
  //   'mahak@highereducationschool.com': 'Mahek',
  //   'abhay@highereducationschool.com': 'Abhay Dubey',
  //   'swati@highereducationschool.com': 'Swati',
  //   'gulshan@highereducationschool.com': 'Gulshan Nayyar',
  //   'isha@highereducationschool.com': 'Isha Jaiswal',
  //   'sakshi@highereducationschool.com': 'Sakshi Arora',

  //   // Jain team email with name 
  //   'anitha@sode.co.in': 'A.Anitha',
  //   'vani@sode.co.in': 'Vani Ruckmani',

  //   // Manipal team email with name
  //   'swatiramani.manipal@gmail.com': 'Swati Ramani',
  //   'ankitakumar@sode.co.in': 'Ankita Kumari',
  //   'nidhi@sode.co.in': 'Nidhi',
  //   'amreen@sode.co.in': 'Amreen ALI Khan',
  //   'umar@sode.co.in': 'MD Umar',
  //   'nehagupta@sode.co.in': 'Neha Gupta',
  //   'pawankumar@sode.co.in': 'Pawan Kumar',
  //   'bhavya@sode.co.in': 'Bhavya',

  //   // ALL DES && HES team email with name 
  //   'rajesh@distanceeducationschool.com': 'Rajesh Sir',
  //   'manisha@distanceeducationschool.com': 'Manisha Yadav',
  //   'admin@distanceeducationschool.com': 'Nouman Sir',
  //   'sandy@distanceeducationschool.com': 'Sandy',
  //   'neha@distanceeducationschool.com': 'Neha Raj',
  //   'yashpriya@distanceeducationschool.com': 'Yash Priya',
  //   'kavitahaldar@distanceeducationschool.com': 'Kavita Haldar',
  //   'ifla@distanceeducationschool.com': 'Ifla',
  //   'shalu@distanceeducationschool.com': 'Shalu',
  //   'zainubia@distanceeducationschool.com': 'Zainbuia',
  //   'pallovi@distanceeducationschool.com': 'Pallovi',
  //   'hansi@distanceeducationschool.com': 'Hansi',
  //   'shristi@distanceeducationschool.com': 'Shristi',
  //   'aashita@highereducationschool.com': 'Aashita',
  //   'pratibha@highereducationschool.com': 'Pratibha',
  //   'shreyashi@highereducationschool.com': 'Shreyashi',
  //   'spuhelpdesk@gmail.com': 'Binny',
  //   'ruchika.spu@gmail.com': 'Ruchika',
  //   'ramiz.spu@gmail.com': 'Ramiz'
  // };
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
    // {
    //   title: translate('Counselor Name'),
    //   dataIndex: ['customfields', 'counselor_email'],
    //   key: 'counselor_email',
    //   render: (email) => toTitleCase(counselorEmailToName[email] || email),
    // },
    {
      title: 'User',
      dataIndex: ['userId', 'fullname'],
      key: 'userId', // Add a unique key for the column
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
      title: translate('Payment type'),
      dataIndex: ['customfields', 'payment_type'],
      key: 'payment_type'
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
        const customFields = record.customfields;
        if (!customFields) return null; // Return null if customfields is undefined or null

        const totalCourseFee = customFields.total_course_fee;
        const totalPaidAmount = customFields.total_paid_amount;
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
          {Array.isArray(studentReceipts) && studentReceipts.map((record) => (
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
          {Array.isArray(studentReceipts) && studentReceipts.map((record) => (
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
      render: text => <Tooltip title={text}>
        <div className="truncate-text">{text}</div>
      </Tooltip>,
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
        addForm={<AddForm isUpdateForm={true} />}
        updateForm={<EditForm isUpdateForm={true} />}
        config={config}
      />
    </>
  );
}
