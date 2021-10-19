import React from "react";

import Grid from './Grid';
import LoadSpinner  from "./LoadSpinner";
import BreadCrumb from "./BreadCrumb";
import SongInfo from "./SongInfo";
import Artists from "./Artists";

import { useSongFetch } from "../hooks/useSongFetch";
import { useParams } from "../../node_modules/react-router";
//no img found png
//


const Song = () => {

	const {songId} = useParams();

	const { state: songs, loading, error } = useSongFetch(songId);

	console.log(songs)

	if (loading) return <LoadSpinner/>
	if (error) return <div>Something went Wrong...</div>

 return (
  <>
	<BreadCrumb songName={songs.title} />
	<SongInfo songs={songs}/>
  </>
 )
};

export default Song;