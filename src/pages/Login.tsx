import React, { useState } from 'react';
import TextInput from '../components/Input/textInput';
import PasswordInput from '../components/Input/PasswordInput';
import SubmitButton from '../components/Button/SubmitButton';
import Logo from '../components/header/Logo';
import '../assets/styles/global.css';

const Login: React.FC = () => {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Login attempt:", matricula, senha);
        // Aqui você pode adicionar a lógica de autenticação
    };

    return (
        <div className="container">
            <Logo />
            <h1>Sistema de Agendamento</h1>
            <form onSubmit={handleSubmit}>
                <TextInput 
                    type="text" 
                    placeholder="Matrícula" 
                    value={matricula} 
                    onChange={(e) => setMatricula(e.target.value)} 
                />
                <PasswordInput 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />
                <SubmitButton 
                    onClick={() => {}}
                    text="Entrar"
                />
            </form>
        </div>
    );
};

export default Login;
