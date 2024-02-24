// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Select, Form } from 'antd';

const App = () => {
    const [teamName, setTeamName] = useState('');
    const [institute, setInstitute] = useState('');
    const [university, setUniversity] = useState('');
    const [userId, setuserId] = useState('');
    const [teamMembers, setteamMembers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/list')
            .then(response => setUsers(response.data.result || []))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Form.Item label="Institute" name="institute" initialValue={institute}>
                <Input onChange={e => setInstitute(e.target.value)} />
            </Form.Item>
            <Form.Item label="University" name="university" initialValue={university}>
                <Input onChange={e => setUniversity(e.target.value)} />
            </Form.Item>
            <Form.Item label="Team Name" name="teamName" initialValue={teamName}>
                <Input onChange={e => setTeamName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Team Leader" name="user" initialValue={userId}>
                <Select onChange={value => setuserId(value)}>
                    <option value="" disabled>Select Team Leader</option>
                    {Array.isArray(users) && users
                        .filter(user => user.role === 'teamleader' && user.role === 'subadmin')
                        .map(user => (
                            <Select.Option key={user._id} value={user._id}>{user.fullname}</Select.Option>
                        ))}
                </Select>
            </Form.Item>
            <Form.Item label="Team Members" name="teamMembers" initialValue={teamMembers}>
                <Select mode="multiple" onChange={values => setteamMembers(values)}>
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
