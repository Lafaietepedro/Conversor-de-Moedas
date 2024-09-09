import React, { useState } from 'react';

const Converter = ({ addToHistory }) => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      const rate = data.rates[toCurrency];
      const conversionResult = amount * rate;
      setResult(conversionResult.toFixed(2));

      // Adiciona ao histórico
      const conversion = {
        amount,
        fromCurrency,
        toCurrency,
        result: conversionResult.toFixed(2),
        date: new Date().toLocaleString()
      };
      addToHistory(conversion);

    } catch (error) {
      console.error("Erro ao converter moeda: ", error);
    }
  };

  return (
    <div>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="BRL">BRL</option>
        {/* Adicione mais opções de moedas conforme necessário */}
      </select>
      <span> para </span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="BRL">BRL</option>
        {/* Adicione mais opções de moedas conforme necessário */}
      </select>
      <button onClick={convertCurrency}>Converter</button>

      {result && (
        <p>
          {amount} {fromCurrency} = {result} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default Converter;
