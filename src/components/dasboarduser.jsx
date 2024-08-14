import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
  Title, Tooltip, Legend,
  BarElement, ArcElement,
  CategoryScale, LinearScale
);

const barData = (vendas) => ({
  labels: ['Papel', 'Metal', 'Plástico', 'Vidro', 'Madeira'],
  datasets: [
    {
      label: 'Vendas por Categoria',
      data: [
        vendas.papel || 0,
        vendas.metal || 0,
        vendas.plastico || 0,
        vendas.vidro || 0,
        vendas.madeira || 0
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      barThickness: 15, 
    },
  ],
});

const doughnutData = (vendas) => ({
  labels: ['Papel', 'Metal', 'Plástico', 'Vidro', 'Madeira'],
  datasets: [
    {
      label: 'Distribuição de Vendas',
      data: [
        vendas.papel || 0,
        vendas.metal || 0,
        vendas.plastico || 0,
        vendas.vidro || 0,
        vendas.madeira || 0
      ],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
});

export const Dashboard = ({ vendas }) => {
  return (
    <div className="p-6 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      <div className="mb-8 flex justify-between">
        <div className="w-full mr-4">
          <h2 className="text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">
            Vendas por Categoria
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Bar 
              data={barData(vendas)} 
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                },
                scales: {
                  x: {
                    ticks: { display: true }, 
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }} 
            />
          </div>
        </div>

        <div className="w-full ml-4">
          <h2 className="text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">
            Distribuição das Vendas
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <Doughnut 
              data={doughnutData(vendas)} 
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                },
                cutout: '70%', 
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
