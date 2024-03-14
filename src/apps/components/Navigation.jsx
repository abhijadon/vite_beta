import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';
import { useAppContext } from '@/context/appContext';
import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/sodelogo.png';
import logoText from '@/style/images/sodeicon.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PiUsersThree } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { RiPenNibLine } from "react-icons/ri";
import { MdLockOpen } from "react-icons/md";
import {
  SettingOutlined,
  FileTextOutlined,
  DashboardOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

import { selectCurrentAdmin } from '@/redux/auth/selectors';

export default function Navigation({ onPathChange }) {

  const handlePathChange = (newPathname) => {
    onPathChange(newPathname);
    localStorage.setItem('currentPathname', newPathname);
  };
  useEffect(() => {
    const storedPath = localStorage.getItem('currentPathname');
    if (storedPath) {
      onPathChange(storedPath);
    }
  }, [onPathChange]);

  return (
    <>
      <div className="sidebar-wraper">
        <Sidebar collapsible={true} onPathChange={handlePathChange} />
      </div>
      <MobileSidebar onPathChange={handlePathChange} />
    </>
  );
}
function Sidebar({ collapsible, onPathChange }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const translate = useLanguage();
  const navigate = useNavigate();

  const currentAdmin = useSelector(selectCurrentAdmin);
  const isAdmin = currentAdmin?.role === 'admin';

  const settingsOptions = [
    {
      key: 'generalSettings',
      label: <Link to={'/settings'}>{translate('general_settings')}</Link>,
    },
    {
      key: 'emailTemplates',
      label: <Link to={'/email'}>{translate('email_templates')}</Link>,
    },
    {
      key: 'paymentMode',
      label: <Link to={'/payment/mode'}>{translate('payment_mode')}</Link>,
    },
    {
      key: 'taxes',
      label: <Link to={'/taxes'}>{translate('taxes')}</Link>,
    },
    {
      key: 'advancedSettings',
      label: <Link to={'/settings/advanced'}>{translate('advanced_settings')}</Link>,
    },
  ];

  const settingsSection = isAdmin
    ? {
      label: translate('Settings'),
      key: 'settings',
      icon: <SettingOutlined />,
      children: settingsOptions,
    }
    : null;

  const rolesPermission = [
    {
      key: 'roles',
      icon: <PiUsersThree className='text-[18px]' />,
      label: <Link to={'/roles'}>{translate('roles')}</Link>,
    },
    {
      key: 'permissions',
      icon: <BsPersonCheck className='text-[18px]' />,
      label: <Link to={'/permissions'}>{translate('user_list')}</Link>,
    },
    {
      key: 'permission',
      icon: <RiPenNibLine className='text-[18px]' />,
      label: <Link to={'/permission'}>{translate('permission')}</Link>,
    },
  ];


  const rolesSection = isAdmin
    ? {
      label: 'Roles & Users',
      key: 'rolesSection',
      icon: <MdLockOpen />,
      children: rolesPermission,
    }
    : null;

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>{translate('dashboard')}</Link>,
    },
    {
      key: 'application',
      icon: <UserAddOutlined />,
      label: <Link to={'/application'}>{translate('applications')}</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to={'/payment'}>{translate('payment')}</Link>,
    },
    ...(isAdmin
      ? [
        {
          key: 'invoice',
          icon: <FileTextOutlined />,
          label: <Link to={'/invoice'}>{translate('invoice')}</Link>,
        },
        {
          key: 'employee',
          icon: <UserOutlined />,
          label: <Link to={'/employee'}>{translate('employee')}</Link>,
        },
      ]
      : []),
    rolesSection,
    settingsSection,

  ].filter(Boolean);


  useEffect(() => {
    if (location && currentPath !== location.pathname) {
      setCurrentPath(location.pathname);
      onPathChange(location.pathname);
    }
  }, [location, currentPath, onPathChange]);
  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);

  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: '20px',
        top: '20px',
        bottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 20px 3px rgba(150, 190, 238, 0.15)',
      }}
      theme={'light'}
    >
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logoIcon} alt="Logo" style={{ height: '35px' }} />
        {!showLogoApp && (
          <img
            src={logoText}
            alt="Logo"
            style={{ marginTop: '1px', marginLeft: '5px', height: '38px' }}
          />
        )}
      </div>
      <Menu items={items} mode="inline" theme={'light'} />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{ marginLeft: 25 }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>
      <Drawer
        width={200}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        rootClassName="mobile-sidebar-wraper"
      >
        <Sidebar collapsible={false} />
      </Drawer>
    </>
  );
}
