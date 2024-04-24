import AvisClients from "../Component/AvisClient/AvisClient";
import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import ImagePrestataire from "../Component/ImagePrestataire/ImagePrestataire";
import NavBar from "../Component/NavBar/NavBar";
import Secteur from "../Component/Secteur/Secteur";




function Accueil() {
  return (
    <div className="w-full h-full">
       <div className="baniere">  
       <NavBar />
        <HeroSection />
      </div>  
      <Secteur />
      <ImagePrestataire />
      <AvisClients/>
      <Footer />
      <p>copy rith</p>
    </div>
  );
}

export default Accueil;
