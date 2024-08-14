
import { createBrowserRouter } from 'react-router-dom';
import { Singup } from './Pages/singup';
import { Login } from './Pages/login';
import { ResetPassword } from './Pages/reset';
import { ForgotPassword } from './Pages/forget';



export const route = createBrowserRouter([
   
    
    {
    path: "/signup",
    element: <Singup/>
    },
    {
    path: "/login",
    element: <Login/>
    },
    {
    path: "/reset",
    element: <ResetPassword/>
    },
    {
    path: "/forget",
    element: <ForgotPassword/>
    },
   


   
   
   ]);