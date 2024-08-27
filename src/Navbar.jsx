import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Operations Research Tool</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/documentation">Documentation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
