import { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`

	:root {
		--yellow : rgb(232, 195, 16); /* #e8c310 */
		--dark : rgb(19, 19, 19);
		--white: rgb(255, 255, 255)
	}

	* {
		color: var(--white);
		font-family: 'Lato', sans-serif;
		font-weight: 700;
	}

	body {

		color: var(--white);
		background: var(--dark);
		margin: 0;
		padding: 0;
	}
`