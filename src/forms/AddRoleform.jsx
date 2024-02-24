// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Select, Form } from 'antd';

const App = () => {
    const [teamName, setTeamName] = useState('');
    const [teamLeaderId, setTeamLeaderId] = useState('');
    const [memberIds, setMemberIds] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users with role 'user' (or adjust the condition based on your needs)
        axios.get('http://localhost:5000/api/admin/list')
            .then(response => setUsers(response.data.result || []))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Form.Item label="Team Name" name="teamName" initialValue={teamName}>
                <Input onChange={e => setTeamName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Team Leader" name="teamLeaderId" initialValue={teamLeaderId}>
                <Select onChange={value => setTeamLeaderId(value)}>
                    <option value="" disabled>Select Team Leader</option>
                    {Array.isArray(users) && users
                        .filter(user => user.role === 'teamleader')
                        .map(user => (
                            <Select.Option key={user._id} value={user._id}>{user.fullname}</Select.Option>
                        ))}
                </Select>
            </Form.Item>
            <Form.Item label="Team Members" name="memberIds" initialValue={memberIds}>
                <Select mode="multiple" onChange={values => setMemberIds(values)}>
                    {Array.isArray(users) && users
                        .filter(user => user.role === 'user')
                        .map(user => (
                            <Select.Option key={user._id} value={user._id}>{user.fullname}</Select.Option>
                        ))}
                </Select>
            </Form.Item>
        </>
    );
};

export default App;
