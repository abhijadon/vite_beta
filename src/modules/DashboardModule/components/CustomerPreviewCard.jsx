import React, { useCallback, useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { request } from '@/request';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Select, Dropdown, Menu, Button } from 'antd';
import { VscSettings } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { selectCreatedItem } from '@/redux/crud/selectors';
import { BiReset } from "react-icons/bi";
const Index = () => {
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userNames, setUserNames] = useState([]);
  const [data, setData] = useState([]); // Define data state

  const fetchPaymentData = useCallback(() => request.filter({ entity: 'payment' }), []);

  const { data: paymentResult } = useFetch(fetchPaymentData);

  useEffect(() => {
    if (paymentResult?.result) {
      setData(paymentResult.result);
      const uniqueUserNames = [...new Set(paymentResult.result.map(item => item.userId?.fullname))];
      setUserNames(uniqueUserNames);
    }
  }, [paymentResult]);

  const resetValues = () => {
    setSelectedUserId(null);
  };

  // Filter data based on selected user
  const filteredData = selectedUserId
    ? data.filter(item => item.userId?.fullname.toLowerCase() === selectedUserId.toLowerCase())
    : data;

  const userDataCount = {};
  filteredData.forEach((payment) => {
    const userName = payment.userId?.fullname;
    userDataCount[userName] = (userDataCount[userName] || 0) + 1;
  });

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const chartData = Object.keys(userDataCount)
    .map((userName) => ({
      name: capitalizeWords(userName),
      count: userDataCount[userName],
    }))
    .sort((a, b) => b.count - a.count);

  const colorScale = scaleOrdinal(schemeCategory10);

  const menu = (
    <Menu style={{ maxHeight: 200, overflowY: 'auto' }}>
      {userNames.map((userName) => (
        <Menu.Item key={userName} onClick={() => setSelectedUserId(userName)}>
          {userName}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div style={{ height: 400, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Dropdown menu={menu} placement="bottomLeft" arrow>
          <div className='flex items-center gap-2 p-1 w-20 rounded-md border box-border hover:bg-slate-200 cursor-pointer -ml-6 -mt-6 font-thin text-sm'>
            <span><VscSettings /></span>
            <span className='font-thin text-sm'>Filter</span>
          </div>
        </Dropdown>
        <Button type="dashed" className='bg-transparent text-red-500 font-thin text-base hover:text-red-500 hover:bg-slate-100' onClick={resetValues}><BiReset /></Button>
      </div>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorScale(index)} />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ columnCount: 4, maxWidth: '400px' }}
            content={(props) => {
              const { payload } = props;
              return (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                      <span>{entry.value}</span> ({entry.payload.count})
                    </li>
                  ))}
                </ul>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Index;