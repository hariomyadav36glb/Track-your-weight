import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short'
  });
};

const WeightChart = ({ data }) => {
  if (!data || data.length < 2) return <p>Not enough data to display graph</p>;

  const weights = data.map(d => d.weight);
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const avgWeight = (totalWeight / weights.length).toFixed(1);
  const minWeight = Math.min(...weights);
  const maxWeight = Math.max(...weights);
  const weightChange = (weights[weights.length - 1] - weights[0]).toFixed(1);

  const startDate = new Date(data[0].date);
  const endDate = new Date(data[data.length - 1].date);
  const msInDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.max(1, (endDate - startDate) / msInDay);
  const ratePerMonth = ((weightChange / daysBetween) * 30).toFixed(2);

  return (
    <div className="p-10 bg-gradient-to-br from-blue-100 to-purple-200">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ fill: '#000', fontWeight: 'bold' }}
          />
          <YAxis
            tick={{ fill: '#000', fontWeight: 'bold' }}
            label={{
              value: 'Weight(kg)',
              angle: -90,
              position: 'insideLeft',
              fill: '#000',
              fontWeight: 'bold'
            }}
          />
          <Tooltip
            labelFormatter={formatDate}
            formatter={(value) => [`${value} kg`, 'Weight']}
          />
          <Line type="monotone" dataKey="weight" stroke="#000000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Stats */}
      <div className="mt-6 p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded shadow text-lg font-semibold space-y-2">
        <p>📊 <span className="font-bold">Average Weight:</span> {avgWeight} kg</p>
        <p>📈 <span className="font-bold">Maximum Weight:</span> {maxWeight} kg</p>
        <p>📉 <span className="font-bold">Minimum Weight:</span> {minWeight} kg</p>
        <p>
          🔄 <span className="font-bold">Weight {weightChange > 0 ? 'Gained' : 'Lost'}:</span> {Math.abs(weightChange)} kg
        </p>
        <p>
          📅 <span className="font-bold">Rate of Change:</span> {Math.abs(ratePerMonth)} kg/month (
          {weightChange > 0 ? 'gaining' : 'losing'})
        </p>
      </div>
    </div>
  );
};

export default WeightChart;
