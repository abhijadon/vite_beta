import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';
import useLanguage from '@/locale/useLanguage';
import '@/style/tailwind.css'
import AddForm from '@/forms/AddRoleform';
export default function Lead() {

    const translate = useLanguage();
    const entity = 'teams';
    const searchConfig = {
        displayLabels: ['userId'],
        searchFields: ['userId'],
        outputValue: '_id',
    };

    const readColumns = [
        {
            title: translate('userId'),
            dataIndex: 'userId',
        },
        {
            title: translate('teamMembers'),
            dataIndex: 'teamMembers',
        },
        {
            title: translate('institute'),
            dataIndex: 'institute',
        },
        {
            title: translate('university'),
            dataIndex: 'university',
        },
        {
            title: translate('teamName'),
            dataIndex: 'teamName',
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
            dataIndex: ['userId', 'fullname'],
            render: (text) => text ? text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '',
        },
        {
            title: 'teamMembers',
            dataIndex: 'teamMembers',
            render: (teamMembers) => {
                if (teamMembers && Array.isArray(teamMembers)) {
                    const capitalizedMembers = teamMembers.map((member) => member.fullname.charAt(0).toUpperCase() + member.fullname.slice(1));
                    return capitalizedMembers.join(', ');
                } else {
                    return ''; // or any other default value if 'teamMembers' is undefined or not an array
                }
            },
        },
        {
            title: translate('institute'),
            dataIndex: 'institute',
            render: (institute) => (
                institute ? institute.join(', ') : ''
            ),
        },
        {
            title: 'University',
            dataIndex: 'university',
            render: (university) => (
                university ? university.join(', ') : ''
            ),
        },
        {
            title: translate('teamName'),
            dataIndex: 'teamName',
        },
    ];

    const Labels = {
        PANEL_TITLE: translate('teams'),
        DATATABLE_TITLE: translate('teams'),
        ADD_NEW_ENTITY: translate('add_roles'),
        ENTITY_NAME: translate('teams'),
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
    };
    return (
        <>
            <CrudModule
                createForm={<AddForm />}
                updateForm={<AddForm isUpdateForm={true} />}
                config={config}
            />
        </>
    );
}
