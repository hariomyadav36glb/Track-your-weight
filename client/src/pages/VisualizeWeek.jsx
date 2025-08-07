import React, { useEffect, useState } from 'react';
import WeightChart from '../components/WeightChart';

const VisualizeWeek = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const endDate = today.toISOString().split('T')[0];
    const startDateObj = new Date();
    startDateObj.setDate(today.getDate() - 7);
    const startDate = startDateObj.toISOString().split('T')[0];

    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/weight/visualise?startDate=${startDate}&endDate=${endDate}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      const formatted = result.map(item => ({
        date: item.date.split('T')[0],
        weight: item.weight,
      }));
      setData(formatted);
    };

    fetchData();
  }, []);

  return (
    <div className="p-14 bg-gradient-to-br from-blue-100 to-purple-200">
      <h2 className="text-xl font-bold mb-4">Weight Chart - Past 7 Days</h2>
      <WeightChart data={data} />
    </div>
  );
};

export default VisualizeWeek;
