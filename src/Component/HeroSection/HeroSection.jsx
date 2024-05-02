function HeroSection() {
  return (
    <div
      className=" h-15 m-1 w-[100%] left-0  p-10"
      style={{ backgroundImage: "url('./../public/Image/connect IT bg.jpg')" }}
    >
      {/* // "baniere"> */}
      <div className="text-3xl mb-12 text-white  ">
        <p>
          Bienvenu sur une plate de mise en relation et de localisation avec des
          prestataires informatiques
        </p>
      </div>
      <div className="flex gap-10 mb-2  justify-center">
        <button className="text-xl  h-10 w-40 bg-white rounded-md">
          Prestataire
        </button>
        <button className="text-xl  h-10 w-40  bg-white rounded-md">
          Utilisateur
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
