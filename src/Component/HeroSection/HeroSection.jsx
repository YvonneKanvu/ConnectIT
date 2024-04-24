function HeroSection() {
  return (
    <div className="hero">
      <div className="text-5xl font-bold">
        <p>Bienvenu sur une plate de mise en relation
            et de localisation avec des prestataires informatiques
        </p>
      </div>
      <div className="flex mt-5 gap-20 p-10 justify-center">
        <button className="text-xl font-bold h-19 w-40 bg-white rounded-md">Prestataire</button>
        <button className="text-xl font-bold h-18 w-40  bg-white rounded-md">Utilisateur</button>
      </div>
    </div>
  );
}

export default HeroSection;
