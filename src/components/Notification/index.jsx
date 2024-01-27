import { useState, useEffect } from 'react';
import { message, List, Space } from 'antd';

const Notifications = ({ setNotificationCount }) => {
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setLocalNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/lead/getNotifications`);
        const data = await response.json();

        if (data.success && data.notifications && Array.isArray(data.notifications.notifications)) {
          setNotifications(data.notifications.notifications.slice(0, 5)); // Display only first 5 notifications
          setLocalNotificationCount(data.notifications.notificationCount);
          setNotificationCount(data.notifications.notificationCount);
          message.success('Notifications fetched successfully');
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
        message.error('Error fetching notifications');
      }
    };
    fetchNotifications();
  }, [setNotificationCount]);

  const handleViewAll = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/lead/getNotifications`);
      const data = await response.json();

      if (data.success && data.notifications && Array.isArray(data.notifications.notifications)) {
        setNotifications(data.notifications.notifications); // Set all notifications
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
      message.error('Error fetching notifications');
    }
  };

  return (
    <div className="notifications whiteBox shadow rounded-xl p-3">
      <div>
        <div className='flex justify-between gap-20 pl-2 pr-2'>
          <h2 className='text-base font-serif font-normal'>Notification</h2>
          <p onClick={handleViewAll} style={{ cursor: 'pointer' }}>View All</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="notif-list mt-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.length > 0 ? (
          <List className='p-0'
            dataSource={notifications}
            renderItem={(notification) => (
              <List.Item
                key={notification.id}
                actions={[
                  <Space key="notificat">
                    <div type="text" className="notif-btn" >
                      <span>Name: {notification.name}</span> <br />
                      <span className='text-xs'>email: {notification.email}</span>
                    </div>
                  </Space>,
                ]}
              ></List.Item>
            )}
          />
        ) : (
          <p>No notifications</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
