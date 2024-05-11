import React, { useState } from 'react';
import AvisClients from "../Component/AvisClient/AvisClient";
import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import ImagePrestataire from "../Component/ImagePrestataire/ImagePrestataire";
import NavBar from "../Component/NavBar/NavBar";
import Secteur from "../Component/Secteur/Secteur";
function Accueil() {
   const [showForm, setShowForm] = useState(false);
   const [showLoginForm, setShowLoginForm] = useState(false);

  // const handleCreateAccountClick = () => {
  //   setShowForm(!showForm);
  // };
  return (
    <div className="accueil w-[100%]">
       <NavBar/>
       <div className="mt-12">
       <HeroSection showForm={showForm} setShowForm={setShowForm} showLoginForm={showLoginForm} setShowLoginForm={setShowLoginForm}/> 
      <Secteur />
      <ImagePrestataire />
      <AvisClients/> 
       </div>
      <Footer />
    </div>
  );
}

export default Accueil;
