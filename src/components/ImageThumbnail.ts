import React from 'react';
import '../assets/styles/global.css';  // Verifique se o caminho está correto


const ImageThumbnail = ({ src, alt }) => {
    return (
        <div className="img-miniatura">
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageThumbnail;
