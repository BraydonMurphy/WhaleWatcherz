// components/WhaleTradeCard.jsx
import React from 'react';

function WhaleTradeCard({ baseToken, quoteToken, priceUsd, dexId }) {
  return (
    <div className="bg-gray-800 bg-opacity-60 border border-gray-700 shadow-lg rounded-xl p-5 hover:scale-105 transition-transform duration-200">
      <h2 className="text-lg font-semibold text-white mb-2">
        {baseToken} / {quoteToken}
      </h2>
      <p className="text-2xl font-bold text-green-400 mb-1">
        ${parseFloat(priceUsd).toFixed(4)}
      </p>
      <p className="text-sm text-gray-400">DEX: {dexId}</p>
    </div>
  );
}

export default WhaleTradeCard;
