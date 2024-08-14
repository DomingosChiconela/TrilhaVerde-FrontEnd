import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, PointElement,
  BarElement, ArcElement,
  CategoryScale, LinearScale
);

const barData = (vendas) => ({
  labels: ['Papel', 'Metal', 'Plástico', 'Vidro'],
  datasets: [
    {
      label: 'Vendas por Categoria',
      data: [vendas.papel, vendas.metal, vendas.plastico, vendas.vidro],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
});

const pieData = (vendas) => ({
  labels: ['Papel', 'Metal', 'Plástico', 'Vidro'],
  datasets: [
    {
      label: 'Distribuição de Vendas',
      data: [vendas.papel, vendas.metal, vendas.plastico, vendas.vidro],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
});

const tableData = (vendas) => [
  { categoria: 'Papel', valor: vendas.papel },
  { categoria: 'Metal', valor: vendas.metal },
  { categoria: 'Plástico', valor: vendas.plastico },
  { categoria: 'Vidro', valor: vendas.vidro },
];

export const Dashboard = ({ vendas }) => {
  return (
    <div className="p-6 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">
          Vendas por Categoria
        </h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Bar data={barData(vendas)} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">
          Distribuição das Vendas
        </h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Pie data={pieData(vendas)} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;
