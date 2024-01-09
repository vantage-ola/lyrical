import React from "react";

import LoadSpinner  from "./LoadSpinner";
import BreadCrumb from "./BreadCrumb";
import SongInfo from "./SongInfo";


import { useSongFetch } from "../hooks/useSongFetch";
import { useParams } from "react-router";
//no img found png
//


const Song = () => {

	const {songId} = useParams();

	const { state: songs, loading, error } = useSongFetch(songId);


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