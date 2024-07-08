import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: rgba(26, 11, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffd700;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffd700;
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: #ffd700;
    &::after {
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <NavContainer style={{ background: scrolled ? 'rgba(26, 11, 46, 0.95)' : 'rgba(26, 11, 46, 0.8)' }}>
      <NavContent>
        <Logo to="/">surgalxy</Logo>
        <NavLinks>
          <NavItem>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/music" className={location.pathname === '/music' ? 'active' : ''}>Music</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;