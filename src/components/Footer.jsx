import React from 'react'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container } from './ui'

const FooterSection = styled.footer`
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`

const Copyright = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  transition: color 0.15s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

function Footer() {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <Copyright>
            2025 Apratim Mishra
          </Copyright>
          <SocialLinks>
            <SocialLink href="https://github.com/apratim-mishra" target="_blank" aria-label="GitHub">
              <FiGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/apratim94" target="_blank" aria-label="LinkedIn">
              <FiLinkedin />
            </SocialLink>
            <SocialLink href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ" target="_blank" aria-label="Google Scholar">
              <SiGooglescholar />
            </SocialLink>
            <SocialLink href="mailto:apratim941208@gmail.com" aria-label="Email">
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterSection>
  )
}

export default Footer
