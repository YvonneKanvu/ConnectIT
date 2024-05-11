import React, { useState } from "react";
import { useForm } from "react-hook-form";


function LoginConnectIt() {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const [formData, setFormData] = useState({
        username: "",
        motDePasse: "",
      });
    
    //   const [showLoginForm, setShowLoginForm] = useState(true);
    
      const onSubmitForm = (data) => {
        console.log(data);
        alert(`${data.username} tu viens de te connecter avec succès `);
    
        // Réinitialisation des champs après la soumission du formulaire
        setFormData({
          username: "",
          motDePasse: "",
        });
    
        // Cacher le formulaire après la soumission
           setShowLoginForm(false);
        location.reload()
    
      };
    return ( 
<div className=" bg-white {showForm ?  w-[100%] p-10 m-12 flex justify-between">
      <div className=" bg-blue-500 w-80 m-10 h-100 rounded-lg mb-0 mt-0 p-2">
        <p className="text-left text-xl font-medium  text-white mb-20">Connect'IT</p>
        <p className="text-white text-3xl font-medium mb-4">Lorem ipsum dolor sit amet consectetur elit.</p>
        <p className="text-white font-light">Lorem ipsum dolor sit, amet consectetur isicing elit. Rem dolor et sit quaerat debi consectetur sed sunt cupiditate </p>
      </div>

      {setShowLoginForm ? (
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="mx-auto max-w-lg"
        >
          <div className="flex flex-col ">
           <div className=" text-left text-xl text-black  font-medium mb-3">
            <p text-red>Se connecter à votre compte</p>
            </div>      
            </div>
          
          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg mb-2">
              <label htmlFor="username" className="text-left">
                Nom d'utilisateur
              </label>
              <input
                name="username"
                type="text"
                {...register("username", {
                  required: true,
                  minLength: 6,
                })}
                className="p-2 border border-blue-500 rounded-lg text-black"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            {errors.username && (
              <span style={{ color: "red" }}>
                Le nom d'utilisateur doit avoir au moins 6 caractères
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col text-black rounded-lg  mb-2">
              <label htmlFor="password" className="text-left">
                Mot de passe
              </label>
              <input
                name="password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                className="p-2 border border-blue-500 text-black rounded-lg"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            {errors.password && (
              <span style={{ color: "red" }}>
                Le mot de passe doit avoir au moins 8 caractères
              </span>
            )}
          </div>

          
          <div className="flex gap-5 justify-between">
            <button
              className="cursor-pointer rounded-lg bg-blue-500 text-white p-2  hover: opacity-75 w-[225px]  animate "
              type="submit"
            >
              Se connecter à votre compte
            </button>
            
          </div>
        </form>
      ) : (
        <button onClick={() => setShowLoginForm(true)}>Se connecter</button>
      )}
    </div>
  );
}

export default LoginConnectIt;