import React from 'react'
import styled from 'styled-components'
import { FiAward, FiTrendingUp, FiUsers, FiDownload } from 'react-icons/fi'
import { Container, Section, Grid, Card, Heading, Text, SectionTitle, SectionLabel, IconWrapper, LinkButton } from './ui'
import theme from '../styles/theme'

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.textSecondary};
    line-height: ${theme.lineHeights.relaxed};
    margin-bottom: 1rem;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`

const StatCard = styled(Card)`
  text-align: center;
  padding: 1.5rem;
`

const StatValue = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary600};
  margin-bottom: 0.25rem;
`

const StatLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
`

const HighlightCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const HighlightCard = styled(Card)`
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  
  &:hover {
    border-color: ${theme.colors.primary300};
  }
`

const HighlightContent = styled.div`
  h4 {
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors.textPrimary};
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.textSecondary};
    line-height: ${theme.lineHeights.normal};
  }
`

const highlights = [
  {
    icon: <FiTrendingUp />,
    title: '+24% Training Throughput',
    description: 'Optimized LLM fine-tuning pipelines with DeepSpeed and LoRA/PEFT techniques'
  },
  {
    icon: <FiAward />,
    title: '-15% P95 Latency',
    description: 'Deployed quantized models with ONNX Runtime for production inference'
  },
  {
    icon: <FiUsers />,
    title: '300+ Dataset Downloads',
    description: 'Published research dataset for hype detection in PubMed abstracts'
  }
]

function About() {
  return (
    <Section id="about" $py="6rem" $bg={theme.colors.white}>
      <Container>
        <SectionTitle>
          <SectionLabel>About Me</SectionLabel>
          <Heading>Building Intelligent Systems at Scale</Heading>
        </SectionTitle>
        
        <AboutContent>
          <AboutText>
            <h3>Machine Learning Engineer with a Ph.D. in Information Sciences</h3>
            <p>
              I'm currently a Machine Learning Engineer at Verizon, where I develop unified enterprise 
              agent platforms and LLM fine-tuning pipelines for network diagnostics and automation.
            </p>
            <p>
              My expertise spans the full ML lifecycle—from research and experimentation to 
              productization and deployment at scale. I specialize in large language models, 
              agentic AI systems, and building robust ML infrastructure.
            </p>
            <p>
              With a Ph.D. from the University of Illinois at Urbana-Champaign, I bring a strong 
              research foundation combined with hands-on engineering experience in production systems.
            </p>
            
            <StatsGrid>
              <StatCard>
                <StatValue>6+</StatValue>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>15M+</StatValue>
                <StatLabel>Records Processed</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>Ph.D.</StatValue>
                <StatLabel>Information Sciences</StatLabel>
              </StatCard>
              <StatCard>
                <StatValue>10+</StatValue>
                <StatLabel>Projects Shipped</StatLabel>
              </StatCard>
            </StatsGrid>
          </AboutText>
          
          <HighlightCards>
            {highlights.map((item, index) => (
              <HighlightCard key={index} $hover>
                <IconWrapper $bg={theme.colors.primary100} $color={theme.colors.primary600}>
                  {item.icon}
                </IconWrapper>
                <HighlightContent>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </HighlightContent>
              </HighlightCard>
            ))}
            
            <LinkButton
              href="/files/Resume_Apratim.pdf"
              target="_blank"
              $variant="primary"
              $size="lg"
              style={{ marginTop: '0.5rem' }}
            >
              <FiDownload /> Download Full Resume
            </LinkButton>
          </HighlightCards>
        </AboutContent>
      </Container>
    </Section>
  )
}

export default About

