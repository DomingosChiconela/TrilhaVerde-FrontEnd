
import { createBrowserRouter } from 'react-router-dom';
import { Login } from './Pages/login';
import { ResetPassword } from './Pages/reset';
import { Signup } from './Pages/singup';
import { ForgotPassword } from './Pages/forget';



export const route = createBrowserRouter([
   
    
    {
    path: "/signup",
    element: <Signup/>
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