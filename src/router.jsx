import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Pages/login';
import { ResetPassword } from './Pages/reset';
import { Signup } from './Pages/singup';
import { ForgotPassword } from './Pages/forget';
import AdminPage from './Pages/admin';
import NotFound from './Pages/notfound';
import Dashboard from './components/dashbord';
import Feedbacks from './components/feedbacks';
import Users from './components/users';
import Settings from './components/setings';
import { Home } from './Pages/home';
import Perfil from './components/perfil/perfil';
import Notifications from './components/Notifications';
import EducacaoSensibilizacao from './Pages/educacaoSensibilizacao';
import AnuncioHistorico from './Pages/AnuncioHistorico';
import UserAds from './Pages/anucios';
import CreateCart from './Pages/createad';
import Residuos from './Pages/residuos';



export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/create-ad",
        element: <CreateCart />
    },
    
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/reset",
        element: <ResetPassword />
    },
    {
        path: "/forget",
        element: <ForgotPassword />
    },
    {
        path: "/educacao-sensibilizacao",
        element: <EducacaoSensibilizacao />
    },
    {
        path: "/anuncio-historico",
        element: <AnuncioHistorico />
    },
    {
        path: "/user-ads",
        element: <UserAds />
    },
   
    {
        path: "/admin",
        element: <AdminPage />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "users",
                element: <Users />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "feedbacks",
                element: <Feedbacks />
            },
            {
                path: "residuos",
                element: <Residuos/> 
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/perfil",
        element: <Perfil />
    },
    {
        path: "/notifications",
        element: <Notifications />
    },
]);
