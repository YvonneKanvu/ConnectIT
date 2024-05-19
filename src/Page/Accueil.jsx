import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import AvisClients from "../Component/AvisClient/AvisClient";
import HeroSection from "../Component/HeroSection/HeroSection";
import ImagePrestataire from "../Component/ImagePrestataire/ImagePrestataire";
import Secteur from "../Component/Secteur/Secteur";
function Accueil() {
  return (
    <div className="accueil w-[100%]">
       <div className="mt-12">
       <HeroSection />  
      <Secteur />
      <ImagePrestataire />
      <AvisClients/> 
       </div>
    </div>
  );
}

export default Accueil;
