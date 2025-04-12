import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminPrincipal.css';

const GestaoIA = () => {
  const navigate = useNavigate();
  const [faq, setFaq] = useState([
    { pergunta: 'Como marcar consulta?', resposta: 'Você pode marcar consulta pelo app do SUS ou indo à UBS mais próxima.' },
    { pergunta: 'Quais vacinas estão disponíveis?', resposta: 'Consulte a lista atualizada no site da sua prefeitura.' },
  ]);

  const [novaPergunta, setNovaPergunta] = useState('');
  const [novaResposta, setNovaResposta] = useState('');

  const adicionarFaq = () => {
    if (novaPergunta && novaResposta) {
      setFaq([...faq, { pergunta: novaPergunta, resposta: novaResposta }]);
      setNovaPergunta('');
      setNovaResposta('');
    }
  };

  return (
    <Box className="admin-page">
      <Button onClick={() => navigate('/admin')} sx={{ color: '#fff', backgroundColor: '#333', mb: 2 }}>Voltar</Button>
      <Typography variant="h4" className="admin-title">Gestão da IA</Typography>
      <List className="faq-list">
        {faq.map((item, idx) => (
          <ListItem key={idx} className="faq-item">
            <ListItemText primary={item.pergunta} secondary={item.resposta} />
          </ListItem>
        ))}
      </List>

      <Box className="faq-form">
        <TextField
          label="Nova Pergunta"
          value={novaPergunta}
          onChange={(e) => setNovaPergunta(e.target.value)}
          fullWidth
          sx={{ mb: 2, maxWidth: '600px' }}
        />
        <TextField
          label="Resposta"
          value={novaResposta}
          onChange={(e) => setNovaResposta(e.target.value)}
          fullWidth
          sx={{ mb: 2, maxWidth: '600px' }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#19ccb2' }} onClick={adicionarFaq}>
          Adicionar
        </Button>
      </Box>
      <footer className="admin-footer">
        <hr />
        <img src={require('../../img/logoprefeitura.png')} alt="Logo Prefeitura" className="footer-logo" />
      </footer>
    </Box>
  );
};

export default GestaoIA;