import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import ImagePrestataire from "../Component/ImagePrestataire/ImagePrestataire";
import NavBar from "../Component/NavBar/NavBar";
import Secteur from "../Component/Secteur/Secteur";

function Accueil() {
  return (
    <div className="accueil">
      <NavBar />
      <HeroSection />
      <Secteur />
      <ImagePrestataire />
      <Footer />
    </div>
  );
}

export default Accueil;
