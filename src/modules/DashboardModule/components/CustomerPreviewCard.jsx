import useFetch from '@/hooks/useFetch';
import { request } from '@/request';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const Index = () => {
  const { data: paymentResult } = useFetch(() =>
    request.filter({ entity: 'payment' })
  );
  // Initialize an empty object to store user data and counts
  const userDataCount = {};
  // Process paymentResult data to update user count values dynamically
  if (paymentResult?.result) {
    paymentResult.result.forEach((payment) => {
      const userName = payment.userId?.fullname;
      userDataCount[userName] = (userDataCount[userName] || 0) + 1;
    });
  }
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const data = Object.keys(userDataCount)
    .map((userName) => ({
      name: capitalizeWords(userName),  // Capitalize the first letter of each word
      count: userDataCount[userName],
    }))
    .sort((a, b) => b.count - a.count);


  // Generate a color scale using d3
  const colorScale = scaleOrdinal(schemeCategory10);

  return (
    <div style={{ height: 400, fontFamily: 'Arial, sans-serif' }}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorScale(index)} />
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="top" align="right" wrapperStyle={{ columnCount: 4, maxWidth: '400px' }} />
        </PieChart>

      </ResponsiveContainer>
    </div>
  );
};

export default Index;
