import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ onClick, text }) => {
    return (
        <div className="input-group">
            <button type="submit" onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default SubmitButton;
