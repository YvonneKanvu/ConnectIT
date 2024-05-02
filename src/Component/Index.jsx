import ReactDom from "react-dom/client";
import { RouteurProvider,createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Accueil from "./Pages/Accueil";
import PagePrestataire from "../Page/PagePrestataire";
import PageUtilisateur from "../Page/PageUtilisateur";

const router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"/",
                    element:<Accueil/>,
                },
                {
                    path:"/provider",
                    element:<PagePrestataire/>,
                },
                {
                    path:"/:users",
                    element:<PageUtilisateur/>,
                },
            ],
        },
]);
ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouteurProvider router = {router}/>
    </React.StrictMode>
);