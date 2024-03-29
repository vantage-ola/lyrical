import React from "react";
import { Link } from 'react-router-dom'

import { Wrapper, Content, LogoImg, Menu, MenuLink } from "./Header.styles";

import img from '../../img/logo-2.png';

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
				<LogoImg src={img} alt="lyrical-logo"/>
				</Link>	
			<Menu>
				<MenuLink href="https://genius.com/"  target="_blank">Genius</MenuLink>
			</Menu>

			</Content>
		</Wrapper>
	)

}
export default Header;