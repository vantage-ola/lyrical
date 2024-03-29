import styled from "styled-components";

export const Wrapper = styled.div`
flex-wrap: wrap;
background: var(--yellow);
position: relative;
padding: 0rem 2rem;
top: 0;
left: 0;
right: 0;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1660px;
  padding: 10px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 85px;
  }
`;

export const MenuLink = styled.a`
  padding: 0 2rem;
  cursor: pointer;
  text-align: center;
  color: var(--dark);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 500px) {
   padding: 0.1rem 0.7rem 0.1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
