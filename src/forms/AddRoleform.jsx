// App.js
import React, { useEffect, useState } from 'react';
import { Input, Select, Form } from 'antd';
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
        if (selectedRole === 'Team Leader') {
            return userList.filter(user => user.role === 'teamLeader');
        } else if (selectedRole === 'Admin') {
            return userList.filter(user => user.role === 'admin');
        }
        // For other roles or when no role is selected, return the full user list
        return userList;
    };

    if (isLoading) {
        // You can add a loading state or spinner while the data is being fetched
        return <div>Loading...</div>;
    }

    return (
        <>
            <Form.Item label="Role" name="role">
                <Select
                    placeholder='Select role'
                    onChange={handleRoleChange}
                >
                    <Option value="Team Leader">Team Leader</Option>
                    <Option value="Admin">Admin</Option>
                    {/* Add other role options as needed */}
                </Select>
            </Form.Item>
            <Form.Item label="Institute" name="institute">
                <Input placeholder='Enter institute' />
            </Form.Item>
            <Form.Item label="University" name="university">
                <Input placeholder='Enter university' />
            </Form.Item>
            <Form.Item label="Team Name" name="teamName">
                <Input placeholder='Enter teamname' />
            </Form.Item>
            <Form.Item label="Team leader" name="userId">
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

            {selectedRole === 'Team Leader' && (
                <Form.Item label="Team Members" name="teamMembers">
                    <Select classname="capitalize" placeholder='Select teamembers' mode='multiple' showSearch optionFilterProp="children" filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                        {userList.map(user => (
                            <Option key={user._id} value={user._id}>{user.fullname}</Option>
                        ))}
                    </Select>
                </Form.Item>
            )}
        </>
    );
};

export default AddRoleform;
