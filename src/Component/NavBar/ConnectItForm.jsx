// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function ConnectItForm() {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(true);
//   const { register, formState: { errors }, handleSubmit } = useForm();


//   const [formData, setFormData] = useState({
//     prenom: "",
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
    
//   });


//   // const onSubmitForm = async (data) => {
//   //   try {
//   //   const response = await axios.post('https://localhost:3003/routeAuthentification/user/create', data);
//   //     console.log(response.data);
//   //   alert(`${data.name} tu viens de créer ton compte avec succès `);

//   //   // Réinitialisation des champs après la soumission du formulaire
//   //   setFormData({
//   //     firstname: "",
//   //     name: "",
//   //     phone: "",
//   //     email: "",
//   //     // username: "",
//   //     motDePasse: "",
//   //     // agree: false,
//   //   });

//     // Cacher le formulaire après la soumission
//     // location.reload()
//     // } catch (error) {
//       //   console.error('Erreur lors de la création du compte:', error);
//       //   alert('Une erreur est survenue lors de la création de votre compte. Veuillez réessayer.');
//       // }
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//      setFormData({
//        ...formData,
//         [name]: value,
//       });
//    };
    
//     const onSubmitForm = async (data) => {
//       console.log(data);
//       try {
//          const response = await axios.post('http://localhost:3003/routeAuthentification/user/create', data);
//         console.log('Utilisateur enregistré avec succès', response.data);
//         setShowForm(false);
//         navigate("/");
//       } 
//       catch (error) {
//         // if (error.response) {
//         //   console.error('Erreur lors de la création du compte:', error.response.data);
//         // } else {
//         //   console.error('Erreur de connexion au serveur:', error.message);
//         // }
//         // console.log(error);
//         console.error(error.response?.data || error.message);
//     alert('Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.'); // Message d'erreur informatif
//       }
//   };
//   return (
//     <div className={` bg-white ${showForm ?  "w-[100%] p-10 m-12 flex justify-between" : ""}`}>
//       <div className=" bg-blue-500 w-80 m-10 h-100 rounded-lg mb-0 mt-0 p-2">
//         <p className="text-left text-xl font-medium  text-white mb-20">
//           Connect'IT
//         </p>
//         <p className="text-white text-3xl font-medium mb-4">
//           Lorem ipsum dolor sit amet consectetur elit.
//         </p>
//         <p className="text-white font-light">
//           Lorem ipsum dolor sit, amet consectetur isicing elit. Rem dolor et sit
//           quaerat debi consectetur sed sunt cupiditate{" "}
//         </p>
//       </div>

