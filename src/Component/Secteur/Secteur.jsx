function Secteur() {
  return (
    <div className=" w-full">
      <p className="text-2xl font-bold  mt-20">Tirez parti des prestataires</p>
      <p>
        Nous sommes le réseau le plus talentieux de le RDC en matière de
        conception et de technologie, pret à relever à vos défis les plus
        importants
      </p>
      <div className=" w-full flex ">
        <div className="w-full">
          <div className=" bg-blue-300 ">
            <p className="text-xl font-bold">Développeurs</p>
            <p className="font-bold">
              Ingénieurs Logiciels,Codeurs possedant une expertise dans
              plusieurs technologies
            </p>
          </div>
          <div className=" bg-gray-200">
            <p className="text-xl font-bold	">Créateurs UI et UX</p>
            <p className="font-bold">
              Concepteurs experts en UI et UX visuels et interactions, ainsi
              qu'un large éventail d'illustrateurs, d'animateurs et bien plus
              encore
            </p>
          </div>
        </div>
        <div className=" w-full">
          <div className=" bg-gray-200">
            <p className="text-xl font-bold	">Ingénieurs Technicien Réseau</p>
            <p className="font-bold">
              Spécialiste de réseau et de cyber sécurité doté d'une solide
              connaissance des protocoles et de téchnologies réseau
            </p>
          </div>
          <div className=" bg-blue-500">
            <p className="text-xl font-bold	">
              Téchnicien Matériel Informatique
            </p>
            <p className="font-bold">
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
