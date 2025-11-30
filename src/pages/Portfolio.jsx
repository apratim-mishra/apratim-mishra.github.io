import React, { useState } from 'react'
import styled from 'styled-components'
import { FiGithub, FiExternalLink, FiBriefcase, FiCode } from 'react-icons/fi'
import { Container, Section, Grid, Card, Tag } from '../components/ui'

const PageHeader = styled.div`
  padding: 32px 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
  }
  
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid ${props => props.$active 
    ? (({ theme }) => theme.colors.primary) 
    : (({ theme }) => theme.colors.border)};
  background: ${props => props.$active 
    ? (({ theme }) => theme.colors.primaryLight) 
    : 'transparent'};
  color: ${props => props.$active 
    ? (({ theme }) => theme.colors.primary) 
    : (({ theme }) => theme.colors.textSecondary)};
  transition: all 0.15s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const ProjectCard = styled(Card)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${props => props.$type === 'professional' 
    ? (({ theme }) => theme.colors.primary) 
    : (({ theme }) => theme.colors.accent)};
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`

const ProjectTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 8px;
`

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  transition: color 0.15s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ProjectDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 12px;
  flex: 1;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const TypeBadge = styled.span`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 4px;
  display: block;
`

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
  
  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <Container>
      <PageHeader>
        <h1>Portfolio</h1>
        <p>Projects in ML systems, LLMs, and agentic AI applications</p>
      </PageHeader>
      
      <FilterRow>
        <FilterBtn $active={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </FilterBtn>
        <FilterBtn $active={filter === 'professional'} onClick={() => setFilter('professional')}>
          <FiBriefcase size={12} /> Professional
        </FilterBtn>
        <FilterBtn $active={filter === 'personal'} onClick={() => setFilter('personal')}>
          <FiCode size={12} /> Personal
        </FilterBtn>
      </FilterRow>
      
      <Section $py="0">
        <Grid $cols="repeat(2, 1fr)" $colsSm="1fr" $gap="12px">
          {filtered.map((project, i) => (
            <ProjectCard key={i} $type={project.type} $hover>
              <TypeBadge>{project.type}</TypeBadge>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" aria-label="GitHub">
                      <FiGithub />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectHeader>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectTags>
                {project.tags.map((tag, j) => (
                  <Tag key={j}>{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectCard>
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Portfolio

