import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import About from '../Layout/About/About';

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
                path: '/about',
                element: <About/>
            }
        ]
    }
]);

export default router;