import { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const BarsDataset = () => {
  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}api/payment/list`;
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setApiData(data.result);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  // Check if apiData is available
  if (!apiData || apiData.length === 0) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  const getMonthWiseCounts = () => {
    const monthWiseCounts = {};

    apiData.forEach((payment) => {
      const date = new Date(payment.date);
      const month = date.toLocaleString('default', { month: 'short' });

      if (!monthWiseCounts[month]) {
        monthWiseCounts[month] = 0;
      }

      monthWiseCounts[month]++;
    });

    return monthWiseCounts;
  };

  const monthWiseCounts = getMonthWiseCounts();

  const dataset = Object.keys(monthWiseCounts).map((month) => ({
    month,
    count: monthWiseCounts[month],
  }));

  const chartSetting = {
    yAxis: [
      {
        label: 'Data Month',
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  const valueFormatter = (value) => `${value}`;

  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'count', valueFormatter }]}
      {...chartSetting}
    />
  );
};

export default BarsDataset;