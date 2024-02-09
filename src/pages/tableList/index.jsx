import { useState, useEffect } from 'react';
import { Table, Tag, Input, Button, Dropdown, Menu } from 'antd';
import { PiUsersThree } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";

const { Search } = Input;

const TableList = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState(null);

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
            title: 'S.No.',
            dataIndex: '_id',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Surname',
            dataIndex: 'surname',
            key: 'surname',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: (role) => (
                <Tag color={role === 'admin' ? 'geekblue' : 'green'}>
                    {role.toUpperCase()}
                </Tag>
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
                <div className='w-full grid bg-[#ffffff] p-10 rounded-t-3xl shadow-xl'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1.5 text-lg font-thin'><PiUsersThree />Users List</div>
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
        </>
    );
};

export default TableList;
