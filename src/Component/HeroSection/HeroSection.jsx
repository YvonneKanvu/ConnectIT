import React, { useState } from "react";
import ConnectItForm from "../NavBar/ConnectItForm";
import LoginConnectIt from "../NavBar/LoginConnectIt";


function HeroSection({ showForm, setShowForm, showLoginForm, setShowLoginForm  }) {
  // const [showForm, setShowForm] = useState(false);
  // const [showLoginForm, setShowLoginForm] = useState(false);
  const handleCreateAccountClick = () => {
    setShowForm(!showForm);
    // setShowLoginForm(false);
  };
  const handleLoginAccountClic = () => {
    setShowLoginForm(!showLoginForm);
    //  setShowLoginForm(true); 
    // setShowForm(false);
  }
  const backgroundStyle = showForm ? {} : { backgroundImage: "url('./../public/Image/connect IT bg.jpg')" };
  return (
    <div
      className="h-15 w-full left-0 p-10 flex flex-col justify-center items-center"
      style={backgroundStyle}
    >
    {showForm ? null : (
      showLoginForm ? null : 
      <div className="text-3xl mb-12 text-white  ">
        <p>
          Bienvenu sur une plate de mise en relation et de localisation avec des
          prestataires informatiques
        </p>
      </div>
            )}
      <div className="flex gap-10 mb-2  justify-center">
      {showForm ? (
       showLoginForm ? (
          <LoginConnectIt onSubmitForm={() => setShowLoginForm(false)}/>
       
        ) : (

          // <LoginConnectIt/>

        <ConnectItForm onSubmitForm={() => setShowForm(false)} />
          // <ConnectItForm />
        )
        ) :(
        <button type="submit" 
        onClick={handleCreateAccountClick}
        className="text-xl  h-10 w-40 bg-white rounded-md">
        Créer un compte
        </button>
        )};
      
              {showForm ? null : (
              showLoginForm ? null : 
        <button type="submit" 
        onClick={handleLoginAccountClic}
        className="text-xl  h-10 w-40  bg-white rounded-md">
        Se connecter
        </button>
              )}
            
      </div>
    </div>
  );
}

export default HeroSection;
