import React from "react";

import { Wrapper, A } from "./Footer.styles";

const year = new Date().getFullYear()

export const Footer = () => {
    return <Wrapper as="footer"><p>&copy;{year} <A>Lyrical.</A>  Powered by  <A href="https://genius.com/developers">Genius API.</A></p></Wrapper>
};