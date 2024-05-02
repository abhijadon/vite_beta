import { useProfileContext } from '@/context/profileContext';
import { generate as uniqueId } from 'shortid';
import { EditOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Descriptions, Divider, Row } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentAdmin } from '@/redux/auth/selectors';
import useLanguage from '@/locale/useLanguage';
import { BASE_URL } from '@/config/serverApiConfig';
import { checkImage } from '@/request';
const AdminInfo = ({ config }) => {
  const translate = useLanguage();
  const navigate = useNavigate();
  const { profileContextAction } = useProfileContext();
  const { modal, updatePanel } = profileContextAction;
  const { ENTITY_NAME } = config;
  const currentAdmin = useSelector(selectCurrentAdmin);

  const srcImgProfile = checkImage(BASE_URL + currentAdmin?.photo)
    ? BASE_URL + currentAdmin?.photo
    : undefined;

  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={ENTITY_NAME}
        ghost={false}
        extra={[
          currentAdmin?.role === 'admin' && (
            <Button className='bg-blue-200 text-blue-900 hover:bg-blue-50 hover:text-blue-600 border-blue-500'
              key={uniqueId()} // Ensure unique key
              onClick={() => {
                updatePanel.open();
              }}
              type="primary"
              icon={<EditOutlined />}
            >
              {translate('Edit')}
            </Button>
          ),
          <Button className='bg-blue-200 text-blue-900 hover:bg-blue-50 hover:text-blue-600'
            key={`${uniqueId()}`}
            icon={<LockOutlined />}
            onClick={() => {
              modal.open();
            }}
          >
            {translate('Update Password')}
          </Button>,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Row align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 7 }} md={{ span: 5 }}>
          <Avatar
            className="last left pad5"
            src={srcImgProfile}
            size={96}
            style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: '48px' }}
            alt={`${currentAdmin?.fullname}`}
          >
            {currentAdmin?.fullname.charAt(0).toUpperCase()}
          </Avatar>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 18 }}>
          <Descriptions column={1} size="middle">
            <Descriptions.Item label={translate('first name')}>
              {currentAdmin?.fullname}
            </Descriptions.Item>
            <Descriptions.Item label={translate('username')}>{currentAdmin?.username}</Descriptions.Item>
            <Descriptions.Item label={translate('phone')}>{currentAdmin?.phone}</Descriptions.Item>
            <Descriptions.Item label={translate('role')}>{currentAdmin?.role}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Divider />
      <Button
        key={`${uniqueId()}`}
        icon={<LogoutOutlined />}
        className="right"
        onClick={() => navigate('/logout')}
      >
        {translate('Logout')}
      </Button>
    </>
  );
};
export default AdminInfo;
