import { Badge } from 'antd';
import useLanguage from '@/locale/useLanguage';
import AdminCrudModule from '@/modules/AdminCrudModule';
import AdminForm from '@/forms/AdminForm';
import RolesForm from '@/forms/AdminForm';

export default function Admin() {
  const translate = useLanguage();
  const entity = 'admin';
  const searchConfig = {
    displayLabels: ['fullname', 'username'],
    searchFields: 'username',
    outputValue: 'usename',
  };

  const entityDisplayLabels = ['username'];

  const toTitleCase = (str) => {
    if (!str) return ''; // Check for undefined or null
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
      return match.toUpperCase();
    });
  };

  const readColumns = [
    { title: translate('full_name'), dataIndex: 'fullname' },
    { title: translate('username'), dataIndex: 'username' },
    { title: translate('role'), dataIndex: 'role' },
    {
      title: translate('status'),
      dataIndex: 'status',
      render: (status) => (
        <Badge color={status === 'online' ? 'green' : 'red'} text={translate(status)} />
      ),
    },
  ];

  const dataTableColumns = [
    {
      title: 'S.No.',
      dataIndex: '',
      render: (text, record, index) => index + 1,
    },
    {
      title: translate('fullname'),
      dataIndex: 'fullname',
      key: 'fullname',
      render: (fullname) => toTitleCase(fullname),
    },
    { title: translate('username'), dataIndex: 'username' },
    { title: translate('role'), dataIndex: 'role' },
    {
      title: translate('status'),
      dataIndex: 'status',
      render: (status) => (
        <Badge color={status === 'online' ? 'green' : 'red'} text={translate(status)} />
      ),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('admin'),
    DATATABLE_TITLE: translate('admin_list'),
    ADD_NEW_ENTITY: translate('add_new_admin'),
    ENTITY_NAME: translate('admin'),
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
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<RolesForm isUpdateForm={true} />}
      config={config}
    />
  );
}
