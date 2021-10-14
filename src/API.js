import {
 API_KEY,
 API_SEARCH_URL,
 API_URL
} from './config'


const defaultConfig = {
 method: 'GET',
 "headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": `${API_KEY}`,
}, 
};

const API = {

 fetchArtistSongs: async( id, page) => {
  const endpoint = `${API_URL}artists/${id}/songs?sort=popularity&page=${page}&per_page=50`;
  return await (await fetch(endpoint, {...defaultConfig})).json();
 },

 fetchSongs: async(id) => {
  const endpoint = `${API_URL}songs/${id}`;
  return await (await fetch(endpoint, {...defaultConfig})).json();

 },

 fetchSearch: async(searchTerm) => {
  const endpoint = `${API_SEARCH_URL}?q=${searchTerm}`;
  return await (await fetch(endpoint, {...defaultConfig})).json();

 },
};

export default API;