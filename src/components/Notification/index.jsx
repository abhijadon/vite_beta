import { useState, useEffect, useRef } from 'react';
import '@/style/tailwind.css'
import { message, Space, Badge, Dropdown, Menu, Modal, Button, Avatar } from 'antd';
import { ClockCircleTwoTone, DeleteTwoTone, } from '@ant-design/icons';
import { LuMailOpen } from "react-icons/lu";
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoCloseOutline } from "react-icons/io5";
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

    <Menu className="scrollbar-custom overflow-y-auto max-h-[500px] w-96">
      <div className='flex justify-between sticky -top-1.5 h-12 w-full z-50 bg-white items-center border-b-2'>
        <div className='text-[18px] font-thin'>Notifications</div>
        <div className='cursor-pointer flex items-center gap-2 font-semibold'>
          <span className='text-[#8c57ff] pl-[10px] font-thin bg-violet-200 text-sm text pr-[10px] h-4.5 rounded-full'>{notificationCount}New</span> <span className="text-xl" title='Mark All Read'><LuMailOpen /></span></div>
      </div >
      {
        notifications.map((notification) => (
          <Menu.Item key={notification._id} className='hover:bg-[#efefef] border-b-2 mt-1.5'>
            <Space className='flex items-center'>
              <Badge>
                <div className='flex flex-wrap items-center gap-1 mt-1 '>
                  <Avatar
                    className="last"
                    src="https://banner2.cleanpng.com/20180617/lx/kisspng-logo-letter-alphabet-5b26051bbf9c07.0227773015292183317848.jpg"
                    style={{
                      color: '#f56a00',
                      backgroundColor: '#f9fafc',
                      float: 'right',
                    }}
                    size="large"
                  />
                  <span className='text-[15px] ml-1'>{notification.full_name}</span>
                  <span className='text-xs'>{notification.email}</span> <br />
                  <div className='ml-12 -mt-4 text-center text-gray-500'>
                    <span className='text-[11px]'><ClockCircleTwoTone /> {notification.timeAgo}</span>
                  </div>
                </div>
              </Badge>
              <div>
                <IoCloseOutline onClick={() => handleDeleteNotification(notification._id)} />
              </div>
            </Space>
          </Menu.Item>
        ))
      }
      <div className='bg-white text-center capitalize w-full sticky bottom-0 h-12 border-t-2'>
        <Button onClick={handleViewAll} className=' bg-blue-600 w-full h-12 mt-1'>View all notifications</Button>
      </div>
    </Menu >

  );

  return (
    <Badge count={notificationCount}>
      <Dropdown overlay={notificationMenu} trigger={['click']} placement='bottomLeft'>
        {<IoIosNotificationsOutline className='text-[25px] cursor-pointer' />}
      </Dropdown>
    </Badge>
  );
};

export default Notifications;