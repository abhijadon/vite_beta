import React, { useEffect, useState } from 'react';
import { Input, Select, Form, Spin, Button, message } from 'antd';
import { request } from '@/request';
import axios from 'axios';
import Cookies from 'js-cookie';


const { Option } = Select;

const PermissionForm = ({ onClose, onFormSubmit }) => {
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
        // For other roles or when no role is selected, return the full user list
        return userList;
    };

    const onFinish = async (formValues) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_SERVER}api/permission/create`, formValues, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                },
            });

            const data = response.data;

            if (response.status === 200) {
                message.success('Permission created successfully');
                onFormSubmit(); // Trigger parent component's onFormSubmit function
                onClose(); // Close the form
            } else {
                throw new Error(data.message || 'Failed to create permission');
            }
        } catch (error) {
            console.error('Error:', error);
            message.error(error.message || 'Failed to create permission');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        // You can add a loading state or spinner while the data is being fetched
        return <div><Spin /></div>;
    }


    return (
        <Form onFinish={onFinish} layout='vertical'>
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
                </Select>
            </Form.Item>
            <Form.Item label="Users" name="userId">
                <Select
                    placeholder={`Select ${selectedRole ? selectedRole.toLowerCase() : 'users'}`}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {filteredUserList().map(user => (
                        <Option classname="capitalize" key={user._id} value={user._id}>{user.fullname}</Option>
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

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PermissionForm;
