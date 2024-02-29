import dayjs from 'dayjs';
import useLanguage from '@/locale/useLanguage';
import InvoiceDataTableModule from '@/modules/InvoiceModule/InvoiceDataTableModule';

export default function Invoice() {
  const translate = useLanguage();
  const entity = 'invoice';

  const searchConfig = {
    displayLabels: ['full_name', 'username'],
    searchFields: 'full_name,username,phone',
  };
  const entityDisplayLabels = ['full_nmae'];
  const dataTableColumns = [
    {
      title: 'S.No.',
      dataIndex: '',
      render: (text, record, index) => index + 1,
    },
    {
      title: translate('studentID'),
      dataIndex: 'lead_id',
    },
    {
      title: translate('student name'),
      dataIndex: 'student_name',
    },
    {
      title: translate('email'),
      dataIndex: 'email',
    },
    {
      title: translate('payment_mode'),
      dataIndex: 'payment_mode',
    },
    {
      title: translate('phone number'),
      dataIndex: 'phone',
    },
    {
      title: translate('Total course fee'),
      dataIndex: 'total_course_fee',
    },
    {
      title: translate('Total paid amount'),
      dataIndex: 'total_paid_amount',
    },
    {
      title: translate('paid amount'),
      dataIndex: 'paid_amount',
    },
    {
      title: translate('Due amount'),
      dataIndex: 'customfields',
      render: (customfields, record) => {
        const totalCourseFee = parseFloat(record.total_course_fee) || 0;
        const paidAmount = parseFloat(record.paid_amount) || 0;
        const dueAmount = totalCourseFee - paidAmount;
        return <span>{dueAmount.toFixed(2)}</span>;
      },
    },
    {
      title: translate('Create date'),
      dataIndex: 'created',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: translate('Update date'),
      dataIndex: 'updatedAt',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: translate('Create time'),
      dataIndex: 'creationTime',
      render: (date) => {
        return dayjs(date).format('hh:mm:ss a');
      },
    },
    {
      title: translate('Update TIme'),
      dataIndex: 'updatedAt',
      render: (date) => {
        return dayjs(date).format('hh:mm:ss a');
      },
    },
  ];


  const Labels = {
    PANEL_TITLE: translate('invoice'),
    DATATABLE_TITLE: translate('invoice_list'),
    ADD_NEW_ENTITY: translate('add_new_invoice'),
    ENTITY_NAME: translate('invoice'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
    RECORD_ENTITY: translate('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return <InvoiceDataTableModule config={config} />;
}
