import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FiGithub, FiBriefcase, FiCode, FiExternalLink } from 'react-icons/fi'
import { Container, Section, Grid, Tag, SectionHeader } from '../components/ui'
import { useInView, useStaggeredInView } from '../hooks/useInView'

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

// Page Header
const PageHeader = styled.div`
  padding: 48px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 40px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  
  h1 {
    font-size: 36px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
    letter-spacing: -0.03em;
    
    @media (max-width: 640px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    max-width: 500px;
  }
`

// Filter
const FilterRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 100ms;
  flex-wrap: wrap;
`

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.border};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primaryLight : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primaryText : theme.colors.textSecondary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: opacity 200ms ease;
    z-index: 0;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active, theme }) => 
      $active ? theme.colors.primaryText : theme.colors.text};
    background: ${({ theme }) => theme.colors.bgHover};
  }
  
  svg, span {
    position: relative;
    z-index: 1;
  }
`

// Stats
const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 150ms;
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`

const StatItem = styled.div`
  span {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
    
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

// Project Card
const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 4px solid ${({ $type, theme }) => 
    $type === 'professional' ? theme.colors.primary : theme.colors.accent};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${scaleIn} 500ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:hover {
    border-color: ${({ $type, theme }) => 
      $type === 'professional' ? theme.colors.primary : theme.colors.accent};
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ProjectType = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ $type, theme }) => 
    $type === 'professional' ? theme.colors.primary : theme.colors.accent};
  margin-bottom: 12px;
  
  svg {
    width: 12px;
    height: 12px;
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`

const ProjectTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgHover};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all 200ms ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`

const ProjectDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

// Empty State
const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

// Data
const projects = [
  {
    title: 'Enterprise Agent Platform',
    desc: 'Unified enterprise agent platform for multi-agent workflows with Agent Builder, Connector Registry for APIs/vector DBs/RAG, and ChatKit UI.',
    type: 'professional',
    tags: ['AWS Bedrock', 'LangGraph', 'FastAPI', 'EKS'],
    github: null
  },
  {
    title: 'LLM Fine-tuning Pipelines',
    desc: 'End-to-end LLM fine-tuning and inference for network diagnostics. SFT/RFT with DeepSpeed, LoRA/PEFT. +24% throughput, -15% p95 latency.',
    type: 'professional',
    tags: ['SageMaker', 'DeepSpeed', 'ONNX', 'Triton'],
    github: null
  },
  {
    title: 'Citation Recommendation System',
    desc: 'Hybrid citation recommendations with GNN link prediction and LLM semantic embeddings. 25% lift over BM25 baseline.',
    type: 'professional',
    tags: ['PyTorch', 'GNN', 'SageMaker', 'Airflow'],
    github: null
  },
  {
    title: 'Prediction Market Agent',
    desc: 'AI prediction market with Coinbase AgentKit on Base Sepolia. Natural language interface, smart contracts, CDP wallet, multi-source price oracles.',
    type: 'personal',
    tags: ['LangChain', 'LangGraph', 'Solidity', 'React'],
    github: 'https://github.com/apratim-mishra/prediction-market-agent'
  },
  {
    title: 'Realtime Phone Agent System',
    desc: 'AI phone agent on Apple Silicon via MLX. Inbound/outbound calls with Twilio, Whisper STT, Kokoro TTS, LangGraph reasoning, Pinecone search.',
    type: 'personal',
    tags: ['MLX', 'Whisper', 'LangGraph', 'Pinecone', 'Twilio'],
    github: 'https://github.com/apratim-mishra/phone-calling-agent'
  },
  {
    title: 'PartSelect Chat Agent',
    desc: 'Dual-mode RAG AI assistant for appliance parts. Multi-agent routing, hallucination guardrails, function-calling tools, DeepSeek/OpenAI fallback.',
    type: 'personal',
    tags: ['FastAPI', 'React', 'WebSockets', 'RAG'],
    github: 'https://github.com/apratim-mishra/partselect_chat'
  },
  {
    title: 'Notion Agentic AI Assistant',
    desc: 'RAG semantic search with LangChain and FAISS. OpenAI/HuggingFace SDKs. Serverless deployment and LLMOps pipelines.',
    type: 'personal',
    tags: ['LangChain', 'FAISS', 'OpenAI', 'Flask'],
    github: 'https://github.com/apratim-mishra/notion_'
  },
  {
    title: 'Yelp Restaurant GNN Recommendations',
    desc: 'Graph Neural Network recommendations using Yelp dataset. Heterogeneous graph models with GAT and Transformer layers.',
    type: 'personal',
    tags: ['PyTorch Geometric', 'GNN', 'Python'],
    github: 'https://github.com/apratim-mishra/gnn_yelp'
  }
]

function Portfolio() {
  const [filter, setFilter] = useState('all')
  
  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter)
  
  const professionalCount = projects.filter(p => p.type === 'professional').length
  const personalCount = projects.filter(p => p.type === 'personal').length

  return (
    <Container>
      <PageHeader>
        <h1>Portfolio</h1>
        <p>
          Projects spanning enterprise ML systems, LLM applications, and AI agents
          built throughout my career
        </p>
      </PageHeader>
      
      <StatsRow>
        <StatItem>
          <span>{projects.length}</span>
          <p>Total Projects</p>
        </StatItem>
        <StatItem>
          <span>{professionalCount}</span>
          <p>Professional</p>
        </StatItem>
        <StatItem>
          <span>{personalCount}</span>
          <p>Personal</p>
        </StatItem>
      </StatsRow>
      
      <FilterRow>
        <FilterBtn 
          $active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All Projects
        </FilterBtn>
        <FilterBtn 
          $active={filter === 'professional'} 
          onClick={() => setFilter('professional')}
        >
          <FiBriefcase size={14} />
          <span>Professional</span>
        </FilterBtn>
        <FilterBtn 
          $active={filter === 'personal'} 
          onClick={() => setFilter('personal')}
        >
          <FiCode size={14} />
          <span>Personal</span>
        </FilterBtn>
      </FilterRow>
      
      <Section $py="0">
        {filtered.length > 0 ? (
          <Grid $cols="repeat(2, 1fr)" $colsSm="1fr" $gap="20px">
            {filtered.map((project, i) => (
              <ProjectCard 
                key={`${filter}-${i}`}
                $type={project.type}
                $delay={`${i * 75}ms`}
              >
                <ProjectType $type={project.type}>
                  {project.type === 'professional' ? (
                    <>
                      <FiBriefcase /> Professional
                    </>
                  ) : (
                    <>
                      <FiCode /> Personal
                    </>
                  )}
                </ProjectType>
                
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectLinks>
                    {project.github && (
                      <ProjectLink 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <FiGithub size={16} />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectHeader>
                
                <ProjectDesc>{project.desc}</ProjectDesc>
                
                <ProjectTags>
                  {project.tags.map((tag, j) => (
                    <Tag key={j} $variant="outline">{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectCard>
            ))}
          </Grid>
        ) : (
          <EmptyState>
            <h4>No projects found</h4>
            <p>Try adjusting your filter</p>
          </EmptyState>
        )}
      </Section>
    </Container>
  )
}

export default Portfolio
