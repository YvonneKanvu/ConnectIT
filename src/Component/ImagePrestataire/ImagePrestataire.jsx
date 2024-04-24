function ImagePrestataire() {
  return (
    <div className="w-full ">
      <p className="text-xl font-bold mt-20">Nos Prestataires</p>
      <div className="flex gap-4">
        <div className="developpeur">
          <img src="public\Image\Olive.jpg" alt="" />
          <p>Téchnicien Materiel Informatique</p>
        </div>
        <div className="developpeur">
          <img src="public\Image\Jemuel.jpg" alt="" />
          <p>Créatrice UI et UX</p>
        </div>
        <div className="developpeur">
          <img src="public\Image\Bernard.jpg" alt="" />
          <p>Ingénieur Téchnicien Réseau</p>
        </div>
        <div className="developpeur">
          <img src="public\Image\Isabelle.jpg" alt="" />
          <p>Developpeuse FullStack</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePrestataire;
