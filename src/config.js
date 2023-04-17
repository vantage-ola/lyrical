// Configuration for Genius API
// https://docs.genius.com/

const API_URL = 'https://api.genius.com/';
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

// console.log(API_KEY)
const API_SEARCH_URL = `${API_URL}search`

export {
 API_KEY,
 API_URL,
 API_SEARCH_URL
 
}