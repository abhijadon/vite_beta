import useFetch from '@/hooks/useFetch';
import { request } from '@/request';
import { Spin } from 'antd';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const Index = () => {
  const { data: paymentResult, isLoading: paymentLoading } = useFetch(() =>
    request.filter({ entity: 'payment' })
  );

  // Define the static data with initial count values
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

  // Process paymentResult data to update count values dynamically
  if (paymentResult?.result) {
    paymentResult.result.forEach((payment) => {
      const month = new Date(payment.date).toLocaleString('en-US', { month: 'short' });
      const monthIndex = data.findIndex((item) => item.name === month);
      if (monthIndex !== -1) {
        data[monthIndex].count += 1;
      }
    });
  }

  return (
    <div style={{ marginLeft: '-45px', height: 380, fontFamily: 'Arial, sans-serif' }}>
      <ResponsiveContainer>
        {paymentLoading ? (
          <Spin />
        ) : (
          <AreaChart data={data}>
            <XAxis
              dataKey="name"
              tick={{ fill: '#1677ff', fontSize: 13 }}
            />
            <YAxis
              tick={{ fill: '#1677ff', fontSize: 13 }}
            />
            <Tooltip contentStyle={{ backgroundColor: '#a79fff', color: 'red', fontFamily: 'serif', textDecorationColor: 'ActiveBorder' }} />
            <Area type="natural" dataKey="count" stroke="blue" fill="#8A8AFF" fillOpacity={0.3} />
            <Dot dataKey="count" fill="red" />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Index;
