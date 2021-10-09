import React from "react";

import Grid from './Grid';
import LoadSpinner  from "./LoadSpinner";

import { useSongFetch } from "../hooks/useSongFetch";
import { useParams } from "../../node_modules/react-router";
//no img found png
//


const Song = () => {

	const {songId} = useParams();

	const { state: songs, loading, error } = useSongFetch(songId);

	console.log(songs)
	
 return (
  <>
   Songs
  </>
 )
};

export default Song;