import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [datetime, setDatetime] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://sua-api.onrender.com') // Substitua pela sua URL real
      .then(response => {
        if (!response.ok) throw new Error('Erro na API');
        return response.json();
      })
      .then(data => {
        setDatetime(data.date);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data e Hora Atual</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="error">Erro: {error}</p>
      ) : (
        <p className="datetime">{datetime}</p>
      )}
      <p>Status: {error ? 'Falha na conexão' : 'Conectado à API'}</p>
    </div>
  );
}

export default App;