// App.js
import { Input, Select, Form } from 'antd';
import useFetch from '@/hooks/useFetch';
import { request } from '@/request';

const { Option } = Select;

const App = () => {
    const { data: userList, isLoading: userLoading } = useFetch(() =>
        request.list({ entity: 'admin' })
    );

    return (
        <>
            <Form.Item label="Institute" name="institute" >
                <Input />
            </Form.Item>
            <Form.Item label="University" name="university">
                <Input />
            </Form.Item>
            <Form.Item label="Team Name" name="teamName">
                <Input />
            </Form.Item>
            <Form.Item label="Team Leader" name="user" >
                <Select>
                    <Option value="" disabled>Select Team Leader</Option>
                    {userList && userList.result.map(user => (
                        <Option key={user._id} value={user._id}>{user.fullname}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label="Team Members" name="teamMembers">
                <Select>
                    {userList && userList.result.map(user => (
                        <Option key={user._id} value={user._id}>{user.fullname}</Option>
                    ))}
                </Select>
            </Form.Item>
        </>
    );
};

export default App;
