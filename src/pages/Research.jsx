import React from 'react'
import styled from 'styled-components'
import { FiBookOpen, FiExternalLink, FiDownload } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Card, LinkButton } from '../components/ui'

const PageHeader = styled.div`
  padding: 32px 0 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
  
  div {
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
  }
`

const PubCard = styled(Card)`
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  gap: 14px;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const PubIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const PubContent = styled.div`
  flex: 1;
`

const PubTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
  line-height: 1.4;
`

const PubAuthors = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2px;
`

const PubVenue = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: 8px;
`

const PubDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`

const PubLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`

const PubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.15s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const publications = [
  {
    title: 'Hype Detection in PubMed Abstracts: A Dataset and Analysis of Scientific Language Patterns',
    authors: 'Apratim Mishra et al.',
    venue: 'University of Illinois Research Publication, 2024',
    desc: 'Published dataset with 300+ downloads for detecting exaggerated claims in scientific abstracts using LLM-based classification.',
    links: []
  },
  {
    title: 'Hybrid Citation Recommendation System with Graph Neural Networks and LLM Embeddings',
    authors: 'Apratim Mishra',
    venue: 'UIUC iSchool, 2025',
    desc: 'Novel approach combining GNN-based link prediction with semantic embeddings for 25% improvement over baseline methods.',
    links: []
  },
  {
    title: 'Transformer-based Protein Property Prediction with Parameter-Efficient Fine-tuning',
    authors: 'AstraZeneca Research Team',
    venue: 'Internal Research, 2023',
    desc: '10% F1 improvement in protein property prediction using LoRA and multi-GPU training on A100 clusters.',
    links: []
  }
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
          $sm
        >
          <SiGooglescholar size={12} /> Google Scholar
        </LinkButton>
      </PageHeader>
      
      <Section $py="0">
        {publications.map((pub, i) => (
          <PubCard key={i}>
            <PubIcon>
              <FiBookOpen size={18} />
            </PubIcon>
            <PubContent>
              <PubTitle>{pub.title}</PubTitle>
              <PubAuthors>{pub.authors}</PubAuthors>
              <PubVenue>{pub.venue}</PubVenue>
              <PubDesc>{pub.desc}</PubDesc>
              {pub.links.length > 0 && (
                <PubLinks>
                  {pub.links.map((link, j) => (
                    <PubLink key={j} href={link.url} target="_blank">
                      <FiExternalLink size={10} /> {link.label}
                    </PubLink>
                  ))}
                </PubLinks>
              )}
            </PubContent>
          </PubCard>
        ))}
      </Section>
    </Container>
  )
}

export default Research

