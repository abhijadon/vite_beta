import { Form, Input, Select, Space, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import useLanguage from '@/locale/useLanguage';


const options = [
    {
        value: 'DES',
    },
    {
        value: 'SPU',
    },
    {
        value: 'SGVU',
    },
    {
        value: 'cyan',
    },
];


const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

export default function Roleform({ isUpdateForm = false }) {
    const translate = useLanguage();
    return (
        <>
            <div>
                <div className='text-center text-lg font-thin font-mono text-blue-500 underline-offset-2 underline'>
                    Roles Form
                </div>
                <div>
                    <div>
                        <label htmlFor="fullname" className='font-thin font-mono text-base capitalize'>Fullname</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name="user"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input autoComplete="off" placeholder='Enter your fullname' />
                        </Form.Item>
                    </div>

                    <div>
                        <label htmlFor="username" className='font-thin font-mono text-base capitalize'>username</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name="teamName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input autoComplete="off" placeholder='Enter your email' />
                        </Form.Item>
                    </div>
                    <div>
                        <label htmlFor="phone" className='font-thin font-mono text-base capitalize'>phone</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name={['user', 'phone']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input autoComplete="off" placeholder='Enter your phone' />
                        </Form.Item>
                    </div>
                    <div>
                        <label htmlFor="role" className='font-thin font-mono text-base capitalize'>role</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name={['user', 'role']}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="select your role">
                                <Select.Option value="admin">{translate("admin_super_admin")}</Select.Option>
                                <Select.Option value="subadmin">{translate("sub_admin")}</Select.Option>
                                <Select.Option value="teamleader">{translate("teamleader")}</Select.Option>
                                <Select.Option value="user">{translate("user")}</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div>
                        <label htmlFor="phone" className='font-thin font-mono text-base capitalize'>teamName</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name="teamName"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input autoComplete="off" placeholder='Enter your enter teamname' />
                        </Form.Item>
                    </div>
                    {/* Rest of the form code */}
                    <div>
                        <label htmlFor="teamMembers" className='font-thin font-mono text-base capitalize'>teamMembers</label><span className='text-red-500'>*</span>
                        <Form.List name="teamMembers">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'fullname']}
                                                fieldKey={[fieldKey, 'fullname']}
                                                rules={[{ required: true, message: 'Please enter member fullname' }]}
                                            >
                                                <Input placeholder="Member Fullname" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'phone']}
                                                fieldKey={[fieldKey, 'phone']}
                                                rules={[{ required: true, message: 'Please enter member phone' }]}
                                            >
                                                <Input placeholder="Member Phone" />
                                            </Form.Item>
                                            {/* Add other fields as needed */}
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                            Add Member
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </div>

                    <div>
                        <label htmlFor="institute" className='font-thin font-mono text-base capitalize'>institute</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name="institute"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>


                    <div>
                        <label htmlFor="university" className='font-thin font-mono text-base capitalize'>university</label><span className='text-red-500'>*</span>
                        <Form.Item
                            name="university"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>


                    <div>
                        <label htmlFor="role" className='font-thin font-mono text-base capitalize'>role</label><span className='text-red-500'>*</span>

                        <Form.Item
                            name="file"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e.fileList}
                        >
                            <Upload beforeUpload={beforeUpload}>
                                <Button icon={<UploadOutlined />}>{translate("click_to_upload")}</Button>
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </>
    );
}
