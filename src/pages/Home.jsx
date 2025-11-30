import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Grid, Card, Tag, LinkButton } from '../components/ui'

const Hero = styled.section`
  padding: 64px 0 48px;
`

const HeroContent = styled.div`
  max-width: 600px;
`

const Greeting = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  display: block;
`

const Name = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 16px;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Bio = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`

const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.15s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`

const ViewAll = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    text-decoration: underline;
  }
`

const SkillCard = styled(Card)`
  padding: 12px;
`

const SkillTitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const ProjectCard = styled(Card)`
  padding: 14px;
  cursor: pointer;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const ProjectTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

const ProjectDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const skills = [
  { title: 'ML & LLMs', skills: ['PyTorch', 'LangChain', 'LangGraph', 'vLLM', 'RAG'] },
  { title: 'MLOps', skills: ['W&B', 'DeepSpeed', 'ONNX', 'Triton', 'Kubeflow'] },
  { title: 'Cloud', skills: ['AWS SageMaker', 'Bedrock', 'EKS', 'GCP Vertex AI'] },
  { title: 'Data', skills: ['PySpark', 'Pinecone', 'FAISS', 'PostgreSQL', 'Redis'] }
]

const featuredProjects = [
  {
    title: 'Prediction Market Agent',
    desc: 'AI-powered prediction market with Coinbase AgentKit, LangChain/LangGraph, and smart contracts on Base Sepolia.',
    tags: ['LangChain', 'Solidity', 'FastAPI'],
    link: 'https://github.com/apratim-mishra/prediction-market-agent'
  },
  {
    title: 'Realtime Phone Agent',
    desc: 'Voice AI phone agent using MLX, Whisper STT, Kokoro TTS, and LangGraph reasoning.',
    tags: ['MLX', 'Whisper', 'Twilio'],
    link: 'https://github.com/apratim-mishra/phone-calling-agent'
  },
  {
    title: 'PartSelect Chat Agent',
    desc: 'Dual-mode RAG AI assistant for appliance parts with multi-agent routing and hallucination guardrails.',
    tags: ['FastAPI', 'React', 'RAG'],
    link: 'https://github.com/apratim-mishra/partselect_chat'
  }
]

function Home() {
  return (
    <>
      <Hero>
        <Container>
          <HeroContent>
            <Greeting>Hello, I'm</Greeting>
            <Name>Apratim Mishra</Name>
            <Title>Machine Learning Engineer at <span>Verizon</span></Title>
            <Bio>
              Applied ML PhD with expertise in deploying petabyte-scale ML, NLP, and LLM systems.
              Specializing in agentic AI orchestration and enterprise model productization.
            </Bio>
            
            <SocialRow>
              <SocialLink href="https://github.com/apratim-mishra" target="_blank" aria-label="GitHub">
                <FiGithub size={16} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/apratim94" target="_blank" aria-label="LinkedIn">
                <FiLinkedin size={16} />
              </SocialLink>
              <SocialLink href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ" target="_blank" aria-label="Google Scholar">
                <SiGooglescholar size={16} />
              </SocialLink>
              <SocialLink href="mailto:apratim941208@gmail.com" aria-label="Email">
                <FiMail size={16} />
              </SocialLink>
            </SocialRow>
            
            <ButtonRow>
              <LinkButton as={Link} to="/portfolio" $variant="primary">
                View Portfolio <FiArrowRight size={14} />
              </LinkButton>
              <LinkButton href="/files/Resume_Apratim.pdf" target="_blank" $variant="secondary">
                <FiDownload size={14} /> Resume
              </LinkButton>
            </ButtonRow>
          </HeroContent>
        </Container>
      </Hero>
      
      <Section $py="32px">
        <Container>
          <SectionTitle>
            <h3>Skills</h3>
          </SectionTitle>
          <Grid $cols="repeat(4, 1fr)" $colsMd="repeat(2, 1fr)" $colsSm="1fr" $gap="12px">
            {skills.map((cat, i) => (
              <SkillCard key={i}>
                <SkillTitle>{cat.title}</SkillTitle>
                <SkillTags>
                  {cat.skills.map((skill, j) => (
                    <Tag key={j}>{skill}</Tag>
                  ))}
                </SkillTags>
              </SkillCard>
            ))}
          </Grid>
        </Container>
      </Section>
      
      <Section $py="32px">
        <Container>
          <SectionTitle>
            <h3>Featured Projects</h3>
            <ViewAll to="/portfolio">View all <FiArrowRight size={12} /></ViewAll>
          </SectionTitle>
          <Grid $cols="repeat(3, 1fr)" $colsMd="repeat(2, 1fr)" $colsSm="1fr" $gap="12px">
            {featuredProjects.map((project, i) => (
              <ProjectCard 
                key={i} 
                as="a" 
                href={project.link} 
                target="_blank"
                $hover
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
                <ProjectTags>
                  {project.tags.map((tag, j) => (
                    <Tag key={j}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectCard>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Home

