import styled from 'styled-components';

export const Wrapper = styled.footer`
    grid-column: 2 / span 12;
    min-height: 3rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 730px){
        grid-column: 2 / span 6;
    }

`
export const A = styled.a`
    text-decoration: none;
    color: var(--yellow);
`