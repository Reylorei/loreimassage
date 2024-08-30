
// src/components/LanguageSelector.js
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Ajusta la ruta según tu estructura de directorios

import flagSpain from '../statics/Banderas/flagSpain.png';
import flagBritish from '../statics/Banderas//flagBritish.png';
import flagItaly from '../statics/Banderas//flagItali.png';
import flagIceland from '../statics/Banderas//flagIceland.png';
import flagGermany from '../statics/Banderas//flagAleman.png';



const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); // Desestructura también 'language' para acceder al idioma actual
  const languages = [
    { code: 'es', image: flagSpain },
    { code: 'en', image: flagBritish },
    { code: 'it', image: flagItaly },
    { code: 'is', image: flagIceland },
    { code: 'de', image: flagGermany },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    setIsOpen(false); // Cierra el menú después de seleccionar un idioma
  };

  const dropdownRef = useRef(null); // Crear la referencia

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el dropdown si el clic fue fuera
      }
    };

    // Agrega el listener cuando el dropdown está abierto
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Limpieza del evento
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Solo se ejecutará cuando el valor de isOpen cambie

  const currentLanguageObject = languages.find(lang => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="p-2 bg-gray-200 rounded">
        <img src={currentLanguageObject?.image} alt="Current Language" className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className={`${isOpen ? "z-50" : "z-0"} absolute top-full left-0 bg-white shadow-md mt-2 rounded`}>
          {languages.map((language) => (
            <div
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={language.image} alt={language.code} className="w-6 h-6 mr-2" /> {/* Muestra la imagen de la bandera */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
