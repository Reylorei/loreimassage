import React from 'react';

const ImageGrid = ({ images, activeImageGroup, openModal }) => {
    if (!activeImageGroup || !images) return null; // Si no hay grupo activo o imágenes, no renderizar nada.

    // Obtener el conjunto de imágenes del grupo activo
    const imagesToRender = images[activeImageGroup];

    return (
        <div className="grid grid-cols-3 gap-4 mt-5">
            {imagesToRender.map((imgSrc, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => openModal(index)}>
                    <img src={imgSrc} alt={`Imagen Opción ${activeImageGroup} ${index + 1}`} className="w-32 h-32"/>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
