
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Notifications = () => {
    const location = useLocation();
    const product = location.state?.product;

    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleNotify = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/notify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    seller: 'Vendedor',  
                    product: product.name,
                }),
            });

            if (response.ok) {
                setNotifications([...notifications, `Notificação enviada para ${product.name}`]);
                alert(`Notificação enviada para ${product.name}`);
            } else {
                setError('Erro ao enviar notificação.');
            }

            const whatsappUrl = `https://wa.me/5511912345678?text=Olá, estou interessado no seu ${product.name}.`; 
            window.open(whatsappUrl, '_blank');
        } catch (err) {
            setError('Erro ao enviar notificação.');
        } finally {
            setLoading(false);
        }
    };

    if (!product) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Notificações de Postagens</h1>
            <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 text-center">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <p className="text-gray-500 mb-2">Peso: {product.weight} kg</p>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-500 mb-2">Localização: {product.location}</p>
                <p className="text-lg font-bold">{product.price}</p>
                <button
                    onClick={handleNotify}
                    className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : <><FaWhatsapp className="mr-2" /></>}
                </button>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Notificações Enviadas</h2>
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <ul className="list-disc pl-5 space-y-2">
                    {notifications.map((notification, index) => (
                        <li key={index} className="text-gray-800">{notification}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
