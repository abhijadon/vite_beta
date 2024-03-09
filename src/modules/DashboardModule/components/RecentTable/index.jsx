import React, { useEffect, useState, useCallback } from 'react';
import { Spin } from 'antd';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Scatter, Dot } from 'recharts';
import useFetch from '@/hooks/useFetch';  // Adjust the path based on your project structure
import { request } from '@/request';

const Index = () => {
  const fetchLeadData = useCallback(() =>
    request.filter({ entity: 'lead' }), []);

  const { data: paymentResult } = useFetch(fetchLeadData);

  const data = [
    { name: 'Jan', count: 0 },
    { name: 'Feb', count: 0 },
    { name: 'Mar', count: 0 },
    { name: 'Apr', count: 0 },
    { name: 'May', count: 0 },
    { name: 'June', count: 0 },
    { name: 'July', count: 0 },
    { name: 'Aug', count: 0 },
    { name: 'Sep', count: 0 },
    { name: 'Oct', count: 0 },
    { name: 'Nov', count: 0 },
    { name: 'Dec', count: 0 },
  ];

  if (paymentResult?.result) {
    const sortedPayments = paymentResult.result.slice().sort((a, b) => new Date(a.created) - new Date(b.created));

    sortedPayments.forEach((payment) => {
      const createdMonth = new Date(payment.created).toLocaleString('en-US', { month: 'short' });
      const monthIndex = data.findIndex((item) => item.name === createdMonth);
      if (monthIndex !== -1) {
        data[monthIndex].count += 1;
      }
    });
  }

  const sortedData = data.slice().sort((a, b) => new Date(a.name + ' 1, 2000') - new Date(b.name + ' 1, 2000'));

  return (
    <div style={{ marginLeft: '-45px', height: 300, fontFamily: 'Arial, sans-serif' }}>
      <ResponsiveContainer>
        <AreaChart data={sortedData}>
          <XAxis
            dataKey="name"
            tick={{ fill: '#1677ff', fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#1677ff', fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip contentStyle={{ backgroundColor: '#a79fff', color: 'red', fontFamily: 'serif', textDecorationColor: 'activeborder' }} />
          <Area type="natural" dataKey="count" stroke="#1677ff" fill="#1677ff" fillOpacity={0.1} />
          <Scatter dataKey="count" fill="red" isAnimationActive={true}>
            {sortedData.map((entry, index) => (
              <Dot key={`dot-${index}`} cx={index * 20} cy={entry.count} r={4} fill="red" />
            ))}
          </Scatter>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Index;
