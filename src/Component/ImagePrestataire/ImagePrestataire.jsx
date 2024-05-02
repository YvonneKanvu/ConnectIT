import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

function ImagePrestataire() {
  return (
    <div className=" mt-10">
      <p className="text-xl mt-2">Nos Prestataires</p>
      <div className=" imagePrestataire flex gap-20 justify-between ">
        <div className="w-40 ">
          <img
            src="public\Image\Olive-removebg-preview.png"
            alt=""
            className="mr-4"
          />
          <p>Téchnicien Materiel Informatique</p>
        </div>
        <div className="w-40 ">
          <img
            src="public\Image\Jemuel-removebg-preview.png"
            alt=""
            className="mr-4"
          />
          <p>Créatrice UI et UX</p>
        </div>

        <div className="w-40 ">
          <img
            src="public\Image\Bernard-removebg-preview.png"
            alt=""
            className="mr-4"
          />
          <p>Ingénieur Téchnicien Réseau</p>
        </div>

        <div className="w-40">
          <img
            src="public\Image\IMG-20240408-WA0157-removebg-preview.png"
            alt=""
            className="mr-4"
          />
          <p>Developpeuse FullStack</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePrestataire;
