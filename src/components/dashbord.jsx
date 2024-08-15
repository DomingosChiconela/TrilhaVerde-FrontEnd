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
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Dados de exemplo
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
        data: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105], // Dados de exemplo
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
          text: 'Meses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade'
        }
      }
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">Posts por Mês</h4>
          <p>Number of users: 120</p>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold">Usuários por Mês</h4>
          <p>Last login: 10 minutes ago</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Inserções de Posts por Mês</h4>
          <div className="h-72">
            <Bar data={postsData} options={options} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Número de Usuários por Mês</h4>
          <div className="h-72">
            <Bar data={usersData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
