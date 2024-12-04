import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sidebar = ({ onQuestionClick }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className={`sidebar-header ${isCollapsed ? 'collapsed' : ''}`}>
                <IconButton>
                    <AddCircleIcon sx={{ color: 'var(--azul)' }} />
                </IconButton>
                <IconButton onClick={toggleSidebar}>
                    {isCollapsed ? (
                        <ArrowForwardIcon sx={{ color: 'var(--azul)' }} />
                    ) : (
                        <ArrowBackIcon sx={{ color: 'var(--azul)' }} />
                    )}
                </IconButton>
            </div>
            {!isCollapsed && (
                <div className="sidebar-content">
                    <h3 style={{ fontFamily: 'var(--font-titles)' }}>Seus Chats</h3>
                    <ul>
                        <li style={{ fontFamily: 'var(--font-body)' }}>Chat 1</li>
                        <li style={{ fontFamily: 'var(--font-body)' }}>Chat 2</li>
                    </ul>
                    <h3 style={{ fontFamily: 'var(--font-titles)', marginTop: '20px' }}>Perguntas Frequentes</h3>
                    <ul>
                        <li
                            style={{ fontFamily: 'var(--font-body)', cursor: 'pointer' }}
                            onClick={() => onQuestionClick('Como posso marcar uma consulta?')}
                        >
                            Como posso marcar uma consulta?
                        </li>
                        <li
                            style={{ fontFamily: 'var(--font-body)', cursor: 'pointer' }}
                            onClick={() => onQuestionClick('Remédios para dor de cabeça')}
                        >
                            Remédios para dor de cabeça
                        </li>
                        <li
                            style={{ fontFamily: 'var(--font-body)', cursor: 'pointer' }}
                            onClick={() => onQuestionClick('Qual o procedimento para exames de sangue?')}
                        >
                            Qual o procedimento para exames de sangue?
                        </li>
                    </ul>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
