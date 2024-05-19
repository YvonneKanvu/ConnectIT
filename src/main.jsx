import React from 'react';
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout.jsx';
import Accueil from './Page/Accueil.jsx'; 
import CreationCompte from './Page/CreationCompte.jsx';
import PageUtilisateur from './Page/PageUtilisateur.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Accueil /> },
      { path: '/CreationCompte', element: <CreationCompte /> },
      { path: '/:users', element: <PageUtilisateur /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

