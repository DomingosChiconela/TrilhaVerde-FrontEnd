import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Notifications = () => {
    const location = useLocation();
    const product = location.state?.product;

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notificationSent, setNotificationSent] = useState(false);
    const [requestAccepted, setRequestAccepted] = useState(false);

    const handleNotify = async () => {
        setLoading(true);

        try {
            // Simulação de chamada para um backend para enviar notificação
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
                setNotificationSent(true);
                alert('Notificação enviada com sucesso!');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleAcceptRequest = () => {
        setRequestAccepted(true);
    };

    if (!product) {
        return <p>Produto não encontrado.</p>;
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
                    disabled={loading || notificationSent}
                >
                    {loading ? 'Enviando...' : 'Enviar Notificação'}
                </button>
                {notificationSent && !requestAccepted && (
                    <div className="mt-4 p-2 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                        Notificação enviada com sucesso!
                        <button
                            onClick={handleAcceptRequest}
                            className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        >
                            Aceitar Requisição
                        </button>
                    </div>
                )}
                {requestAccepted && (
                    <div className="mt-4 p-2 bg-blue-100 border border-blue-300 text-blue-700 rounded-lg">
                        Requisição aceita com sucesso!
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Notificações Enviadas</h2>
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
