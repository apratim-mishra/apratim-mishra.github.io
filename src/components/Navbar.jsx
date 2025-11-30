import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { Container } from './ui'
import { useTheme } from '../styles/ThemeContext'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.bgNav};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 56px;
`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Logo = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.$active 
    ? (({ theme }) => theme.colors.primary) 
    : (({ theme }) => theme.colors.textSecondary)};
  border-radius: 6px;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.15s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 6px;
  transition: all 0.15s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
  
  @media (max-width: 640px) {
    span { display: none; }
    padding: 8px;
  }
`

const MobileMenuBtn = styled(IconButton)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.bgCard};
  padding: 16px;
  flex-direction: column;
  gap: 4px;
  
  @media (max-width: 768px) {
    display: ${props => props.$open ? 'flex' : 'none'};
  }
`

const MobileNavLink = styled(Link)`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Career', path: '/career' },
  { label: 'Research', path: '/research' }
]

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">Apratim Mishra</Logo>
          
          <NavLinks>
            {navItems.map(item => (
              <NavLink 
                key={item.path} 
                to={item.path}
                $active={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <NavActions>
            <IconButton onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </IconButton>
            
            <ResumeButton href="/files/Resume_Apratim.pdf" target="_blank">
              <FiDownload size={14} />
              <span>Resume</span>
            </ResumeButton>
            
            <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </MobileMenuBtn>
          </NavActions>
        </NavContainer>
      </Nav>
      
      <MobileMenu $open={mobileOpen}>
        {navItems.map(item => (
          <MobileNavLink 
            key={item.path} 
            to={item.path}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </>
  )
}

export default Navbar
