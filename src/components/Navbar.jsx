import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { Container, LinkButton } from './ui'
import theme from '../styles/theme'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? `1px solid ${theme.colors.black200}` : 'none'};
  transition: all ${theme.transitions.base};
`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`

const Logo = styled.a`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    background: linear-gradient(135deg, ${theme.colors.primary600}, ${theme.colors.accent600});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textSecondary};
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary600};
  }
`

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${theme.colors.textPrimary};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  padding: 2rem;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
  }
`

const MobileNavLink = styled.a`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textPrimary};
  padding: 0.75rem 0;
  border-bottom: 1px solid ${theme.colors.black200};
`

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#hero">
          <span>AM</span>
        </Logo>
        
        <NavLinks>
          {navItems.map(item => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <LinkButton
            href="/files/Resume_Apratim.pdf"
            target="_blank"
            $variant="primary"
            $size="sm"
          >
            <FiDownload /> Resume
          </LinkButton>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </NavContainer>
      
      <MobileMenu $isOpen={mobileMenuOpen}>
        {navItems.map(item => (
          <MobileNavLink 
            key={item.label} 
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <LinkButton
          href="/files/Resume_Apratim.pdf"
          target="_blank"
          $variant="primary"
          $size="md"
          style={{ marginTop: '1rem' }}
        >
          <FiDownload /> Download Resume
        </LinkButton>
      </MobileMenu>
    </Nav>
  )
}

export default Navbar

