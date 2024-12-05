import React from 'react';


interface PasswordInputProps {
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, value, onChange }) => {
    return (
        <div className="input-group">
            <input 
                type="password" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required 
            />
        </div>
    );
};

export default PasswordInput;
