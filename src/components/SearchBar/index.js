import React from "react";

import { Wrapper, Content} from "./SearchBar.styles";

import searchIcon from '../../img/search-icon-white.png'

const SearchBar = ({ setSearchTerm }) => {

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt='search-icon' />
				<input
					type="text"
					placeholder="Search Songs and Lyrics..." />
			</Content>
		</Wrapper>
	)
}

export default SearchBar;