// addRole.js
import { Input, Select, Form } from 'antd';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';

const { Option } = Select;

const addRole = () => {
    const { data: userList } = useFetch(() =>
        request.list({ entity: 'admin' })
    );

    return (
        <>
            <Form.Item label="Institute" name="institute">
                <Input />
            </Form.Item>
            <Form.Item label="University" name="university">
                <Input />
            </Form.Item>
            <Form.Item label="Team Name" name="teamName">
                <Input />
            </Form.Item>
            <Form.Item label="Team Leader" name="userId">
                <Select>
                    <Option value="" disabled>Select Team Leader</Option>
                    {userList && userList.result.map(user => (
                        <Option key={user._id} value={user._id}>{user.fullname}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Team Members" name="teamMembers">
                <Select mode="multiple">
                    {userList && userList.result.map(user => (
                        <Option key={user._id} value={user._id}>{user.fullname}</Option>
                    ))}
                </Select>
            </Form.Item>
        </>
    );
};

export default addRole;
