import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [datetime, setDatetime] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://your-api-name.onrender.com') // Replace with your Render API URL
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
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
            <header className="App-header">
                <h1>Data e Hora Atual</h1>
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>Erro: {error}</p>
                ) : (
                    <p>{datetime}</p>
                )}
                <p>Status: API consumida com sucesso!</p>
            </header>
        </div>
    );
}

export default App;