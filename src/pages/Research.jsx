import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FiBookOpen, FiExternalLink, FiFileText, FiDownload, FiUsers } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Card, LinkButton, IconBox, Grid, Tag } from '../components/ui'
import { useInView } from '../hooks/useInView'

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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

// Page Header
const PageHeader = styled.div`
  padding: 48px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
  
  div {
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
    }
  }
`

// Stats
const StatsRow = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: 100ms;
  
  @media (max-width: 640px) {
    gap: 24px;
  }
`

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const StatIcon = styled(IconBox)`
  width: 48px;
  height: 48px;
  font-size: 20px;
`

const StatContent = styled.div`
  span {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
  }
  
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

// Section Title
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`

// Publication Card
const PubCard = styled(Card)`
  padding: 0;
  border-radius: 16px;
  overflow: hidden;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const PubCardInner = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

const PubIcon = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
`

const PubContent = styled.div`
  flex: 1;
  min-width: 0;
`

const PubTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  
  @media (max-width: 640px) {
    font-size: 15px;
  }
`

const PubMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`

const PubAuthors = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

const PubVenue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`

const PubDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 16px;
`

const PubTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`

const PubLinks = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const PubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bgHover};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 200ms ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }
`

// Research Interests
const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const InterestCard = styled(Card)`
  padding: 20px;
  text-align: center;
  border-radius: 14px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
  
  span {
    display: block;
    font-size: 28px;
    margin-bottom: 12px;
  }
  
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`

// Data
const publications = [
  {
    title: 'Hype Detection in PubMed Abstracts: A Dataset and Analysis of Scientific Language Patterns',
    authors: 'Apratim Mishra et al.',
    venue: 'University of Illinois Research Publication, 2024',
    desc: 'Published dataset with 300+ downloads for detecting exaggerated claims in scientific abstracts using LLM-based classification. Applied named entity recognition and sentiment analysis.',
    tags: ['NLP', 'LLM', 'Dataset', 'Text Classification'],
    downloads: '300+',
    links: []
  },
  {
    title: 'Hybrid Citation Recommendation System with Graph Neural Networks and LLM Embeddings',
    authors: 'Apratim Mishra',
    venue: 'UIUC iSchool, 2025',
    desc: 'Novel approach combining GNN-based link prediction with semantic embeddings for 25% improvement over baseline methods. Deployed on AWS SageMaker with Airflow orchestration.',
    tags: ['GNN', 'LLM', 'Recommendation Systems', 'PyTorch'],
    links: []
  },
  {
    title: 'Transformer-based Protein Property Prediction with Parameter-Efficient Fine-tuning',
    authors: 'AstraZeneca Research Team',
    venue: 'Internal Research, 2023',
    desc: '10% F1 improvement in protein property prediction using LoRA and multi-GPU training on A100 clusters. Implemented with DeepSpeed and Accelerate for efficient training.',
    tags: ['Transformers', 'LoRA', 'Bioinformatics', 'Deep Learning'],
    links: []
  }
]

const researchInterests = [
  { icon: '🧠', title: 'Large Language Models' },
  { icon: '🔗', title: 'Graph Neural Networks' },
  { icon: '🤖', title: 'AI Agents' },
  { icon: '📊', title: 'Information Retrieval' }
]

function Research() {
  return (
    <Container>
      <PageHeader>
        <div>
          <h1>Research</h1>
          <p>Academic contributions in NLP, machine learning, and information science</p>
        </div>
        <LinkButton 
          href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ" 
          target="_blank" 
          $variant="secondary"
        >
          <SiGooglescholar size={16} /> Google Scholar
        </LinkButton>
      </PageHeader>
      
      <StatsRow>
        <StatCard>
          <StatIcon $variant="ghost">
            <FiFileText />
          </StatIcon>
          <StatContent>
            <span>{publications.length}</span>
            <p>Publications</p>
          </StatContent>
        </StatCard>
        <StatCard>
          <StatIcon $variant="ghost">
            <FiDownload />
          </StatIcon>
          <StatContent>
            <span>300+</span>
            <p>Dataset Downloads</p>
          </StatContent>
        </StatCard>
      </StatsRow>
      
      {/* Research Interests */}
      <Section $py="0">
        <SectionTitle $delay="150ms">
          Research Interests
        </SectionTitle>
        <InterestsGrid>
          {researchInterests.map((interest, i) => (
            <InterestCard key={i} $delay={`${200 + i * 75}ms`}>
              <span>{interest.icon}</span>
              <h4>{interest.title}</h4>
            </InterestCard>
          ))}
        </InterestsGrid>
      </Section>
      
      {/* Publications */}
      <Section $py="48px">
        <SectionTitle $delay="400ms">
          <FiBookOpen size={22} />
          Publications
        </SectionTitle>
        
        <Grid $cols="1fr" $gap="20px">
          {publications.map((pub, i) => (
            <PubCard key={i} $delay={`${450 + i * 100}ms`}>
              <PubCardInner>
                <PubIcon>
                  <FiFileText />
                </PubIcon>
                <PubContent>
                  <PubTitle>{pub.title}</PubTitle>
                  <PubMeta>
                    <PubAuthors>
                      <FiUsers size={14} />
                      {pub.authors}
                    </PubAuthors>
                    <PubVenue>{pub.venue}</PubVenue>
                  </PubMeta>
                  <PubDesc>{pub.desc}</PubDesc>
                  <PubTags>
                    {pub.tags.map((tag, j) => (
                      <Tag key={j} $variant="outline">{tag}</Tag>
                    ))}
                  </PubTags>
                  {pub.links.length > 0 && (
                    <PubLinks>
                      {pub.links.map((link, j) => (
                        <PubLink key={j} href={link.url} target="_blank">
                          <FiExternalLink size={14} /> {link.label}
                        </PubLink>
                      ))}
                    </PubLinks>
                  )}
                </PubContent>
              </PubCardInner>
            </PubCard>
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Research
