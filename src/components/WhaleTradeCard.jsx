export default function WhaleTradeCard({ baseToken, quoteToken, priceUsd, dexId }) {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-200">
      <h2 className="text-2xl font-bold mb-2">
        {baseToken} / {quoteToken}
      </h2>
      <p className="text-lg mb-1">💲{parseFloat(priceUsd).toFixed(4)}</p>
      <p className="text-sm text-gray-400">DEX: {dexId}</p>
    </div>
  );
}
