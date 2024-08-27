import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: auto;
    cursor: pointer;
  }
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
      <Logo>
        <Link to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/orlogo.png`} 
            alt="Zurück zur Startseite" 
          />
        </Link>
      </Logo>
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
