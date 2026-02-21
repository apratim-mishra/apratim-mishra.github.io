import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Grid, Card, Tag, LinkButton, SectionHeader, IconBox } from '../components/ui'
import { useInView, useStaggeredInView } from '../hooks/useInView'

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

// Hero Section
const Hero = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 0 80px;
  }
`

const HeroContent = styled.div`
  max-width: 700px;
  position: relative;
  z-index: 1;
`

const HeroGreeting = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 100ms;
`

const HeroName = styled.h1`
  font-size: 56px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 200ms;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
  
  @media (max-width: 480px) {
    font-size: 36px;
  }
`

const HeroTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
  line-height: 1.4;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 300ms;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const HeroBio = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 550px;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 400ms;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const SocialRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 500ms;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
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

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 600ms;
`

// Skills Section
const SkillsSection = styled(Section)`
  background: ${({ theme }) => theme.colors.gradientSubtle};
`

const AnimatedSectionHeader = styled(SectionHeader)`
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'});
  transition: all 600ms cubic-bezier(0, 0, 0.2, 1);
`

const SkillCard = styled(Card)`
  padding: 24px;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'});
  transition: all 500ms cubic-bezier(0, 0, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay || '0ms'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`

const SkillIcon = styled(IconBox)`
  margin-bottom: 16px;
`

const SkillTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

// Projects Section
const ProjectsSection = styled(Section)``

const SectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'});
  transition: all 600ms cubic-bezier(0, 0, 0.2, 1);
  
  h3 {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.025em;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    
    h3 {
      font-size: 24px;
    }
  }
`

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 200ms ease;
  
  &:hover {
    gap: 10px;
  }
`

const ProjectCard = styled.a`
  display: block;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition-delay: ${({ $delay }) => $delay || '0ms'};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.lg}, ${({ theme }) => theme.shadows.glow};
  }
  
  &:active {
    transform: translateY(-2px);
  }
`

const ProjectTitle = styled.h4`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0;
    transform: translateX(-5px);
    transition: all 200ms ease;
  }
  
  ${ProjectCard}:hover & svg {
    opacity: 1;
    transform: translateX(0);
  }
`

const ProjectDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

// Data
const skills = [
  {
    title: 'ML & LLMs',
    icon: '🧠',
    skills: ['PyTorch', 'LangChain', 'LangGraph', 'vLLM', 'RAG', 'Transformers', 'LiteLLM', 'MCP', 'Unsloth']
  },
  {
    title: 'MLOps',
    icon: '⚙️',
    skills: ['W&B', 'DeepSpeed', 'ONNX', 'TensorRT', 'Triton', 'Kubeflow', 'MLflow', 'OpenAI SDK', 'Weaviate']
  },
  {
    title: 'Cloud & Infra',
    icon: '☁️',
    skills: ['AWS SageMaker', 'Bedrock', 'EKS', 'GCP Vertex AI', 'Docker', 'Kubernetes']
  },
  {
    title: 'Data & Storage',
    icon: '💾',
    skills: ['PySpark', 'Pinecone', 'FAISS', 'PostgreSQL', 'Redis', 'MongoDB']
  }
]

const featuredProjects = [
  {
    title: 'Prediction Market Agent',
    desc: 'AI prediction market with Coinbase AgentKit, LangChain/LangGraph, and smart contracts on Base Sepolia.',
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
  // Scroll animations
  const [skillsRef, skillsVisible] = useInView({ threshold: 0.1 })
  const { containerRef: projectsRef, itemsInView: projectsVisible, isContainerInView: projectsSectionVisible } = useStaggeredInView(featuredProjects.length, { staggerDelay: 100 })

  return (
    <>
      {/* Hero Section */}
      <Hero>
        <Container>
          <HeroContent>
            <HeroGreeting>Hello, I'm</HeroGreeting>
            <HeroName>Apratim Mishra</HeroName>
            <HeroTitle>
              AI Researcher at <span>Toyota</span>
            </HeroTitle>
            <HeroBio>
              Applied ML PhD with expertise in deploying petabyte-scale ML, NLP, and LLM systems.
              Specializing in agentic AI orchestration, enterprise model productization, and building
              intelligent systems that solve complex problems.
            </HeroBio>
            
            <SocialRow>
              <SocialLink href="https://github.com/apratim-mishra" target="_blank" aria-label="GitHub">
                <FiGithub size={20} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/apratim94" target="_blank" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </SocialLink>
              <SocialLink href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ" target="_blank" aria-label="Google Scholar">
                <SiGooglescholar size={20} />
              </SocialLink>
              <SocialLink href="mailto:apratim941208@gmail.com" aria-label="Email">
                <FiMail size={20} />
              </SocialLink>
            </SocialRow>
            
            <ButtonRow>
              <LinkButton as={Link} to="/portfolio" $variant="primary" $size="lg">
                View Portfolio <FiArrowRight size={16} />
              </LinkButton>
              <LinkButton href="/files/Resume_Apratim.pdf" target="_blank" $variant="secondary" $size="lg">
                <FiDownload size={16} /> Resume
              </LinkButton>
            </ButtonRow>
          </HeroContent>
        </Container>
      </Hero>
      
      {/* Skills Section */}
      <SkillsSection $py="80px" ref={skillsRef}>
        <Container>
          <AnimatedSectionHeader $accent $visible={skillsVisible}>
            <h2>Skills & Technologies</h2>
            <p>Core competencies in machine learning, cloud infrastructure, and data engineering</p>
          </AnimatedSectionHeader>
          
          <Grid $cols="repeat(4, 1fr)" $colsMd="repeat(2, 1fr)" $colsSm="1fr" $gap="20px">
            {skills.map((cat, i) => (
              <SkillCard 
                key={i} 
                $visible={skillsVisible}
                $delay={`${i * 100}ms`}
              >
                <SkillIcon $size="48px" $rounded="12px">
                  <span style={{ fontSize: '24px' }}>{cat.icon}</span>
                </SkillIcon>
                <SkillTitle>{cat.title}</SkillTitle>
                <SkillTags>
                  {cat.skills.map((skill, j) => (
                    <Tag key={j} $variant="outline">{skill}</Tag>
                  ))}
                </SkillTags>
              </SkillCard>
            ))}
          </Grid>
        </Container>
      </SkillsSection>
      
      {/* Featured Projects Section */}
      <ProjectsSection $py="80px" ref={projectsRef}>
        <Container>
          <SectionTitleRow $visible={projectsSectionVisible}>
            <h3>Featured Projects</h3>
            <ViewAllLink to="/portfolio">
              View all projects <FiArrowRight size={16} />
            </ViewAllLink>
          </SectionTitleRow>
          
          <Grid $cols="repeat(3, 1fr)" $colsMd="repeat(2, 1fr)" $colsSm="1fr" $gap="20px">
            {featuredProjects.map((project, i) => (
              <ProjectCard 
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                $visible={projectsVisible[i]}
                $delay={`${i * 100}ms`}
              >
                <ProjectTitle>
                  {project.title}
                  <FiExternalLink size={14} />
                </ProjectTitle>
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
      </ProjectsSection>
    </>
  )
}

export default Home
