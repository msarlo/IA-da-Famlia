import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminPrincipal.css';

const LancarConteudo = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [conteudos, setConteudos] = useState([]);

  const publicar = () => {
    if (titulo && descricao) {
      setConteudos([...conteudos, { titulo, descricao }]);
      setTitulo('');
      setDescricao('');
    }
  };

  return (
    <Box className="admin-page">
      <Button onClick={() => navigate('/admin')} sx={{ color: '#fff', backgroundColor: '#333', mb: 2 }}>Voltar</Button>
      <Typography variant="h4" className="admin-title">Lançar Conteúdo</Typography>
      <Box sx={{ maxWidth: '600px', mb: 4 }}>
        <TextField
          label="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#19ccb2' }} onClick={publicar}>
          Publicar
        </Button>
      </Box>
      <Box>
        {conteudos.map((item, idx) => (
          <Paper key={idx} sx={{ p: 2, mb: 2, maxWidth: '600px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="h6">{item.titulo}</Typography>
            <Typography variant="body1">{item.descricao}</Typography>
          </Paper>
        ))}
      </Box>
      <footer className="admin-footer">
        <hr />
        <img src={require('../../img/logoprefeitura.png')} alt="Logo Prefeitura" className="footer-logo" />
      </footer>
    </Box>
  );
};

export default LancarConteudo;