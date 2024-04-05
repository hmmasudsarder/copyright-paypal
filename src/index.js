import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className=''>
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  </div>
);

