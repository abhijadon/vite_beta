import { useState, useEffect } from 'react';
import { Table, Tag, Input, Button, Dropdown, Menu, Modal } from 'antd';
import { PiUsersThree } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaEditSolid } from "react-icons/lia";
import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';

const { Search } = Input;

const Permissions = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/admin/list`);
                const result = await response.json();

                if (result.success) {
                    setData(result.result);
                    setFilteredData(result.result);
                } else {
                    console.error('Error fetching data:', result.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs once on component mount

    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'ASSIGNED TO',
            key: 'role',
            dataIndex: 'role',
            render: (role) => (
                <Tag color={role === 'admin' ? 'geekblue' : 'green'}>
                    {role.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'CREATED DATE',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => (
                <>
                    <div className='flex items-center'>
                        <LiaEditSolid onClick={showModal} className='text-xl text-blue-700 cursor-pointer' />
                        <HiOutlineDotsVertical className='text-xl text-blue-700' />

                    </div>
                </>
            ),
        },
    ];
    const handleFilter = (value) => {
        setSelectedRole(value);

        // Apply combined filtering logic
        const searchFilter = data.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.surname.toLowerCase().includes(value.toLowerCase()) ||
            item.email.toLowerCase().includes(value.toLowerCase())
        );

        const roleFilter = value
            ? searchFilter.filter(item => item.role === value)
            : searchFilter;

        setFilteredData(roleFilter);
    };

    const handleSearch = (value) => {
        // Apply combined filtering logic
        const roleFilter = data.filter(item =>
            selectedRole ? item.role === selectedRole : true
        );

        const searchFilter = value
            ? roleFilter.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.surname.toLowerCase().includes(value.toLowerCase()) ||
                item.email.toLowerCase().includes(value.toLowerCase())
            )
            : roleFilter;

        setFilteredData(searchFilter);
    };

    const filterMenu = (
        <Menu onClick={({ key }) => handleFilter(key)} onChange={(value) => setSelectedRole(value)}>
            <Menu.Item key="admin">Admin</Menu.Item>
            <Menu.Item key="subadmin">Subadmin</Menu.Item>
            <Menu.Item key="tl">TL</Menu.Item>
            <Menu.Item key="users">Users</Menu.Item>
        </Menu>
    );

    return (
        <>
            <div>
                <div className='w-full grid bg-[#ffffff] p-10 rounded-t-lg shadow-xl'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1.5 text-lg font-thin'><PiUsersThree />Permissions List</div>
                        <div className='space-x-3.5'>
                            <Search
                                placeholder="Input search text"
                                allowClear
                                onSearch={handleSearch}
                                style={{
                                    width: 200,
                                }}
                            />
                            <Dropdown overlay={filterMenu} trigger={['click']}>
                                <Button icon={<CiFilter />} />
                            </Dropdown>
                        </div>
                    </div>

                    <Table columns={columns} dataSource={filteredData} loading={loading} className=' mt-6 mb-8' />
                </div>
            </div>

            <Modal className='text-center'
                title="Edit Permission"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            > <Alert
                    banner
                    message={
                        <Marquee pauseOnHover gradient={false}>
                            I can be a React component, multiple React components, or just some text.
                        </Marquee>
                    }
                />
                <div className='mt-14 h-10 ml-4 flex items-center gap-5 mb-10'>
                    <Input type='text' placeholder='Enter Permission Name' />
                    <Button> Update</Button>
                </div>
            </Modal>
        </>
    );
};

export default Permissions;
