import { Component } from "react";
import Logo from "./Logo";
import ListPrestataire from "./ListPrestataire";
import Message from "./Message";
import Notification from "./Notification";
function NavBar() {
  return (
    <div className=" flex fixed top-0 z-1 w-full bg-blue-500 left-0 h-12 justify-between items-center  border-b border-black">
      <div>
        <Logo />
      </div>
      <div className="flex gap-5" >
        <ListPrestataire />
        <Message />
        <Notification />
      </div>
    </div>
  );
}

export default NavBar;
