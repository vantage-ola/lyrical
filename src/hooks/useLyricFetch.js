import { useState, useEffect } from 'react';

import API from '../API';

export const useLyricFetch = () => {


	const [searchTerm, setSearchTerm] = useState('');

	const [state, setState] = useState([]);
	const [error, setError] = useState(false);

	const fetchArtistSongs = async(id , page) => {
		try {

			setError(false);

			const songs = await API.fetchArtistSongs(id, page);

			setState(songs)

		} catch(error) {
			setError(true);
		}
	};
	useEffect(() => {
		fetchArtistSongs(1123, 1);
	}, []);

	return {state}
};