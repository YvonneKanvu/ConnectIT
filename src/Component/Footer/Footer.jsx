function Footer() {
  return (
    <div className="flex bg-blue-300  h-32 p-4 text-black gap-20 mt-20">
      <div className="accueil">
        <p>Accueil</p>
        <p>Accessibilité</p>
        <div className="flex m-10">
          <img
            src="public\Image\logo correction.png"
            alt=""
            width="30"
            height="20"
          />
          <img
            src="public\Image\logo correction.png"
            alt=""
            width="30"
            height="20"
          />
          <img
            src="public\Image\logo correction.png"
            alt=""
            width="30"
            height="20"
          />
        </div>
      </div>
      <div className="flex gap-20">
        <div className="justify-center ">
          <p>confiance,surete et sécurité</p>
          <p>Parametres de cookies</p>
        </div>
        <div className=" justify-end">
          <p>Condition d'utilisation et politique de confidentialité</p>
          <p>Solution rapide</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
