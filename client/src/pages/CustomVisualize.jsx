import React, { useState } from 'react';
import WeightChart from '../components/WeightChart';

const CustomVisualize = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);

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

  return (
    <div className="p-14 bg-gradient-to-br from-blue-100 to-purple-200">
      <h2 className="text-xl font-bold mb-5">Custom Weight Visualization</h2>
      <div className="flex gap-4 mb-4">
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="border p-2" />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="border p-2" />
        <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded">Show</button>
      </div>
      <WeightChart data={data} />
    </div>
  );
};

export default CustomVisualize;
