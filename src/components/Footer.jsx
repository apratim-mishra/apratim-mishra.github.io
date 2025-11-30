import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiHeart } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container } from './ui'

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`

// Contact CTA Section
const ContactSection = styled.section`
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.gradientSubtle};
    opacity: 0.5;
  }
`

const ContactContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
`

const ContactLabel = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
  letter-spacing: -0.03em;
  
  @media (max-width: 640px) {
    font-size: 28px;
  }
`

const ContactDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 32px;
  
  @media (max-width: 640px) {
    font-size: 15px;
  }
`

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  font-size: 15px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg}, ${({ theme }) => theme.shadows.glow};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    transition: transform 200ms ease;
  }
  
  &:hover svg {
    transform: translate(2px, -2px);
  }
`

// Footer Section
const FooterSection = styled.footer`
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const FooterLeft = styled.div``

const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const FooterNav = styled.nav`
  display: flex;
  gap: 24px;
  
  @media (max-width: 480px) {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const FooterLink = styled(Link)`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 200ms ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
`

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <>
      {/* Contact CTA */}
      <ContactSection>
        <Container>
          <ContactContent>
            <ContactLabel>Get in Touch</ContactLabel>
            <ContactTitle>Let's Build Something Amazing</ContactTitle>
            <ContactDesc>
              I'm always interested in discussing ML projects, research collaborations, 
              or opportunities to build intelligent systems. Feel free to reach out!
            </ContactDesc>
            <ContactButton href="mailto:apratim941208@gmail.com">
              <FiMail size={18} />
              Say Hello
              <FiArrowUpRight size={16} />
            </ContactButton>
          </ContactContent>
        </Container>
      </ContactSection>
      
      {/* Main Footer */}
      <FooterSection>
        <Container>
          <FooterContent>
            <FooterLeft>
              <Copyright>
                {currentYear} Apratim Mishra. Built with <FiHeart size={12} /> and React.
              </Copyright>
            </FooterLeft>
            
            <FooterNav>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/career">Career</FooterLink>
              <FooterLink to="/research">Research</FooterLink>
            </FooterNav>
            
            <SocialLinks>
              <SocialLink 
                href="https://github.com/apratim-mishra" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/apratim94" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </SocialLink>
              <SocialLink 
                href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Google Scholar"
              >
                <SiGooglescholar size={18} />
              </SocialLink>
              <SocialLink 
                href="mailto:apratim941208@gmail.com"
                aria-label="Email"
              >
                <FiMail size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterContent>
        </Container>
      </FooterSection>
    </>
  )
}

export default Footer
