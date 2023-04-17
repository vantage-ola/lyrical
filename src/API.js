import {
 API_KEY,
 API_SEARCH_URL,
 API_URL
} from './config'




const API = {

 fetchArtistSongs: async( id, page) => {
  const endpoint = `${API_URL}artists/${id}/songs?sort=popularity&page=${page}&per_page=48&access_token=${API_KEY}`;
  return await (await fetch(endpoint)).json();
 },

 fetchSongs: async(id) => {
  const endpoint = `${API_URL}songs/${id}?access_token=${API_KEY}`;
  return await (await fetch(endpoint)).json();

 },

 fetchSearch: async(searchTerm) => {
  const endpoint = `${API_SEARCH_URL}?q=${searchTerm}&access_token=${API_KEY}`;
  return await (await fetch(endpoint)).json();

 },
};

export default API;