import React from "react";

import styled from "styled-components";

import {Footer} from './Footer'

export const Wrapper = styled.div`
  max-width: 1660px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--white);

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
    grid-column: 2 / span 12;
    min-height: 3rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
	`;

const About = () => {

	return (
		<>
		<Wrapper>
			<h1>About</h1>
			<Content>
			<h3>Lyrical is a third party platform that uses the Genius api to display information about music. </h3>
			</Content>
		</Wrapper>
		</>
	);
};

export default About;