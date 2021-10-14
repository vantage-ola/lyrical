import React from "react";

import Thumb from "../Thumb";

import { Wrapper, Content, Text } from "./SongInfo.styles";


const SongInfo = ({songs}) => { 
	const id = `rg_embed_link_${songs.id}`
	const url = `${songs.url}`
	const embed = `//genius.com/songs/${id}/embed.js`
	return(
 <Wrapper>
  	<Content>
		<Thumb 
		image={songs.song_art_image_url}
		clickable={false}
		/>

		<Text>
			<h1>{songs.full_title}</h1>
			<h3>LYRICS</h3>

			<div id={id} class='rg_embed_link' data-song-id={songs.id}>Read <a href={url}>{songs.title}</a> lyrics on Genius</div> <script crossorigin src={embed}></script>
			
			<div class="stats">
				<div class="release-date">
					<h3>RELEASE DATE</h3>
					{songs.release_date_for_display}
				</div>

				<div class="artist">
					<h3>ARTIST</h3>
					{songs.primary_artist.name}
				</div>


				<div class="views">
					<h3>VIEWS</h3>
					{songs.stats.pageviews}
				</div>
				
			</div>

			</Text>
  	</Content>
 </Wrapper>
)}

export default SongInfo;