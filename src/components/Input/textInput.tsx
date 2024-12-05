import React from 'react';


interface TextInputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: React.FC<TextInputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <div className="input-group">
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required 
            />
        </div>
    );
};

export default TextInput;
