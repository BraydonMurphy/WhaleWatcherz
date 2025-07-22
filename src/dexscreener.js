import axios from 'axios';

const BASE = 'https://api.dexscreener.com/latest/dex';

export async function searchPairs(query) {
  try {
    const res = await axios.get(`${BASE}/search`, { params: { q: query } });
    return res.data.pairs;
  } catch (err) {
    console.error("Error fetching search results:", err);
    return [];
  }
}
