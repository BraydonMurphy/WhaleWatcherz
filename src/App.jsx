import React, { useState } from 'react';
import { searchPairs } from './dexscreener';
import WhaleTradeCard from './components/WhaleTradeCard';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchPairs(query);
    setResults(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        WhaleWatcherz is live 🐋
      </h1>

      <div className="flex justify-center gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search token (e.g. SOL, ETH)"
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
        >
          Search
        </button>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.length > 0 ? (
          results.map((pair) => (
            <WhaleTradeCard
              key={pair.pairAddress}
              baseToken={pair.baseToken.symbol}
              quoteToken={pair.quoteToken.symbol}
              priceUsd={pair.priceUsd}
              dexId={pair.dexId}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">No results yet. Try a search above.</p>
        )}
      </div>
    </div>
  );
}

export default App;
