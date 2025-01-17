import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <div>login</div>
            },
            {
                path: 'signup',
                element: <div>sign up</div>
            }
        ]
    }
])

export default router;