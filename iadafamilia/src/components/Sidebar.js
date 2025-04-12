import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import logoprefeitura from '../img/logoprefeitura.png';

const Sidebar = ({ onQuestionClick }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isNewsExpanded, setIsNewsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleNews = (e) => {
        e.stopPropagation();
        setIsNewsExpanded(!isNewsExpanded);
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
                <>
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
                    <div className="sidebar-footer">
                        <div className={`noticias-container ${isNewsExpanded ? 'expanded' : ''}`} onClick={toggleNews}>
                            {!isNewsExpanded ? (
                                <div className="noticias-button">Notícias</div>
                            ) : (
                                <div className="noticias-content">
                                    <IconButton 
                                        className="close-news-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsNewsExpanded(false);
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <h3>Notícias</h3>
                                    <div className="news-items">
                                        <h1>Aqui vão ficar as notícias</h1>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='logo'>
                            <img src={logoprefeitura} alt='Logo da Prefeitura' className='logo-prefeitura' width={"240px"}></img>
                        </div>
                    </div>
                </>
            )}
        </aside>
    );
};

export default Sidebar;