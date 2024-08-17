import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled component for the header
const HeaderStyled = styled.header`
  background-color: #FFD700;
  color: #000;
  padding: 20px;
  text-align: center;
`;

// Styled component for the navigation bar
const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

// Styled component for each link
const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 10px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #FFD700;
    background-color: #000;
    border-radius: 5px;
  }
`;

const Header = () => (
  <HeaderStyled>
    <h1>AEK Athens FC News</h1>
    <NavStyled>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/team">Team</NavLink>
    </NavStyled>
  </HeaderStyled>
);

export default Header;

