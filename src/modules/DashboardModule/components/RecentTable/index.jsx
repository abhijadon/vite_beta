import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CiFilter } from "react-icons/ci";
import { Dropdown, Menu } from 'antd';

export default function BasicLineChart() {
  const [monthlyData, setMonthlyData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [filterOption, setFilterOption] = useState('all');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_SERVER}api/lead/list`)
      .then(response => response.json())
      .then(data => {
        const monthlyCounts = {};

        data.result.forEach(item => {
          const date = new Date(item.created);
          const month = date.getMonth() + 1; // January is 0, so add 1
          const year = date.getFullYear();

          const key = `${year}-${month}`;
          if (monthlyCounts[key]) {
            monthlyCounts[key]++;
          } else {
            monthlyCounts[key] = 1;
          }
        });

        setMonthlyData(monthlyCounts);
        setFilteredData(monthlyCounts); // Initialize filtered data with all data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterData = (option) => {
    setFilterOption(option);
    let filtered = {};

    switch (option) {
      case 'all':
        filtered = monthlyData;
        break;
      case 'today':
        const today = new Date();
        const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}`;
        filtered = { [todayKey]: monthlyData[todayKey] || 0 };
        break;
      case 'week':
        const currentWeek = getWeekNumber(new Date());
        filtered = Object.keys(monthlyData).reduce((result, key) => {
          const [year, week] = key.split('-').map(Number);
          if (year === new Date().getFullYear() && week === currentWeek) {
            result[key] = monthlyData[key];
          }
          return result;
        }, {});
        break;
      case 'tomorrow':
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowKey = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}`;
        filtered = { [tomorrowKey]: monthlyData[tomorrowKey] || 0 };
        break;
      case 'month':
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();
        const currentMonthKey = `${currentYear}-${currentMonth}`;
        filtered = { [currentMonthKey]: monthlyData[currentMonthKey] || 0 };
        break;
      default:
        filtered = monthlyData;
    }

    setFilteredData(filtered);
  };

  const getWeekNumber = (d) => {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
  };

  const xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = xData.map((month, index) => {
    const key = `${new Date().getFullYear()}-${index + 1}`; // Adjust index for zero-based months
    return { name: month, count: filteredData[key] || 0 };
  });

  const menu = (
    <Menu>
      <Menu.Item key="all" onClick={() => filterData('all')} className={`cursor-pointer font-thin text-xs ${filterOption === 'all' ? 'bg-blue-500 text-white' : ''}`}>
        All
      </Menu.Item>
      <Menu.Item key="today" onClick={() => filterData('today')} className={`cursor-pointer font-thin text-xs ${filterOption === 'today' ? 'bg-blue-500 text-white' : ''}`}>
        Today
      </Menu.Item>
      <Menu.Item key="week" onClick={() => filterData('week')} className={`cursor-pointer font-thin text-xs ${filterOption === 'week' ? 'bg-blue-500 text-white' : ''}`}>
        Week
      </Menu.Item>
      <Menu.Item key="tomorrow" onClick={() => filterData('tomorrow')} className={`cursor-pointer font-thin text-xs ${filterOption === 'tomorrow' ? 'bg-blue-500 text-white' : ''}`}>
        Tomorrow
      </Menu.Item>
      <Menu.Item key="month" onClick={() => filterData('month')} className={`cursor-pointer font-thin text-xs ${filterOption === 'month' ? 'bg-blue-500 text-white' : ''}`}>
        Month
      </Menu.Item>
    </Menu>
  );

  const customDot = ({ cx, cy, stroke, payload, value }) => {
    if (value !== 0) {
      return (
        <svg x={cx - 5} y={cy - 5} width={10} height={10} fill="blue" viewBox="0 0 24 24">
          <circle cx={5} cy={5} r={5} />
        </svg>
      );
    }
    return null;
  };

  return (
    <>
      <div className='bg-white shadow-lg rounded-xl'>
        <div className='flex justify-between items-center p-5'>
          <h3 className='text-lg font-thin'>Recent data</h3>
          <div>
            <Dropdown overlay={menu} trigger={['click']}>
              <div className='mb-2'>
                <CiFilter className='cursor-pointer text-xl font-thin text-blue-500' title='Filter' />
              </div>
            </Dropdown>
          </div>
        </div>

        <div className='p-4'>
          <AreaChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 25, right: 50, bottom: 5 }}
          >
            <defs>
              <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <XAxis strokeDasharray="1" />
            <Tooltip />
            <Legend />
            <Area
              type="basis" // Use linear type for a clear line
              dataKey="count"
              stroke="#1677ff"
              fill="rgba(22, 119, 255, 0.3)" // Adjust alpha channel for transparency
              strokeWidth={1.5}
              dot={customDot}
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
}
