import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import Accueil from "../Page/Accueil";


function Layout() {
    return ( 
        <div className="w-[100%]">
            <NavBar/>
             <Outlet/> 
            <Footer/>
        </div>
     );
}

export default Layout;