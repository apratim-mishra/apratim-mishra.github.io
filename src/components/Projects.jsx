import React, { useState } from 'react'
import styled from 'styled-components'
import { FiGithub, FiExternalLink, FiFolder, FiBriefcase, FiCode } from 'react-icons/fi'
import { Container, Section, Card, Heading, Text, SectionTitle, SectionLabel, Tag, Button } from './ui'
import theme from '../styles/theme'

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.full};
  border: 1px solid ${props => props.$active ? theme.colors.primary600 : theme.colors.black300};
  background: ${props => props.$active ? theme.colors.primary600 : 'transparent'};
  color: ${props => props.$active ? theme.colors.white : theme.colors.textSecondary};
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    border-color: ${theme.colors.primary600};
    color: ${props => props.$active ? theme.colors.white : theme.colors.primary600};
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(Card)`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  border-left: 4px solid ${props => props.$type === 'professional' ? theme.colors.primary500 : theme.colors.accent500};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const ProjectIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${theme.radii.lg};
  background: ${props => props.$type === 'professional' ? theme.colors.primary100 : theme.colors.accent100};
  color: ${props => props.$type === 'professional' ? theme.colors.primary600 : theme.colors.accent600};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`

const ProjectLink = styled.a`
  color: ${theme.colors.textMuted};
  font-size: 1.25rem;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary600};
  }
`

const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.75rem;
`

const ProjectDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  line-height: ${theme.lineHeights.relaxed};
  flex: 1;
  margin-bottom: 1.25rem;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const projects = [
  {
    title: 'Enterprise Agent Platform',
    description: 'Built a unified enterprise agent platform for domain teams to compose, version, and deploy multi-agent workflows. Includes Agent Builder, Connector Registry for APIs/vector DBs/RAG endpoints, and ChatKit UI toolkit.',
    type: 'professional',
    tags: ['AWS Bedrock', 'LangGraph', 'FastAPI', 'EKS', 'Redis'],
    github: null,
    demo: null
  },
  {
    title: 'LLM Fine-tuning Pipelines',
    description: 'Designed end-to-end LLM fine-tuning and inference pipelines for network diagnostics. Fine-tuned instruction models via SFT/RFT with DeepSpeed, LoRA/PEFT. Achieved +24% training throughput and -15% p95 latency.',
    type: 'professional',
    tags: ['SageMaker', 'DeepSpeed', 'ONNX', 'Triton', 'Kubernetes'],
    github: null,
    demo: null
  },
  {
    title: 'Prediction Market Agent',
    description: 'AI-powered prediction market agent built with Coinbase AgentKit for Base Sepolia testnet. Features natural language interface with LangChain/LangGraph, smart contracts, CDP wallet integration, and multi-source price oracles.',
    type: 'personal',
    tags: ['LangChain', 'Solidity', 'FastAPI', 'React', 'Web3'],
    github: 'https://github.com/apratim-mishra/prediction-market-agent',
    demo: null
  },
  {
    title: 'Realtime Phone Agent System',
    description: 'AI phone agent powered by open-source models on Apple Silicon via MLX. Handles inbound/outbound calls with Twilio, Whisper STT, Kokoro TTS, LangGraph reasoning, and Pinecone semantic search.',
    type: 'personal',
    tags: ['MLX', 'Whisper', 'LangGraph', 'Pinecone', 'Twilio'],
    github: 'https://github.com/apratim-mishra/phone-calling-agent',
    demo: null
  },
  {
    title: 'Citation Recommendation System',
    description: 'Hybrid citation recommendations system combining GNN-based link prediction with LLM-derived semantic embeddings. Achieved 25% lift over BM25 baseline. Deployed on AWS SageMaker via Airflow orchestration.',
    type: 'professional',
    tags: ['PyTorch', 'GNN', 'SageMaker', 'Airflow', 'PySpark'],
    github: null,
    demo: null
  },
  {
    title: 'Notion Agentic AI Assistant',
    description: 'RAG-based semantic search system using LangChain and FAISS with OpenAI/HuggingFace SDKs. Features automated serverless deployment and LLMOps pipelines for end-to-end ingestion and response generation.',
    type: 'personal',
    tags: ['LangChain', 'FAISS', 'OpenAI', 'Flask', 'RAG'],
    github: 'https://github.com/apratim-mishra/notion_',
    demo: null
  },
  {
    title: 'PartSelect Chat Agent',
    description: 'Dual-mode RAG-based AI assistant for appliance parts with FastAPI, WebSockets, and React. Multi-agent mode with triage, specialist agents, hallucination guardrails, and function-calling tools.',
    type: 'personal',
    tags: ['FastAPI', 'React', 'WebSockets', 'RAG', 'Docker'],
    github: null,
    demo: null
  },
  {
    title: 'Yelp Restaurant GNN Recommendations',
    description: 'Graph Neural Network based recommendation system for restaurants using the Yelp dataset. Implements heterogeneous graph models with GAT and Transformer layers for personalized recommendations.',
    type: 'personal',
    tags: ['PyTorch Geometric', 'GNN', 'Python', 'Recommendation'],
    github: 'https://github.com/apratim-mishra/gnn_yelp',
    demo: null
  }
]

function Projects() {
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter)

  return (
    <Section id="projects" $py="6rem" $bg={theme.colors.white}>
      <Container>
        <SectionTitle>
          <SectionLabel>Portfolio</SectionLabel>
          <Heading>Featured Projects</Heading>
          <Text $color={theme.colors.textSecondary} $m="1rem 0 0 0" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            A selection of projects showcasing my work in ML systems, LLMs, and agentic AI applications.
          </Text>
        </SectionTitle>
        
        <FilterButtons>
          <FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>
            All Projects
          </FilterButton>
          <FilterButton $active={filter === 'professional'} onClick={() => setFilter('professional')}>
            <FiBriefcase style={{ marginRight: '0.5rem' }} />
            Professional
          </FilterButton>
          <FilterButton $active={filter === 'personal'} onClick={() => setFilter('personal')}>
            <FiCode style={{ marginRight: '0.5rem' }} />
            Personal
          </FilterButton>
        </FilterButtons>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} $type={project.type}>
              <ProjectHeader>
                <ProjectIcon $type={project.type}>
                  {project.type === 'professional' ? <FiBriefcase /> : <FiFolder />}
                </ProjectIcon>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" aria-label="GitHub">
                      <FiGithub />
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" aria-label="Demo">
                      <FiExternalLink />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectHeader>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTags>
                {project.tags.map((tag, i) => (
                  <Tag key={i} $bg={theme.colors.black100} $color={theme.colors.textSecondary}>
                    {tag}
                  </Tag>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

export default Projects

