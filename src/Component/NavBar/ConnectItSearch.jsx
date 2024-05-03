import React, { useState } from 'react';

const ConnectItSearch = ({ value, onChange }) => {
  // Utilisation de la valeur initiale fournie par les props pour l'état local
  const [searchValue, setSearchValue] = useState(value);

  // Gestion de la modification de la valeur du champ de recherche
  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange(newValue); // Appel de la fonction onChange passée en tant que prop avec la nouvelle valeur
  };

  return (
    <input
      type="text"
      className="px-2 py-1 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
      placeholder="Rechercher..."
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default ConnectItSearch;