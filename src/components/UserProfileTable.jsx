import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserProfileTable = () => {
  const provincialData = [
    { label: 'Província A', value: 30 },
    { label: 'Província B', value: 20 },
    { label: 'Província C', value: 50 },
  ];

  const pieData = {
    labels: provincialData.map(item => item.label),
    datasets: [{
      data: provincialData.map(item => item.value),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderColor: '#fff',
      borderWidth: 1,
    }]
  };

  return (
    <div className="p-6">
      <div className="w-full h-64 border border-gray-300">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default UserProfileTable;
