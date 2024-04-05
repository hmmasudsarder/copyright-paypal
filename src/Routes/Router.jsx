import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import About from '../Layout/About/About';
import Seller from '../Components/Seller';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/deshboard',
                element: <About/>
            },
            {
                path: '/seller',
                element: <Seller/>
            }
        ]
    }
]);

export default router;