import { useState, useEffect } from 'react';

import API from '../API';

//Test Data
import Test from '../test/Test';

const initialState = {
	song: null
};

export const useLyricFetch = () => {


	const [searchTerm, setSearchTerm] = useState('');

	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [error, setError] = useState(false);

	const fetchArtistSongs = async(id , page) => {
		try {

			setError(false);
			setLoading(true);

			const data = await API.fetchArtistSongs(id, page);
			//Test Data
			//const data = Test;
			setState({ song: data.response.songs});

		} catch(error) {
			setError(true);
		}
		setLoading(false);
	};
	useEffect(() => {
		fetchArtistSongs(1123, 1);
	}, []);

	return {state, loading, error};
};