import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PageUtilisateur() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('jwt');
            if (!token) {
                console.error('Token JWT non trouvé');
                setError('Token JWT non trouvé');
                setLoading(false);
                return;
            }
            console.log('Token JWT:', token);

            try {
                const response = await axios.get("http://localhost:3003/user/userPage", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("Réponse de l'API:", response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur", error);
                setError("Erreur lors de la récupération des données utilisateur");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Chargement des données...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    if (!userData) {
        return <div>Aucune donnée utilisateur disponible</div>;
    }

    return (                    
        <div className='w-[100%] mt-10'>
            <h1>Bienvenue, {userData.prenom} {userData.nom}</h1>
            <p>email: {userData.email}</p>
            <p>téléphone: {userData.telephone}</p>
            {/* Ajout  de champ*/}
        </div>
    );
}

export default PageUtilisateur;