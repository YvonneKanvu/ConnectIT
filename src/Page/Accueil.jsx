import AvisClients from "../Component/AvisClient/AvisClient";
import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import ImagePrestataire from "../Component/ImagePrestataire/ImagePrestataire";
import NavBar from "../Component/NavBar/NavBar";
import Secteur from "../Component/Secteur/Secteur";
function Accueil() {
  return (
    <div className="accueil w-[100%]">
       <NavBar />
       <div className="mt-12">
       <HeroSection />  
      <Secteur />
      <ImagePrestataire />
      <AvisClients/> 
       </div>
      <Footer />
    </div>
  );
}

export default Accueil;
