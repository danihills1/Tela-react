import React, { useState } from 'react';
import '../assets/styles/global.css';  // Verifique se o caminho está correto


const LoginForm: React.FC = () => {
    const [matricula, setMatricula] = useState<string>(''); // Tipagem para string
    const [senha, setSenha] = useState<string>(''); // Tipagem para string

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Login attempt', { matricula, senha });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Matrícula"
                    required
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                />
            </div>
            <div className="input-group">
                <input
                    type="password"
                    placeholder="Senha"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>
            <div className="input-group">
                <button type="submit">ENTRAR</button>
            </div>
        </form>
    );
};

export default LoginForm;
