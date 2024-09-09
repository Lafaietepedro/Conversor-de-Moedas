import React from 'react';

const History = ({ history }) => {
  return (
    <div id='historyContainer'>
      <h2>Histórico de Conversões</h2>
      {history.length === 0 ? (
        <p>Nenhuma conversão realizada.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.amount} {item.fromCurrency} = {item.result} {item.toCurrency} em {item.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
