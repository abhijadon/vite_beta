import { useState, useEffect, useRef } from 'react';
import { message, Space, Badge, Dropdown, Menu, Modal } from 'antd';
import {
  ClockCircleTwoTone,
  BellOutlined,
  MailTwoTone,
  UserOutlined,
  DeleteTwoTone,
} from '@ant-design/icons';

const Notifications = ({ setNotificationCount }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setLocalNotificationCount] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Start WebSocket connection only once when the component mounts
    const newWs = new WebSocket('wss://api.sode.co.in/');

    newWs.onmessage = (event) => {
      const notification = JSON.parse(event.data);

      // Check if the notification is already in the list
      if (!notifications.some((n) => n._id === notification._id)) {
        // Update state and local storage with new notification
        const newNotifications = [notification, ...notifications];
        setNotifications(newNotifications);
        setLocalNotificationCount(newNotifications.length);
        setNotificationCount(newNotifications.length);
        localStorage.setItem('notifications', JSON.stringify(newNotifications));

        message.success('New Notification');
      }
    };

    newWs.onerror = () => {
      setTimeout(() => {
        newWs.close();
        // Reconnect only if the component is still mounted
        if (mountedRef.current) {
          newWs.current = new WebSocket('wss://api.sode.co.in/');
        }
      }, 1000); // Reconnect after 1 second
    };

    newWs.onclose = () => {
      // Implement reconnection logic
      setTimeout(() => {
        newWs.close();
        // Reconnect only if the component is still mounted
        if (mountedRef.current) {
          newWs.current = new WebSocket('wss://api.sode.co.in/');
        }
      }, 1000); // Reconnect after 1 second
    };

    setWs(newWs);

    // Cleanup function to close WebSocket connection on component unmount
    return () => {
      if (newWs) {
        newWs.close();
      }
    };
  }, [setNotificationCount, notifications]);

  // Use a ref to track whether the component is still mounted
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      // Set the mountedRef to false when the component is unmounted
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications && Array.isArray(storedNotifications)) {
      setNotifications(storedNotifications);
      setLocalNotificationCount(storedNotifications.length);
      setNotificationCount(storedNotifications.length);
    }

    const fetchInitialNotifications = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/notifications/`);
        const data = await response.json();

        if (data.success && data.notifications && Array.isArray(data.notifications)) {
          const initialNotifications = showAll ? data.notifications : data.notifications.slice(0, 5);
          setNotifications(initialNotifications);
          localStorage.setItem('notifications', JSON.stringify(data.notifications));
          setLocalNotificationCount(data.notifications.length);
          setNotificationCount(data.notifications.length);
        }
      } catch (error) {
        message.error('Error fetching notifications');
      }
    };

    fetchInitialNotifications();
  }, [setNotificationCount, showAll]);

  const handleViewAll = async () => {
    try {
      setShowAll(true);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/notifications/`);
      const data = await response.json();

      if (data.success && data.notifications && Array.isArray(data.notifications)) {
        setNotifications(data.notifications);
        setLocalNotificationCount(data.notifications.length);
        setNotificationCount(data.notifications.length);
      }
    } catch (error) {
      message.error('Error fetching notifications');
    }
  };

  const handleDeleteNotification = async (id) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: 'Do you really want to delete this notification?',
      onOk: async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/notifications/${id}`, {
            method: 'DELETE',
          });
          const data = await response.json();

          if (data.success) {
            const updatedNotifications = notifications.filter((n) => n._id !== id);
            setNotifications(updatedNotifications);
            setLocalNotificationCount(updatedNotifications.length);
            setNotificationCount(updatedNotifications.length);
            localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
            message.success('Notification deleted successfully');

            if (ws && ws.readyState === WebSocket.OPEN) {
              const deleteMessage = {
                type: 'DELETE_NOTIFICATION',
                id,
              };
              ws.send(JSON.stringify(deleteMessage));
            }
          } else {
            message.error('Error deleting notification');
          }
        } catch (error) {
          console.error('Error deleting notification:', error);
          message.error('Error deleting notification');
        }
      },
    });
  };

  const notificationMenu = (
    <Menu style={{
      overflowX: 'auto',
      maxHeight: '400px',
    }}>
      <div key="viewAll" onClick={handleViewAll} className='flex justify-between sticky pl-3 pr-3 gap-10 items-center mb-3 border-b-black border-b-[1px]'>
        <div>Notifications</div>
        <div className='text-[12px] cursor-pointer text-red-500'>View all</div>
      </div >
      {
        notifications.map((notification) => (
          <Menu.Item key={notification._id}>
            <Space className='flex items-center border-b-2'>
              <Badge dot>
                <div className='flex gap-10'>
                  <div className="text-start">
                    <span className='text-[13px]'><UserOutlined className='text-blue-700' />: {notification.full_name}</span> <br />
                    <span className='text-xs'><MailTwoTone />: {notification.email}</span> <br />
                    <span className='text-[11px]'><ClockCircleTwoTone /> {notification.timeAgo}</span>
                  </div>
                  <div>
                    <DeleteTwoTone onClick={() => handleDeleteNotification(notification._id)} />
                  </div>
                </div>
              </Badge>
            </Space>
          </Menu.Item>
        ))
      }
    </Menu >
  );

  return (
    <Badge count={notificationCount}>
      <Dropdown overlay={notificationMenu} trigger={['click']}>
        {<BellOutlined className='mt-1.5 text-xl text-white' />}
      </Dropdown>
    </Badge>
  );
};

export default Notifications;