import { useState, useEffect, useCallback } from "react";

import API from "../API";

import testSong from '../test/testSong'

export const useSongFetch = songId => {

	const [state, setState] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	
	const fetchSongs =  useCallback(async() => {
		try {
			setError(false);
			setLoading(true);

			const songs = await API.fetchSongs(songId);
			setState(songs);


		} catch (error) {
			setError(true);
		}
		setLoading(false);
	}, [songId]);

	useEffect(() => {
		fetchSongs();

	}, [songId, fetchSongs]);

	return {state, loading, error};

}