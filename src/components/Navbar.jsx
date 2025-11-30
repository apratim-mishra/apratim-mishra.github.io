import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { Container } from './ui'
import { useTheme } from '../styles/ThemeContext'

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, $scrolled }) => 
    $scrolled ? theme.colors.bgNav : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(16px)' : 'none'};
  border-bottom: 1px solid ${({ theme, $scrolled }) => 
    $scrolled ? theme.colors.border : 'transparent'};
  height: 64px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Logo = styled(Link)`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.025em;
  transition: color 200ms ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
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
  position: relative;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.text : theme.colors.textSecondary};
  border-radius: 8px;
  transition: all 200ms ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bgHover};
  }
  
  /* Active indicator */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(${({ $active }) => $active ? 1 : 0});
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
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
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.bgHover};
    color: ${({ theme }) => theme.colors.text};
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    span { display: none; }
    padding: 10px;
    border-radius: 10px;
  }
`

const MobileMenuBtn = styled(IconButton)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

// Mobile Menu Overlay
const MobileMenuOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${({ $open }) => $open ? 1 : 0};
  visibility: ${({ $open }) => $open ? 'visible' : 'hidden'};
  transition: all 300ms ease;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  max-width: 85%;
  background: ${({ theme }) => theme.colors.bg};
  padding: 80px 24px 24px;
  flex-direction: column;
  gap: 8px;
  z-index: 999;
  transform: translateX(${({ $open }) => $open ? '0' : '100%'});
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  @media (max-width: 768px) {
    display: flex;
  }
`

const MobileCloseBtn = styled(IconButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.text};
  border-radius: 10px;
  transition: all 200ms ease;
  animation: ${slideDown} 400ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:hover {
    background: ${({ theme }) => theme.colors.bgHover};
  }
  
  ${({ $active, theme }) => $active && `
    background: ${theme.colors.primaryLight};
  `}
`

const MobileResumeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 10px;
  margin-top: 16px;
  transition: all 200ms ease;
  animation: ${slideDown} 400ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 300ms;
  opacity: 0;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <Nav $scrolled={scrolled}>
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
            
            <MobileMenuBtn 
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </MobileMenuBtn>
          </NavActions>
        </NavContainer>
      </Nav>
      
      {/* Mobile Menu */}
      <MobileMenuOverlay 
        $open={mobileOpen} 
        onClick={() => setMobileOpen(false)}
      />
      <MobileMenu $open={mobileOpen}>
        <MobileCloseBtn 
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={20} />
        </MobileCloseBtn>
        
        {navItems.map((item, index) => (
          <MobileNavLink 
            key={item.path} 
            to={item.path}
            $active={location.pathname === item.path}
            $delay={`${(index + 1) * 50}ms`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        
        <MobileResumeButton 
          href="/files/Resume_Apratim.pdf" 
          target="_blank"
        >
          <FiDownload size={16} />
          Download Resume
        </MobileResumeButton>
      </MobileMenu>
    </>
  )
}

export default Navbar
