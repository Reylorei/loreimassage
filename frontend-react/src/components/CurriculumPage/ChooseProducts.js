const ChooseProducts = ({ images, onDrawingClick, activeDrawing, descriptions, language }) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-5 sm:mt-7 lg:mt-10">
            {images.map((imageObj, index) => (
                <div key={index} className="flex flex-col items-center">
                    <img 
                        src={activeDrawing === index + 1 ? imageObj.animated : imageObj.static}
                        alt={`Imagen ${index + 1}`}
                        className={`w-50 h-auto sm:w-50 sm:h-auto md:w-50 md:h-auto lg:w-80 lg:h-auto xl:w-200 xl:h-auto cursor-pointer ${activeDrawing === index + 1 ? "image-active" : ""}`}
                        onClick={() => onDrawingClick(index + 1)}
                    />
                    <button 
                        className={`mt-2 ${activeDrawing === index + 1 ? 'btn-active' : 'btn-inactive'}`} 
                        onClick={() => onDrawingClick(index + 1)}
                    >
                        {descriptions[language].buttonText[index]}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ChooseProducts;
