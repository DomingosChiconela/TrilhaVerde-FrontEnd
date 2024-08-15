import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const postsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inserções de Posts',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  const usersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Número de Usuários',
        data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],
        backgroundColor: '#66BB6A',
        borderColor: '#43A047',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Meses',
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade',
          font: {
            size: 14,
          },
        },
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h3 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-700 mb-2">Posts por Mês</h4>
          <p className="text-gray-500">Número de posts este mês: <span className="font-bold text-gray-800">120</span></p>
        </div>
       
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-gray-700 mb-2">Usuários por Mês</h4>
          <p className="text-gray-500">Último login: <span className="font-bold text-gray-800">10 minutos atrás</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-4 text-gray-700">Inserções de Posts por Mês</h4>
          <div className="h-80">
            <Bar data={postsData} options={options} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-4 text-gray-700">Número de Usuários por Mês</h4>
          <div className="h-80">
            <Bar data={usersData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
