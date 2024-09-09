import React, { useState } from 'react';
import Converter from './components/Converter';
import History from './components/History';
import './App.css'

const App = () => {
  const [history, setHistory] = useState([]); // Armazenar o histórico de conversões

  // Função para adicionar uma nova conversão ao histórico
  const addToHistory = (conversion) => {
    setHistory([...history, conversion]); // Spread operator para manter o histórico anterior
  };

  return (
    <div className='App'>
      <h1>Conversor de Moedas</h1>
      <Converter addToHistory={addToHistory} />
      <History history={history} />
    </div>
  );
};

export default App;
