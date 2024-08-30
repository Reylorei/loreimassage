import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useLanguage } from '../../context/LanguageContext'; // Importa el hook useLanguage
import LanguageSelector from '../LanguageSelector'; // Importa el componente LanguageSelector

import oceanAudio from '../../statics/Song/Ocean.mp3'; // MÚSICA

import logo from '../../statics/head.png'; // Importa la imagen del logo
import image1 from '../../statics/estatic-1.png'; 
import image2 from '../../statics/estatic-2.png';
import image3 from '../../statics/estatic-3.png';

import aniImage1 from '../../statics/GIF-1-no-tr.gif';
import aniImage2 from '../../statics/GIF-2-no-tr.gif';
import aniImage3 from '../../statics/GIF-3-no-tr.gif';

import drawing1 from '../../statics/completo-1-transp.png';
import drawing2 from '../../statics/completo-2-transp.png';
import drawing3 from '../../statics/completo-3-transp.png';

import aniDrawing1 from '../../statics/completo-1-GIF.gif';
import aniDrawing2 from '../../statics/completo-2-GIF.gif';
import aniDrawing3 from '../../statics/completo-3-GIF.gif';

import imgOpcA1 from '../../statics/Curriculum/opcionA/foto-POLAROID1.png';
import imgOpcA2 from '../../statics/Curriculum/opcionA/foto-POLAROID2.png';
import imgOpcA3 from '../../statics/Curriculum/opcionA/foto-POLAROID3.png';
import imgOpcA4 from '../../statics/Curriculum/opcionA/foto-POLAROID4.png';
import imgOpcA5 from '../../statics/Curriculum/opcionA/foto-POLAROID5.png';
import imgOpcA6 from '../../statics/Curriculum/opcionA/foto-POLAROID6.png';

import imgOpcB1 from '../../statics/Curriculum/opcionB/foto-POLAROID1.png';
import imgOpcB2 from '../../statics/Curriculum/opcionB/foto-POLAROID2.png';
import imgOpcB3 from '../../statics/Curriculum/opcionB/foto-POLAROID3.png';
import imgOpcB4 from '../../statics/Curriculum/opcionB/foto-POLAROID4.png';
import imgOpcB5 from '../../statics/Curriculum/opcionB/foto-POLAROID5.png';
import imgOpcB6 from '../../statics/Curriculum/opcionB/foto-POLAROID6.png';

import imgOpcC1 from '../../statics/Curriculum/opcionC/foto-POLAROID1.png';
import imgOpcC2 from '../../statics/Curriculum/opcionC/foto-POLAROID2.png';
import imgOpcC3 from '../../statics/Curriculum/opcionC/foto-POLAROID3.png';
import imgOpcC4 from '../../statics/Curriculum/opcionC/foto-POLAROID4.png';
import imgOpcC5 from '../../statics/Curriculum/opcionC/foto-POLAROID5.png';
import imgOpcC6 from '../../statics/Curriculum/opcionC/foto-POLAROID6.png';

import './CurriculumPage.css'; // Importa tu archivo CSS
import ImageModal from './ImageModal';
import VideoPlayer from './VideoPlayer';
import ImageGrid from './ImageGrid';
import ChooseProducts from './ChooseProducts';
import ProductAndDescription from './ProductAndDescription';
import ProductAnimation from './ProductAnimation';

import descriptionsInCurriculumsPage from '../../constants/TextCurriculumPage'; // Importa el objeto con las descripciones



