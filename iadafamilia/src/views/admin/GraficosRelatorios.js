import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/admin/AdminPrincipal.css';

const data = [
  { name: 'Seg', atendimentos: 12 },
  { name: 'Ter', atendimentos: 19 },
  { name: 'Qua', atendimentos: 7 },
  { name: 'Qui', atendimentos: 14 },
  { name: 'Sex', atendimentos: 20 },
];

const GraficosRelatorios = () => {
  const navigate = useNavigate();

  return (
    <Box className="admin-page">
      <Button onClick={() => navigate('/admin')} sx={{ color: '#fff', backgroundColor: '#333', mb: 2 }}>Voltar</Button>
      <Typography variant="h4" className="admin-title" sx={{ mb: 4 }}>Gráficos e Relatórios</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="atendimentos" fill="#19ccb2" />
        </BarChart>
      </ResponsiveContainer>
      <footer className="admin-footer">
        <hr />
        <img src={require('../../img/logoprefeitura.png')} alt="Logo Prefeitura" className="footer-logo" />
      </footer>
    </Box>
  );
};

export default GraficosRelatorios;