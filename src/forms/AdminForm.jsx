import { Form, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';
import useLanguage from '@/locale/useLanguage';

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

export default function AdminForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <div>
        <div className='text-center text-lg font-thin font-mono text-blue-500 underline-offset-2 underline'>
          Register user
        </div>
        <div>
          <div>
            <label htmlFor="fullname" className='font-thin font-mono text-base capitalize'>Fullname</label><span className='text-red-500'>*</span>
            <Form.Item
              name="fullname"
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
              name="username"
              rules={[
                {
                  required: true,
                },
                {
                  type: 'email'
                }
              ]}
            >
              <Input autoComplete="off" placeholder='Enter your email' />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="phone" className='font-thin font-mono text-base capitalize'>phone</label><span className='text-red-500'>*</span>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input autoComplete="off" placeholder='Enter your phone' />
            </Form.Item>
          </div>

          {!isUpdateForm && (
            <div>
              <label htmlFor="password" className='font-thin font-mono text-base capitalize'>password</label><span className='text-red-500'>*</span>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password autoComplete="off" placeholder='Enter your password' />
              </Form.Item>
            </div>
          )}
          <div>
            <label htmlFor="role" className='font-thin font-mono text-base capitalize'>role</label><span className='text-red-500'>*</span>
            <Form.Item
              name="role"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="select your role">
                <Select.Option value="admin">{translate("admin_super_admin")}</Select.Option>
                <Select.Option value="subadmin">{translate("subadmin")}</Select.Option>
                <Select.Option value="manager">{translate("manager")}</Select.Option>
                <Select.Option value="teamleader">{translate("teamleader")}</Select.Option>
                <Select.Option value="user">{translate("user")}</Select.Option>
              </Select>
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
