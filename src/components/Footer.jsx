import React from 'react'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container } from './ui'
import theme from '../styles/theme'

const FooterSection = styled.footer`
  background: ${theme.colors.black900};
  padding: 3rem 0 2rem;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const FooterLogo = styled.span`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  background: linear-gradient(135deg, ${theme.colors.primary400}, ${theme.colors.accent400});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`

const FooterTagline = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.black400};
  margin-bottom: 1.5rem;
  max-width: 400px;
`

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const FooterLink = styled.a`
  color: ${theme.colors.black400};
  font-size: 1.25rem;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary400};
  }
`

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const FooterNavLink = styled.a`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.black400};
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.white};
  }
`

const FooterDivider = styled.hr`
  width: 100%;
  max-width: 600px;
  border: none;
  height: 1px;
  background: ${theme.colors.black700};
  margin-bottom: 1.5rem;
`

const FooterCopyright = styled.p`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.black500};
  
  span {
    color: ${theme.colors.error500};
  }
`

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterLogo>Apratim Mishra</FooterLogo>
          <FooterTagline>
            Machine Learning Engineer building intelligent systems at scale
          </FooterTagline>
          
          <FooterLinks>
            <FooterLink href="https://github.com/apratim-mishra" target="_blank" aria-label="GitHub">
              <FiGithub />
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/apratim94" target="_blank" aria-label="LinkedIn">
              <FiLinkedin />
            </FooterLink>
            <FooterLink href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en" target="_blank" aria-label="Google Scholar">
              <SiGooglescholar />
            </FooterLink>
            <FooterLink href="mailto:apratim941208@gmail.com" aria-label="Email">
              <FiMail />
            </FooterLink>
          </FooterLinks>
          
          <FooterNav>
            <FooterNavLink href="#about">About</FooterNavLink>
            <FooterNavLink href="#skills">Skills</FooterNavLink>
            <FooterNavLink href="#projects">Projects</FooterNavLink>
            <FooterNavLink href="#experience">Experience</FooterNavLink>
            <FooterNavLink href="#publications">Publications</FooterNavLink>
            <FooterNavLink href="#contact">Contact</FooterNavLink>
          </FooterNav>
          
          <FooterDivider />
          
          <FooterCopyright>
            © {currentYear} Apratim Mishra. Built with <span><FiHeart style={{ verticalAlign: 'middle' }} /></span> using React
          </FooterCopyright>
        </FooterContent>
      </Container>
    </FooterSection>
  )
}

export default Footer

