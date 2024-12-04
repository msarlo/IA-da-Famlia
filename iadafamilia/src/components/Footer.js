import React, { useState } from 'react';

const Footer = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            if (onSendMessage) {
                onSendMessage(inputValue);
            }
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <footer>
            <input
                type="text"
                placeholder="Digite sua mensagem"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                    fontFamily: 'var(--font-body)',
                }}
            />
            <button
                onClick={handleSendMessage}
                style={{
                    fontFamily: 'var(--font-small)',
                }}
            >
                Enviar
            </button>
        </footer>
    );
};

export default Footer;
