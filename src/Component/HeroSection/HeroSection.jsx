import React, { useState } from "react";
import ConnectItForm from "../NavBar/ConnectItForm";
import { Link,useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleCreateAccountClick =  () => {
    setShowForm(true);
  };
  const handleAccountCreationSuccess = () => {
    navigate("/");
  };

  const handleLoginAccountClick = () => {
    setShowLoginForm(true);
  }
  const handleAccountLoginSuccess = () => {
    navigate("/");
  }


  const backgroundStyle = {
    backgroundImage: "url('/Image/connect IT bg.jpg')",
  };
  return (
    <div
      className="h-15 w-full left-0 p-10 flex flex-col justify-center items-center"
      // style={backgroundStyle}
      style={{ backgroundImage: "url('/images/connect-it-bg.jpg')" }}
    >
      <div className="text-3xl mb-12 text-white  ">
        <p>
          Bienvenu sur une plate de mise en relation et de localisation avec des
          prestataires informatiques
        </p>
      </div>
      <div className="flex gap-10 mb-2  justify-center">
        {!showForm && (
          <Link to="/CreationCompte">
            <button
              type="submit"
              onClick={handleCreateAccountClick}
              className="text-xl  h-10 w-40 bg-white rounded-md"
            >
              Créer un compte
            </button>
          </Link>
        )}
        
        {showForm && <ConnectItForm onSuccess={handleAccountCreationSuccess} />}
        {!showLoginForm && ( 
          <Link to="/Login">
          <button
            type="submit"
            onClick={handleLoginAccountClick}
            className="text-xl  h-10 w-40  bg-white rounded-md"
          >
            Se connecter
          </button>
          </Link>
        )}
         {showLoginForm && <ConnectItForm onSuccess={handleAccountLoginSuccess} />} 
      </div>
    </div>
  );
}

export default HeroSection;
