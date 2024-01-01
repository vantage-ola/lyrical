import { useState, useEffect } from 'react';

import API from '../API';

const initialState = {
	response: [],
	next_page: 0
};

export const useLyricFetch = () => {


	const [searchTerm, setSearchTerm] = useState('');
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
//	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [previous, setPrevious] = useState(false);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);

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

	const fetchSearch = async(searchTerm='') => {
		try {

			setError(false)
			setLoading(true);

			const search = await API.fetchSearch(searchTerm);

			setState({ search: search.response.hits})

		} catch(error) {
			setError(true);

		}
		setLoading(false);
	};

	const loadMore = () => {
		setPage((page) => page + 1);
	  };

	useEffect(() => {
		setState(initialState);
	//	fetchArtistSongs(2300, page);
	}, [page]);

	useEffect(() => {
		fetchSearch(searchTerm);
		
		if (!searchTerm) {
		//	fetchArtistSongs(2300, page);
		}
	}, [searchTerm, page])

	return {state, loading, searchTerm, setSearchTerm, error};
};