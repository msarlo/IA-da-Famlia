import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublishIcon from '@mui/icons-material/Publish';
import logoprefeitura from '../../img/logoprefeitura.png';
import SplitText from '../../components/SplitText';
import '../../styles/admin/AdminPrincipal.css';

const AdminPrincipal = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-container">
            <div className="admin-header">
              <img src={logoprefeitura} alt="Logo da Prefeitura" className="logo-prefeitura" height={"100px"}/>
              <SplitText
                text="Olá admin!"
                className="admin-greeting"
                delay={100}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={() => console.log("Animação concluída!")}
              />
            </div>

            <div className="admin-menu">
                <div className="menu-button" onClick={() => navigate('/admin/gestao-ia')}>
                    <SettingsIcon className="menu-icon" />
                    <span className="menu-label">Gestão da IA</span>
                </div>
                <div className="menu-button" onClick={() => navigate('/admin/graficos')}>
                    <BarChartIcon className="menu-icon" />
                    <span className="menu-label">Gráficos e Relatórios</span>
                </div>
                <div className="menu-button" onClick={() => navigate('/admin/lancar-conteudo')}>
                    <PublishIcon className="menu-icon" />
                    <span className="menu-label">Lançar Conteúdo</span>
                </div>
            </div>
        </div>
    );
};

export default AdminPrincipal;
