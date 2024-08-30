import React from 'react';

const ProductAndDescription = ({ activeButtonText, descriptionText }) => {
    return (
        <div>
            <div className="mt-5 sm:mt-7 lg:mt-10">
                <div className="flex flex-col items-center text-center">
                    {activeButtonText && <p className="button-text-description text-base sm:text-lg lg:text-xl">{activeButtonText}</p>}
                    <p className="description-text animate-rotation-opening text-base sm:text-lg lg:text-xl">{descriptionText}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductAndDescription;