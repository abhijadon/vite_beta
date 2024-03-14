import { Card } from 'antd'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentAdmin } from '@/redux/auth/selectors';


export default function index() {
  const currentAdmin = useSelector(selectCurrentAdmin);
  return (
    <div>
      <Card className='w-[800px] shadow shadow-blue-200 drop-shadow-xl h-[200px] rounded-2xl'>
        <div className="profileDropdownInfo">
          <p className='flex flex-col gap-2'>
            <span className='text-xl font-thin'> Welcome to erp </span> <span className='text-lg font-thin capitalize'> {currentAdmin?.fullname}</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