//       {showForm ? (
//         <form
//           onSubmit={handleSubmit(onSubmitForm)}
//           className="mx-auto max-w-lg"
//         >
//           <div className="flex flex-col ">
//             <div className=" text-left text-xl text-black  font-medium mb-3">
//               <p className="text-red">Créer votre compte</p>
//             </div>
//             <div className="flex flex-col text-black  mb-2 rounded-lg">
//               <label htmlFor="firstname" className="text-left">
//                 Prenom
//               </label>
//               <input
//                 name="firstname"
//                 type="text"
//                 {...register("firstname", {
//                   required: true,
//                   pattern: /^[A-Za-z]+$/i,
//                 })}
//                 className="p-2 border border-blue-500 rounded-lg text-black"
//                 value={formData.firstname}
//                 onChange={(e) =>
//                   setFormData({ ...formData, firstname: e.target.value })
//                 }
//               />
//             </div>
//             {errors.firstname && (
//               <span style={{ color: "red" }}>Ce champ est obligatoire</span>
//             )}
//           </div>
//           <div className="flex flex-col">
//             <div className="flex flex-col text-black rounded-lg  mb-2">
//               <label htmlFor="name" className="text-left">
//                 Nom
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 {...register("name", {
//                   required: true,
//                   pattern: /^[A-Za-z]+$/i,
//                 })}
//                 className="p-2 border border-blue-500 rounded-lg"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </div>
//             {errors.name && (
//               <span style={{ color: "red" }}>Ce champ est obligatoire</span>
//             )}
//           </div>

//           <div className="flex flex-col">
//             <div className="flex flex-col text-black rounded-lg  mb-2 ">
//               <label htmlFor="phone" className="text-left">
//                 Telephone
//               </label>
//               <input
//                 name="phone"
//                 type="text"
//                 {...register("phone", {
//                   required: true,
//                   pattern: /[0-9]{10}$/i,
//                 })}
//                 className="p-2 border border-blue-500 rounded-lg"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex flex-col text-black round-lg  mb-2 ">
//               <label htmlFor="email" className="text-left">
//                 Email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 {...register("email", {
//                   required: true,
//                   pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/i,
//                 })}
//                 className="p-2 border border-blue-500 rounded-lg"
//               />
//             </div>
//             {errors.email && (
//               <span style={{ color: "blue" }}>invalid email</span>
//             )}
//           </div>
//           {/* <div className="flex flex-col">
//             <div className="flex flex-col text-black rounded-lg mb-2">
//               <label htmlFor="username" className="text-left">
//                 Nom d'utilisateur
//               </label>
//               <input
//                 name="username"
//                 type="text"
//                 {...register("username", {
//                   required: true,
//                   minLength: 6,
//                 })}
//                 className="p-2 border border-blue-500 rounded-lg text-black"
//                 value={formData.username}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value })
//                 }
//               />
//             </div>
//             {errors.username && (
//               <span style={{ color: "red" }}>
//                 Le nom d'utilisateur doit avoir au moins 6 caractères
//               </span>
//             )}
//           </div> */}
//           <div className="flex flex-col">
//             <div className="flex flex-col text-black rounded-lg  mb-2">
//               <label htmlFor="password" className="text-left">
//                 Mot de passe
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 {...register("password", {
//                   required: true,
//                   minLength: 8,
//                 })}
//                 className="p-2 border border-blue-500 text-black rounded-lg"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//             </div>
//             {errors.password && (
//               <span style={{ color: "red" }}>
//                 Le mot de passe doit avoir au moins 8 caractères
//               </span>
//             )}
//           </div>

//           {/* <div className="flex flex-col">
//             <div className="flex items-center text-black rounded-lg mb-2">
//               <input
//                 type="checkbox"
//                 id="agree"
//                 {...register("agree", { required: true })}
//                 className="mr-2"
//               />
//               <label htmlFor="agree">
//                 J'accepte les conditions d'utilisation
//               </label>
//             </div>
//             {errors.agree && (
//             <span style={{ color: "red" }}>
//                 Vous devez accepter les conditions d'utilisation
//               </span>
//             )}
//           </div> */}
//           <div className="">
//             <button
//               className="cursor-pointer rounded-lg bg-blue-500 text-white p-2  hover: opacity-75 w-[225px]  animate "
//               type="submit" 
//             >
//               Créer un compte
//             </button>
//           </div>
//         </form>
//       ) : (
//         <button onClick={() => setShowForm(true)} >Créer un compte</button>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ConnectItForm() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(true);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    firstname: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3003/routeAuthentification/user/create', data);
      console.log('Utilisateur enregistré avec succès', response.data);
      setShowForm(false);
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.');
    }
  };

  return (
    <div className={`bg-white ${showForm ? "w-[100%] p-10 m-12 flex justify-between" : ""}`}>
      <div className="bg-blue-500 w-80 m-10 h-100 rounded-lg mb-0 mt-0 p-2">
        <p className="text-left text-xl font-medium text-white mb-20">
          Connect'IT
        </p>
        <p className="text-white text-3xl font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur elit.
        </p>
        <p className="text-white font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolor et sit quaerat debitis consectetur sed sunt cupiditate.
        </p>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit(onSubmitForm)} className="mx-auto max-w-lg">
          <div className="flex flex-col">
            <div className="text-left text-xl text-black font-medium mb-3">
              <p className="text-red">Créer votre compte</p>
            </div>
            <div className="flex flex-col text-black mb-2 rounded-lg">
              <label htmlFor="prenom" className="text-left">Prénom</label>
              <input
                name="prenom"
                type="text"
                {...register("prenom", { required: "Ce champ est obligatoire", pattern: { value: /^[A-Za-z]+$/i, message: "Le prénom ne doit contenir que des lettres" } })}
                className="p-2 border border-blue-500 rounded-lg text-black"
                value={formData.prenom}
                onChange={handleChange}
              />
              {errors.prenom && <span style={{ color: "red" }}>{errors.prenom.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg mb-2">
              <label htmlFor="nom" className="text-left">Nom</label>
              <input
                name="nom"
                type="text"
                {...register("nom", { required: "Ce champ est obligatoire", pattern: { value: /^[A-Za-z]+$/i, message: "Le nom ne doit contenir que des lettres" } })}
                className="p-2 border border-blue-500 rounded-lg"
                value={formData.nom}
                onChange={handleChange}
              />
              {errors.nom && <span style={{ color: "red" }}>{errors.nom.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg mb-2">
              <label htmlFor="telephone" className="text-left">Téléphone</label>
              <input
                name="telephone"
                type="text"
                {...register("telephone", { required: "Ce champ est obligatoire", pattern: { value: /[0-9]{10}$/i, message: "Le numéro de téléphone doit contenir 10 chiffres" } })}
                className="p-2 border border-blue-500 rounded-lg"
                value={formData.telephone}
                onChange={handleChange}
              />
              {errors.telephone && <span style={{ color: "red" }}>{errors.telephone.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg mb-2">
              <label htmlFor="email" className="text-left">Email</label>
              <input
                name="email"
                type="email"
                {...register("email", { required: "Ce champ est obligatoire", pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/i, message: "Email invalide" } })}
                className="p-2 border border-blue-500 rounded-lg"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg mb-2">
              <label htmlFor="password" className="text-left">Mot de passe</label>
              <input
                name="password"
                type="password"
                {...register("password", { required: "Ce champ est obligatoire", minLength: { value: 8, message: "Le mot de passe doit avoir au moins 8 caractères" } })}
                className="p-2 border border-blue-500 text-black rounded-lg"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
            </div>
          </div>

          <div className="">
            <button className="cursor-pointer rounded-lg bg-blue-500 text-white p-2 hover:opacity-75 w-[225px] animate" type="submit">
              Créer un compte
            </button>
          </div>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Créer un compte</button>
      )}
    </div>
  );
}

export default ConnectItForm;
