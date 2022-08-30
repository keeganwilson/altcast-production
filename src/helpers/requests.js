const API_KEY = "501ccc8fe2c709cdeba5151b89673d51";

export default {
  fetchMLB: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNBA: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNFL: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchNHL: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
  fetchNCAAF: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
  fetchNCAAM: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
  fetchWNBA: `/trending/all/week?api_key=${API_KEY}&with_genres=9648`,
  fetchAFL: `/trending/all/week?api_key=${API_KEY}&with_genres=878`,
  fetchNRL: `/trending/all/week?api_key=${API_KEY}&with_genres=37`,
  fetchEPL: `/trending/all/week?api_key=${API_KEY}&with_genres=16`,
};
