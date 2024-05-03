import React, { useState } from 'react';
import Logo from "./Logo";
import Message from "./Message";
import Notification from "./Notification";
import ConnectItSearch from "./ConnectItSearch";

function NavBar() {
  const [searchValue, setSearchValue] = useState('');
  // Fonction pour gérer le changement de la valeur de recherche
  const handleSearchChange = (value) => {
    setSearchValue(value);
  }
  return (
    <div className=" flex fixed top-0 z-1 w-full bg-blue-500 left-0 h-12 justify-between items-center  border-b border-black">
      <div>
        <Logo />
      </div>
      <div className="flex gap-5" >
      <ConnectItSearch value={searchValue} onChange={handleSearchChange} />
        <Message />
        <Notification />
      </div>
    </div>
  );
}

export default NavBar;
