import ConnectItForm from "../NavBar/ConnectItForm";
import React, { useState } from "react";
function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  const handleCreateAccountClick = () => {
    setShowForm(!showForm);
  };
  const backgroundStyle = showForm ? {} : { backgroundImage: "url('./../public/Image/connect IT bg.jpg')" };
  return (
    // <div
    // className=" h-15 w-[100%] left-0  p-10 "
    // style={{ backgroundImage: "url('./../public/Image/connect IT bg.jpg')" }}
    // >
    <div
      className="h-15 w-full left-0 p-10 flex flex-col justify-center items-center"
      style={backgroundStyle}
    >
    {showForm ? null : (

      <div className="text-3xl mb-12 text-white  ">
        <p>
          Bienvenu sur une plate de mise en relation et de localisation avec des
          prestataires informatiques
        </p>
      </div>
            )}
      <div className="flex gap-10 mb-2  justify-center">
      {showForm ? (
          <ConnectItForm />
        ) :(
        <button type="submit" 
        onClick={handleCreateAccountClick}
        className="text-xl  h-10 w-40 bg-white rounded-md">
        Créer un compte
        </button>
        )}
              {showForm ? null : (
        <button type="submit" className="text-xl  h-10 w-40  bg-white rounded-md">
        Se connecter
        </button>
              )}
      </div>
    </div>
  );
}

export default HeroSection;
