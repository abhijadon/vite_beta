import React, { useState } from 'react';
import { Table, Button, Drawer, message } from 'antd';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';
import PermissionForm from '@/forms/PermissionFrom';
import EditPermission from '@/forms/EditPermission';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { CiBookmarkPlus } from "react-icons/ci";

const UserTable = () => {
    const [visible, setVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const { data: userList, isLoading: userLoading, error } = useFetch(() =>
        request.list({ entity: 'permission' })
    );

    const handleAddNew = () => {
        setSelectedRecord(null);
        setVisible(true);
    };

    const handleDrawerClose = () => {
        setVisible(false);
        setSelectedRecord(null);
    };

    const handleEdit = (record) => {
        setSelectedRecord(record);
        setVisible(true);
    };

    const handleDelete = async (record) => {
        try {
            await request.delete({ entity: 'permission', id: record._id });
        } catch (error) {
            message.error('Failed to delete record');
        }
    };

    const handleFormSubmit = () => {
        setVisible(false);
        setSelectedRecord(null);
    };

    const columns = [
        {
            title: 'Full Name',
            dataIndex: ['userId', 'fullname'],
            key: 'fullname',
            render: (text) => <span style={{ textTransform: 'capitalize' }}>{text}</span>,
        },
        {
            title: 'Permissions',
            dataIndex: 'permissions',
            key: 'permissions',
            render: (permissions) => permissions.join(', '),
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            fixed: 'right',
            render: (text, record) => (
                <span className='flex items-center gap-4'>
                    <TbEdit
                        className='text-blue-500 text-base cursor-pointer'
                        onClick={() => handleEdit(record)}
                    />
                    <RiDeleteBin6Line
                        className='text-red-500 text-base cursor-pointer'
                        onClick={() => handleDelete(record)}
                    />
                </span>
            ),
        },
    ];

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Button type="primary" onClick={handleAddNew} className='relative float-right mb-10 flex items-center gap-1'>
                <span><CiBookmarkPlus className='text-red-600 font-bold text-lg' /></span> <span>Add Permissions</span>
            </Button>
            <Table dataSource={userList?.result} columns={columns} loading={userLoading} />
            <Drawer
                title={selectedRecord ? 'Edit Permission' : 'Given Permission'}
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={visible}
                width={400}
            >
                {selectedRecord ? (
                    <EditPermission
                        onClose={handleDrawerClose}
                        onFormSubmit={handleFormSubmit}
                        selectedRecord={selectedRecord}
                    />
                ) : (
                    <PermissionForm
                        onClose={handleDrawerClose}
                        onFormSubmit={handleFormSubmit}
                    />
                )}
            </Drawer>
        </div>
    );
};

export default UserTable;
