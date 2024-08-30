import React from 'react';

const ImageModal = ({ isOpen, images, activeIndex, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <button className="absolute top-0 right-0 m-4 text-white text-lg font-bold" onClick={onClose}>X</button>
      <button className="left-0 m-4 text-white text-5xl font-extrabold" onClick={() => onNavigate(-1)}>«</button>
      <img src={images[activeIndex]} alt="Imagen ampliada" style={{ maxWidth: '75%', maxHeight: '75%', zIndex: '50' }}/>
      <button className="right-0 m-4 text-white text-5xl font-extrabold" onClick={() => onNavigate(1)}>»</button>
    </div>
  );
};

export default ImageModal;