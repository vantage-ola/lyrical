import React from "react";
import { Wrapper, Content, LogoImg, Menu, MenuLink } from "./Header.styles";

import img from '../../img/logo-2.png';

const Header = () => {
	return (
		<Wrapper>
			<Content>
			<LogoImg src={img} alt="lyrical-logo"/>
			<Menu>
				<MenuLink>About</MenuLink>
				<MenuLink>Genius</MenuLink>
			</Menu>

			</Content>
		</Wrapper>
	)

}
export default Header;