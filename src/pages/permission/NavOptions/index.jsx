import React, { useState } from 'react';
import { Table, Button, Drawer, message } from 'antd';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';
import MenuForm from '@/forms/menuOptions';
import EditOptions from '@/forms/EditOptions';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { AiOutlineMenuFold } from "react-icons/ai";

const Index = () => {
    const [visible, setVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const { data: userList, isLoading: userLoading, error } = useFetch(() =>
        request.listAll({ entity: 'menu' })
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
            await request.delete({ entity: 'menu', id: record._id });
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
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (text) => <span style={{ textTransform: 'capitalize' }}>{text}</span>,
        },
        {
            title: 'Options',
            dataIndex: 'options',
            key: 'options',
            render: (options) => options.join(', '),
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
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-thin'>Sidebar Permissions</h2>
                <Button type="primary" onClick={handleAddNew} className='relative float-right mb-4 flex items-center gap-1'>
                    <span><AiOutlineMenuFold className='font-light text-lg' /></span> <span>Add Menu</span>
                </Button>
            </div>


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
                    <EditOptions
                        onClose={handleDrawerClose}
                        onFormSubmit={handleFormSubmit}
                        selectedRecord={selectedRecord}
                    />
                ) : (
                    <MenuForm
                        onClose={handleDrawerClose}
                        onFormSubmit={handleFormSubmit}
                    />
                )}
            </Drawer>
        </div>
    );
};

export default Index;
