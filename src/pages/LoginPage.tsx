import React from 'react';
import LoginForm from '../components/LoginForm';
import '../assets/styles/global.css';

const LoginPage: React.FC = () => {
    return (
        <div className="container">
            <div className="img-miniatura">
                <img src="src/assets/images/miniatura.png" alt="Logo da prefeitura em miniatura" />
            </div>
            <h1>Sistema de Agendamento</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
