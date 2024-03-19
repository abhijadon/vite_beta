import React from 'react';
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

    // Define a mapping of roles to colors
    const roleColors = {
        admin: 'red',
        subadmin: 'blue',
        manager: 'green',
        supportiveassociate: 'black',
        teamleader: 'yellow',
        user: 'green', // Unique color for coordinator role
    };


    const readColumns = [
        {
            title: translate('userId'),
            dataIndex: ['userId', 'fullname'],
        },
        {
            title: translate('role'),
            dataIndex: ['userId', 'role'],
        },
        {
            title: translate('permission'),
            dataIndex: 'permissions',
        },
    ];


    const dataTableColumns = [
        {
            title: 'S.No.',
            dataIndex: '',
            render: (text, record, index) => index + 1,
        },
        {
            title: translate('user'),
            dataIndex: ['userId', 'fullname'],
            render: (text) => text ? text.charAt(0).toUpperCase() + text.slice(1) : '',
        },
        {
            title: translate('role'),
            dataIndex: ['userId', 'role'],
            render: (text) => {
                const lowercaseText = text ? text.toLowerCase() : ''; // Ensure text is not undefined before calling toLowerCase()
                const color = roleColors[lowercaseText] || 'black'; // Use a default color if the role is not found
                return (
                    <span style={{ color }}>
                        {text ? text.charAt(0).toUpperCase() + text.slice(1) : ''}
                    </span>
                );
            },
        },
        {
            title: translate('permissions'),
            dataIndex: 'permissions',
            render: (permissions) => (
                permissions ? permissions.map(permission => translate(permission.charAt(0).toUpperCase() + permission.slice(1))).join(', ') : ''
            ),
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
        readColumns,
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
