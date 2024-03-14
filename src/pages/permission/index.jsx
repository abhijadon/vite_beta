import CrudModule from '@/modules/CrudModule/CrudModule';
import useLanguage from '@/locale/useLanguage';
import '@/style/tailwind.css';
import PermissionFrom from '@/forms/PermissionFrom';

export default function Lead() {
    const translate = useLanguage();
    const entity = 'permission';
    const searchConfig = {
        displayLabels: ['userId'],
        searchFields: ['userId'],
        outputValue: '_id',
    };

    const dataTableColumns = [
        {
            title: 'S.No.',
            dataIndex: '',
            render: (text, record, index) => index + 1,
        },
        {
            title: translate('user'),
            dataIndex: ['user', 'fullname'],
        },
        {
            title: translate('role'),
            dataIndex: ['user', 'role'],
        },
        {
            title: translate('permissions'),
            dataIndex: 'permissions',
            render: (permissions) => (permissions ? permissions.map(permission => translate(permission.charAt(0).toUpperCase() + permission.slice(1))).join(', ') : ''),
        },
    ];

    const Labels = {
        PANEL_TITLE: translate('permission'),
        DATATABLE_TITLE: translate('permission'),
        ADD_NEW_ENTITY: translate('allow_permissions'),
        ENTITY_NAME: translate('permission'),
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
        searchConfig,
    };

    return (
        <>
            <CrudModule
                createForm={<PermissionFrom />}
                updateForm={<PermissionFrom isUpdateForm={true} />}
                config={config}
            />
        </>
    );
}
