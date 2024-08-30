// LanguageSelectionPage.js
import React, { useState } from 'react'; // Importa useState
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelectionPage.css'; // Asegúrate de que la ruta sea correcta

// Importa las imágenes de las banderas
import flagES from '../../statics/Banderas/ESP.png';
import flagEN from '../../statics/Banderas/ENG.png';
import flagIT from '../../statics/Banderas/ITA.png';
import flagIS from '../../statics/Banderas/IS.png';
import flagDE from '../../statics/Banderas/ALE.png';

import flagESHover from '../../statics/Banderas/ESP-hover.png';
import flagENHover from '../../statics/Banderas/ENG-hover.png';
import flagITHover from '../../statics/Banderas/ITA-hover.png';
import flagISHover from '../../statics/Banderas/IS-hover.png';
import flagDEHover from '../../statics/Banderas/ALE-hover.png';


function LanguageSelectionPage() {
  let navigate = useNavigate();
  const { setLanguage } = useLanguage(); // Desestructura setLanguage desde el contexto

  const [showHoverES, setShowHoverES] = useState(false);
  const [showHoverEN, setShowHoverEN] = useState(false);
  const [showHoverIT, setShowHoverIT] = useState(false);
  const [showHoverDE, setShowHoverDE] = useState(false);
  const [showHoverIS, setShowHoverIS] = useState(false);
  
  const handleLanguageSelect = (language) => {
    setLanguage(language); // Actualiza el idioma utilizando el contexto
    navigate('/curriculum');
  };

  return (
    <div className="language-page flex flex-col items-center justify-center h-screen">      
      {/* Español */}
      <div
        onMouseEnter={() => setShowHoverES(true)}
        onMouseLeave={() => setShowHoverES(false)}
        onClick={() => handleLanguageSelect('es')}
        className="grid grid-cols-[auto_1fr] gap-4 items-center text-white mb-8 cursor-pointer transition duration-300 ease-in-out"
      >
        <img src={showHoverES ? flagESHover : flagES} alt="Español" className="w-auto h-20 rounded-full mr-2" />
      </div>
      
      {/* Inglés */}
      <div
        onMouseEnter={() => setShowHoverEN(true)}
        onMouseLeave={() => setShowHoverEN(false)}
        onClick={() => handleLanguageSelect('en')}
        className="grid grid-cols-[auto_1fr] gap-4 items-center text-white mb-8 cursor-pointer"
      >
        <img src={showHoverEN ? flagENHover : flagEN} alt="English" className="w-auto h-20 rounded-full mr-2" />
      </div>
      
      {/* Italiano */}
      <div
        onMouseEnter={() => setShowHoverIT(true)}
        onMouseLeave={() => setShowHoverIT(false)}
        onClick={() => handleLanguageSelect('it')}
        className="grid grid-cols-[auto_1fr] gap-4 items-center text-white mb-8 cursor-pointer"
      >
        <img src={showHoverIT ? flagITHover : flagIT} alt="Italiano" className="w-auto h-20 rounded-full mr-2" />
      </div>
      
      {/* Alemán */}
      <div
        onMouseEnter={() => setShowHoverDE(true)}
        onMouseLeave={() => setShowHoverDE(false)}
        onClick={() => handleLanguageSelect('de')}
        className="grid grid-cols-[auto_1fr] gap-4 items-center text-white mb-8 cursor-pointer"
      >
        <img src={showHoverDE ? flagDEHover : flagDE} alt="Deutsch" className="w-auto h-20 rounded-full mr-2" />
      </div>
      
      {/* Islandés */}
      <div
        onMouseEnter={() => setShowHoverIS(true)}
        onMouseLeave={() => setShowHoverIS(false)}
        onClick={() => handleLanguageSelect('is')}
        className="grid grid-cols-[auto_1fr] gap-4 items-center text-white mb-8 cursor-pointer"
      >
        <img src={showHoverIS ? flagISHover : flagIS} alt="Íslenska" className="w-auto h-20 rounded-full mr-2" />
      </div>
    </div>
  );
}

export default LanguageSelectionPage;
