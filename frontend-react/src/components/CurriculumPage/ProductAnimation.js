
import React from 'react';

const ProductAnimation = ({getImageSource, getOpacityClass}) => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-5 sm:mt-7 lg:mt-10">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={getImageSource(index)} 
              alt={`Dibujo ${index}`} 
              className={`w-50 h-auto sm:w-50 sm:h-auto md:w-50 md:h-auto lg:w-80 lg:h-auto xl:w-200 xl:h-auto transition-opacity duration-500 ${getOpacityClass(index)} ${index <= 3 ? 'larger-image' : ''}`} 
            />
          </div>
        ))}
      </div>  
    );
  };    

export default ProductAnimation;