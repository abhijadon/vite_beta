// App.js
import React, { useEffect, useState } from 'react';
import { Input, Select, Form, Spin } from 'antd';
import { request } from '@/request';

const { Option } = Select;

const AddRoleform = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.list({ entity: 'admin' });
                setUserList(response.result);
            } catch (error) {
                console.error('Error fetching user list:', error);
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch data only if userList is empty
        if (userList.length === 0) {
            fetchData();
        }
    }, [userList]);

    const handleRoleChange = (value) => {
        setSelectedRole(value);
    };

    const filteredUserList = () => {
        // Custom logic to filter users based on the selectedRole
        if (selectedRole === 'Admin') {
            return userList.filter(user => user.role === 'admin');
        } else if (selectedRole === 'Sub Admin') {
            return userList.filter(user => user.role === 'subadmin');
        }
        else if (selectedRole === 'Manager') {
            return userList.filter(user => user.role === 'manager');
        }
        else if (selectedRole === 'Supportive Associate') {
            return userList.filter(user => user.role === 'supportiveassociate');
        }
        else if (selectedRole === 'Team Leader') {
            return userList.filter(user => user.role === 'teamleader');
        }
        else if (selectedRole === 'User') {
            return userList.filter(user => user.role === 'user');
        }
        // For other roles or when no role is selected, return the full user list
        return userList;
    };

    if (isLoading) {
        // You can add a loading state or spinner while the data is being fetched
        return <div><Spin /></div>;
    }

    return (
        <>
            <Form.Item label="Role" name="role">
                <Select
                    placeholder='Select role'
                    onChange={handleRoleChange}
                >
                    <Option value="Admin">Admin</Option>
                    <Option value="Sub Admin">Sub Admin</Option>
                    <Option value="Manager">Manager</Option>
                    <Option value="Supportive Associate">Supportive Associate</Option>
                    <Option value="Team Leader">Team Leader</Option>
                    <Option value="User">User</Option>

                    {/* Add other role options as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="User" name="userId">
                <Select className='capitalize'
                    placeholder={`Select ${selectedRole ? selectedRole.toLowerCase() : 'users'}`}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {filteredUserList().map(user => (
                        <Select.Option classname="capitalize" key={user._id} value={user._id}>{user.fullname}</Select.Option>
                    ))}
                </Select>
            </Form.Item>


            <Form.Item label="Permissions" name="permissions">
                <Select classname="capitalize" placeholder='Select permissions' mode='multiple' showSearch optionFilterProp="children" filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }>
                    <Select.Option value="create">Create</Select.Option>
                    <Select.Option value="read">Read</Select.Option>
                    <Select.Option value="update">Update</Select.Option>
                    <Select.Option value="delete">Delete</Select.Option>
                </Select>
            </Form.Item>

        </>
    );
};

export default AddRoleform;
