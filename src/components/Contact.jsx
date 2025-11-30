import React from 'react'
import styled from 'styled-components'
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Card, Heading, Text, SectionTitle, SectionLabel, LinkButton } from './ui'
import theme from '../styles/theme'

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  h3 {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.textSecondary};
    line-height: ${theme.lineHeights.relaxed};
    margin-bottom: 2rem;
  }
`

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.white};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.black200};
  transition: all ${theme.transitions.base};
  
  &:hover {
    border-color: ${theme.colors.primary300};
    box-shadow: ${theme.shadows.md};
    transform: translateX(4px);
  }
`

const ContactIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${theme.radii.lg};
  background: ${props => props.$bg || theme.colors.primary100};
  color: ${props => props.$color || theme.colors.primary600};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
`

const ContactText = styled.div`
  h4 {
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.textMuted};
    margin-bottom: 0.125rem;
  }
  
  p {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.textPrimary};
    margin: 0;
  }
`

const QuickLinks = styled(Card)`
  padding: 2rem;
  text-align: center;
  
  h3 {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textSecondary};
    margin-bottom: 1.5rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.black100};
  color: ${theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all ${theme.transitions.base};
  
  &:hover {
    background: ${theme.colors.primary600};
    color: ${theme.colors.white};
    transform: translateY(-3px);
  }
`

const EmailCTA = styled(LinkButton)`
  width: 100%;
  justify-content: center;
`

function Contact() {
  return (
    <Section id="contact" $py="6rem" $bg={theme.colors.bgPrimary}>
      <Container>
        <SectionTitle>
          <SectionLabel>Get in Touch</SectionLabel>
          <Heading>Let's Connect</Heading>
          <Text $color={theme.colors.textSecondary} $m="1rem 0 0 0" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Interested in collaborating or have questions? I'd love to hear from you.
          </Text>
        </SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            <h3>Contact Information</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about machine learning and AI.
            </p>
            
            <ContactItems>
              <ContactItem href="mailto:apratim941208@gmail.com">
                <ContactIcon $bg={theme.colors.primary100} $color={theme.colors.primary600}>
                  <FiMail />
                </ContactIcon>
                <ContactText>
                  <h4>Email</h4>
                  <p>apratim941208@gmail.com</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem href="https://www.linkedin.com/in/apratim94" target="_blank">
                <ContactIcon $bg="#E8F4FE" $color="#0077B5">
                  <FiLinkedin />
                </ContactIcon>
                <ContactText>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/apratim94</p>
                </ContactText>
              </ContactItem>
              
              <ContactItem as="div" style={{ cursor: 'default' }}>
                <ContactIcon $bg={theme.colors.accent100} $color={theme.colors.accent600}>
                  <FiMapPin />
                </ContactIcon>
                <ContactText>
                  <h4>Location</h4>
                  <p>Irving, TX</p>
                </ContactText>
              </ContactItem>
            </ContactItems>
          </ContactInfo>
          
          <QuickLinks>
            <h3>Quick Links</h3>
            <p>Find me on these platforms</p>
            
            <SocialLinks>
              <SocialLink href="https://github.com/apratim-mishra" target="_blank" aria-label="GitHub">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/apratim94" target="_blank" aria-label="LinkedIn">
                <FiLinkedin />
              </SocialLink>
              <SocialLink href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en" target="_blank" aria-label="Google Scholar">
                <SiGooglescholar />
              </SocialLink>
              <SocialLink href="mailto:apratim941208@gmail.com" aria-label="Email">
                <FiMail />
              </SocialLink>
            </SocialLinks>
            
            <EmailCTA href="mailto:apratim941208@gmail.com" $variant="primary" $size="lg">
              <FiSend /> Send an Email
            </EmailCTA>
          </QuickLinks>
        </ContactGrid>
      </Container>
    </Section>
  )
}

export default Contact

