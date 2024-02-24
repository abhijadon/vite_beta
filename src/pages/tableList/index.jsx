import useLanguage from '@/locale/useLanguage';
import AdminCrudModule from '@/modules/AdminCrudModule';
import Roleform from '@/forms/Roleform';
import AddRoleform from "@/forms/AddRoleform"
export default function Role() {
    const translate = useLanguage();
    const entity = 'teams';
    const searchConfig = {
        displayLabels: ['fullname', 'usename'],
        searchFields: 'username',
        outputValue: 'username',
    };

    const entityDisplayLabels = ['username'];


    const readColumns = [
        { title: translate('full_name'), dataIndex: ['user', 'fullname'] }
    ];

    const dataTableColumns = [
        {
            title: 'S.No.',
            dataIndex: '',
            render: (text, record, index) => index + 1,
        },
        { title: translate('fullname'), dataIndex: ['user', 'fullname'] },
        { title: translate('username'), dataIndex: ['user', 'username'] },
        { title: translate('phone'), dataIndex: ['user', 'phone'] },
        {
            title: translate('role'),
            dataIndex: ['user', 'role'],
            render: (role) => {
                let roleTextColor = 'black'; // Default text color

                // Assign different text colors based on roles
                switch (role) {
                    case 'teamleader':
                        roleTextColor = 'blue';
                        break;
                    case 'admin':
                        roleTextColor = 'green';
                        break;
                    case 'subadmin':
                        roleTextColor = 'purple';
                        break;
                    case 'user':
                        roleTextColor = 'orange';
                        break;
                    // Add more cases if you have additional roles
                    default:
                        roleTextColor = 'black'; // Default text color
                }

                return (
                    <span style={{ color: roleTextColor }}>{translate(role)}</span>
                );
            },
        },
        { title: translate('teamname'), dataIndex: 'teamName' },
        { title: translate('institute'), dataIndex: 'institute' },
        { title: translate('university'), dataIndex: 'university' },
    ];

    const Labels = {
        ADD_NEW_ENTITY: translate('add_new_role'),
        ENTITY_NAME: translate('role'),
        CREATE_ENTITY: translate('save'),
        UPDATE_ENTITY: translate('update'),
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
        <>
            <AdminCrudModule
                createForm={<AddRoleform />}
                updateForm={<Roleform isUpdateForm={true} />}
                config={config}
            />
        </>
    );
}
