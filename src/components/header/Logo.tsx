import React from 'react';
import logoImage from '../../assets/images/miniatura.png'; // Importa a imagem para o logo

const Logo: React.FC = () => {
    return (
        <div className="img-miniatura">
            <img src={logoImage} alt="Logo" />
        </div>
    );
};

export default Logo;
