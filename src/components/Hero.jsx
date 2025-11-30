import React from 'react'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Flex, Text, LinkButton } from './ui'
import theme from '../styles/theme'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, ${theme.colors.bgPrimary} 0%, ${theme.colors.primary100} 100%);
  overflow: hidden;
  padding-top: 72px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 80%;
    height: 150%;
    background: radial-gradient(circle, ${theme.colors.primary200}40 0%, transparent 70%);
    pointer-events: none;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`

const Greeting = styled.span`
  display: inline-block;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.primary600};
  margin-bottom: 1rem;
`

const Name = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  line-height: 1.1;
  margin-bottom: 0.5rem;
`

const Title = styled.h2`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  
  span {
    color: ${theme.colors.primary600};
    font-weight: ${theme.fontWeights.semibold};
  }
`

const Description = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  line-height: ${theme.lineHeights.relaxed};
  max-width: 600px;
  margin-bottom: 2rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.white};
  color: ${theme.colors.textSecondary};
  font-size: 1.25rem;
  box-shadow: ${theme.shadows.sm};
  transition: all ${theme.transitions.base};
  
  &:hover {
    background: ${theme.colors.primary600};
    color: ${theme.colors.white};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.md};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const ScrollIndicator = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.textMuted};
  font-size: ${theme.fontSizes.sm};
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`

function Hero() {
  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent>
          <Greeting>Hello, I'm</Greeting>
          <Name>Apratim Mishra</Name>
          <Title>
            Machine Learning Engineer at <span>Verizon</span>
          </Title>
          <Description>
            Applied Machine Learning Ph.D. professional with expertise in developing and deploying 
            petabyte-scale ML, NLP, and LLM-based models. Specializing in agentic AI orchestration 
            and model productization for enterprise applications.
          </Description>
          
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
          
          <ButtonGroup>
            <LinkButton href="#projects" $variant="primary" $size="lg">
              View My Work
            </LinkButton>
            <LinkButton href="#contact" $variant="secondary" $size="lg">
              Get in Touch
            </LinkButton>
          </ButtonGroup>
        </HeroContent>
      </Container>
      
      <ScrollIndicator href="#about">
        <span>Scroll</span>
        <FiArrowDown />
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero

