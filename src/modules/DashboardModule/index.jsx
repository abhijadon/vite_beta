import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './Dashboard';

export default function Index() {
    // Retrieve the role from localStorage
    const userData = JSON.parse(window.localStorage.getItem('auth'));
    const role = userData.current?.role;

    return (
        <div>
            {(role === 'admin' || role === 'subadmin') ? <AdminDashboard /> : <UserDashboard />}
        </div>
    );
}
