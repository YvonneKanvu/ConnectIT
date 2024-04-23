import { Component } from "react";
import Logo from "./Logo";
import ListPrestataire from "./ListPrestataire";
import Message from "./Message";
import Notification from "./Notification";
function NavBar() {
    return ( 
        <div className="navBar">
         <Logo/>
         <ListPrestataire/>
         <Message/>
         <Notification/>
        </div>
     );
}

export default NavBar;