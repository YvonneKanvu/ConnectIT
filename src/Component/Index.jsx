// import ReactDom from "react-dom/client";
// import { RouteurProvider,createBrowserRouter } from "react-router-dom";
// import Layout from "./component/Layout";
// import Accueil from "./Pages/Accueil";
// import PagePrestataire from "../Page/PagePrestataire";
// import PageUtilisateur from "../Page/PageUtilisateur";
// import CreationCompte from "../Page/CreationCompte";

// const router = createBrowserRouter([
//         {
//             path:"/",
//             element:<Layout/>,
//             children:[
//                 {
//                     path:"/",
//                     element:<Accueil/>,
//                 },
//                 {
//                     path:"/CreationCompte",
//                     element:<CreationCompte/>,
//                 },
//                 {
//                     path:"/:users",
//                     element:<PageUtilisateur/>,
//                 },
//             ],
//         },
// ]);
// ReactDom.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <RouteurProvider router = {router}/>
//     </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/Layout';
import Accueil from './Pages/Accueil';
import PagePrestataire from './Pages/PagePrestataire';
import PageUtilisateur from './Pages/PageUtilisateur';
import CreationCompte from './Pages/CreationCompte';

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