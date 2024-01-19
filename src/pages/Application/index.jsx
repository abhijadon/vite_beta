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
    },
    {
      title: 'Email',
      dataIndex: ['contact', 'email'],
      key: 'email',
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
      title: translate('Counselor Email'),
      dataIndex: ['customfields', 'counselor_email'],
      key: 'counselor_email'
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