function CurriculumPage() {
    const [activeDrawing, setActiveDrawing] = useState(0); // Cambiado a 0 para representar ningún dibujo seleccionado
    const { language } = useLanguage();
    const [activeButtonText, setActiveButtonText] = useState('');
    const [activeImageGroup, setActiveImageGroup] = useState(null); // Nuevo estado para manejar el grupo de imágenes activo
    const [showVideo, setShowVideo] = useState(false); // Nuevo estado para controlar la visualización del video

    const images = [
      { static: image1, animated: aniImage1 },
      { static: image2, animated: aniImage2 },
      { static: image3, animated: aniImage3 },
    ];

    const imageGroups = {
      A: [imgOpcA1, imgOpcA2, imgOpcA3, imgOpcA4, imgOpcA5, imgOpcA6],
      B: [imgOpcB1, imgOpcB2, imgOpcB3, imgOpcB4, imgOpcB5, imgOpcB6],
      C: [imgOpcC1, imgOpcC2, imgOpcC3, imgOpcC4, imgOpcC5, imgOpcC6],
    };

    const videoUrls = {
      A: "https://player.vimeo.com/video/949518117?autoplay=1&amp;h=3ec1a3b1d8", // ID extraído para la opción A
      B: "https://player.vimeo.com/video/949277524?autoplay=1&amp;h=3ec1a3b1d7", // ID extraído para la opción B
      C: "https://player.vimeo.com/video/949519346?autoplay=1&amp;h=3ec1a3b1d6", // ID extraído para la opción C
    };
    

    const getDescriptionText = useCallback((drawingNumber = activeDrawing) => {
        // Función que devuelve el texto de descripción basado en el idioma y el dibujo activo
        const key = drawingNumber === 0 ? 'initial' : `drawing${drawingNumber}`;
        return descriptionsInCurriculumsPage[language][key];
    }, [activeDrawing, language]); // Dependencias de useCallback

    const [descriptionText, setDescriptionText] = useState(getDescriptionText());

    const getOpacityClass = (drawingNumber) => {
      return activeDrawing === drawingNumber ? 'opacity-100' : 'opacity-60';
    };

    // Función para determinar la fuente de la imagen a mostrar (estática o animada)
    const getImageSource = (drawingNumber) => {
        switch (drawingNumber) {
            case 1: return activeDrawing === 1 ? aniDrawing1 : drawing1;
            case 2: return activeDrawing === 2 ? aniDrawing2 : drawing2;
            case 3: return activeDrawing === 3 ? aniDrawing3 : drawing3;
            default: return drawing1; // Retornar el primer drawing por defecto para evitar errores
        }
    };

    const audioRef = useRef(new Audio(oceanAudio)); // // MÚSICA, Crea una referencia al audio utilizando useRef

    //! --------------------------------------------------------  HANDLERS CLICKS --------------------------------------------------------!//

    const handleDrawingClick = (drawingNumber) => {
      const newActive = drawingNumber === activeDrawing ? 0 : drawingNumber;
      
      // Si se hace clic en el mismo botón, alternar la visualización entre el grid y el video
      if (drawingNumber === activeDrawing) {
        setShowVideo(!showVideo); // Alternar la visualización del video
      } else {
        setShowVideo(false); // Asegurar que el video no se muestre si se selecciona un nuevo grupo
        setActiveDrawing(newActive);
        setActiveButtonText(newActive > 0 ? descriptionsInCurriculumsPage[language].buttonText[newActive - 1] : '');
        const groupKey = ['A', 'B', 'C'][drawingNumber - 1];
        setActiveImageGroup(groupKey); // Usamos el índice para determinar la letra del grupo
      }
    };


    //! -----------------------------------------------------  LOGICA DESCRIPTION TEXT-----------------------------------------------!//

    useEffect(() => {
      setDescriptionText(getDescriptionText());
      // Actualiza el texto del botón activo si el idioma cambia y hay un dibujo activo
      if (activeDrawing > 0) {
          setActiveButtonText(descriptionsInCurriculumsPage[language].buttonText[activeDrawing - 1]);
      }
    }, [language, activeDrawing, getDescriptionText]);

    //! ------------------------------------------------------  LOGICA AUDIO AUDIO ---------------------------------------------------!//

    useEffect(() => {
      const audio = audioRef.current;
      audio.loop = true; // Propiedad LOOP, audio repetido en bucle
    
      // Intenta reproducir el audio
      const playPromise = audio.play();
    
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // La reproducción ha comenzado, puedes hacer algo aquí si es necesario
          console.log("Audio playing");
        })
        .catch(error => {
          // La reproducción fue prevenida, maneja el error aquí
          console.error("Error al intentar reproducir el audio:", error);
        });
      }
    
      return () => {
          // Limpieza: Detiene el audio y remueve el event listener si lo hubiera
          audio.pause();
          // Otra limpieza necesaria
      };
    }, []);

    //! --------------------------------------------------------  LOGICA SLIDER --------------------------------------------------------!//

    // Estados para controlar la visualización del modal y la imagen activa
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Abrir modal con la imagen seleccionada
    const openModal = (index) => {
      setActiveImageIndex(index);
      setIsModalOpen(true);
    };

    // Cerrar modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Navegar entre imágenes
    const navigateImages = (direction) => {
      setActiveImageIndex((prevIndex) => {
        // Determinar cuál es el conjunto de imágenes activo basado en activeImageGroup
        const currentImages = imageGroups[activeImageGroup];
        const newIndex = prevIndex + direction;
        
        // Asegurarse de que el índice se mantiene dentro de los límites del array de imágenes actual
        if (newIndex < 0) return currentImages.length - 1; // Si es menor que 0, va a la última imagen
        if (newIndex >= currentImages.length) return 0; // Si es igual o mayor que la longitud, vuelve a la primera
        return newIndex;
      });
    };    

    //!--------------------------------------------------------  FUNCTIONS RENDERS --------------------------------------------------------!//

    // Función para renderizar el grid de imágenes o el video
    const renderContent = () => {
      if (showVideo && activeImageGroup) {
          return <VideoPlayer videoUrl={videoUrls[activeImageGroup]} />;
      } else {
          return <ImageGrid images={imageGroups} 
                            activeImageGroup={activeImageGroup} 
                            openModal={openModal}                                 
                  />;
      }
    };

    //!-------------------------------------------------------------------------------------------------------------------------------!//
    //!--------------------------------------------------------  TOTAL RENDER --------------------------------------------------------!//
    //!-------------------------------------------------------------------------------------------------------------------------------!//
    return (
      <div className="curriculum-page px-2 sm:px-6 lg:px-8">
          
          <div className="flex justify-between mb-15 sm:mb-22 lg:mb-16">
            <div className="pt-2">
              <LanguageSelector />
            </div>                
            <div className="pt-2">
              <img src={logo} alt="Logo" className="w-auto h-10 sm:w-auto sm:h-10 lg:w-auto lg:h-20" />
            </div>
          </div>

          <ProductAndDescription              
              activeButtonText={activeButtonText}
              descriptionText={descriptionText}
          />
                    
          <ChooseProducts
            images={images}
            onDrawingClick={handleDrawingClick} // Pasando la función como prop
            activeDrawing={activeDrawing}
            descriptions={descriptionsInCurriculumsPage}
            language={language}
          />

          <ProductAnimation
            getImageSource={getImageSource}
            getOpacityClass={getOpacityClass}
          />

          {activeImageGroup && renderContent()}
          
          <ImageModal 
            isOpen={isModalOpen} 
            images={imageGroups[activeImageGroup]} 
            activeIndex={activeImageIndex} 
            onClose={closeModal} 
            onNavigate={navigateImages}
          />

          <footer className="footer">
            <p>Email: loreimassage1@gmail.com</p>
            <p>Whatsapp: +354 772/3840</p>
          </footer>
      </div>
    );
    
}

export default CurriculumPage;

