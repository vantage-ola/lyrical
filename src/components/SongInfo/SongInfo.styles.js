import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--dark);
	background-size: cover;
	background-position: center;
	padding: 40px 20px;
	animation: animateSong 1s;

	@keyframes animateSong {
		from {
		opacity: 0;
		}
		to {
		opacity: 1;
		}
	}
	`;

export const Content = styled.div`
	display: flex;
	max-width: 1660px;
	margin: 0 auto;
	background: var(--dark);
	border-radius: 20px;

	@media screen and (max-width: 768px) {
		display: block;
		max-height: none;
	}
	`;

export const Text = styled.div`
	width: 80%;
	padding: 0 40px;
	color: var(--white);
	overflow: hidden;

	h3 {
		color: var(--yellow);
	}
	.rg_embed_link {
		padding: 0;

		a {
		color: var(--yellow);
	}
	};
	.stats {
		display: flex;
    	justify-content: flex-start;
	}
	.release-date {
		padding: 30px 0 0;

	}
	
	.artist {
		padding: 30px 30px 0;
	}

	.views {
		padding: 30px 0 30px;
	}
	h1 {
		@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		}
	}
	`;
