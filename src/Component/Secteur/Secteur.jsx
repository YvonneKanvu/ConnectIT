function Secteur() {
  return (
    <div>
      <p className="text-2xl mt-10">Tirez parti des prestataires</p>
      <p>
        Nous sommes le réseau le plus talentieux de le RDC en matière de
        conception et de technologie, pret à relever à vos défis les plus
        importants
      </p>
      <div className=" w-full flex mt-5">
        <div className="w-full">
          <div className=" bg-blue-300 p-5">
            <p className="text-xl text-white mb-2 ">Développeurs</p>
            <p className=" text-white">
              Ingénieurs Logiciels,Codeurs possedant <br></br>une expertise dans
              plusieurs technologies
            </p>
          </div>
          <div className=" bg-gray-200 p-5">
            <p className="text-xl	mb-2 ">Créateurs UI et UX</p>
            <p className="">
              Concepteurs experts en UI et UX visuels et interactions, ainsi
              qu'un large éventail d'illustrateurs, d'animateurs et bien plus
              encore
            </p>
          </div>
        </div>
        <div className=" w-full">
          <div className=" bg-gray-200 p-5">
            <p className="text-xl mb-2	">Ingénieurs Technicien Réseau</p>
            <p className="">
              Spécialiste de réseau et de cyber sécurité doté d'une solide
              connaissance des protocoles et de téchnologies réseau
            </p>
          </div>
          <div className=" bg-blue-300 p-5">
            <p className="text-xl text-white mb-2 ">
              Téchnicien Matériel Informatique
            </p>
            <p className=" text-white">
              Habile en diagnostic et résolution de problèmes, capable
              d'identifier rapidement et efficacement les causes de panne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secteur;
