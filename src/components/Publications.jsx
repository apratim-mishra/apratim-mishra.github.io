import React from 'react'
import styled from 'styled-components'
import { FiExternalLink, FiBookOpen, FiDownload } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { Container, Section, Card, Heading, Text, SectionTitle, SectionLabel, Tag, LinkButton } from './ui'
import theme from '../styles/theme'

const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`

const PublicationCard = styled(Card)`
  padding: 1.75rem;
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
  }
  
  &:hover {
    border-color: ${theme.colors.primary300};
    box-shadow: ${theme.shadows.md};
  }
`

const PublicationIcon = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: ${theme.radii.lg};
  background: ${theme.colors.primary100};
  color: ${theme.colors.primary600};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`

const PublicationContent = styled.div`
  flex: 1;
`

const PublicationTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  line-height: ${theme.lineHeights.snug};
`

const PublicationAuthors = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`

const PublicationVenue = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.primary600};
  font-weight: ${theme.fontWeights.medium};
  margin-bottom: 1rem;
`

const PublicationLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.md};
  background: ${theme.colors.black100};
  color: ${theme.colors.textSecondary};
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.primary100};
    color: ${theme.colors.primary600};
  }
`

const ScholarLink = styled.div`
  text-align: center;
  margin-top: 3rem;
`

const publications = [
  {
    title: 'Hype Detection in PubMed Abstracts: A Dataset and Analysis of Scientific Language Patterns',
    authors: 'Apratim Mishra et al.',
    venue: 'University of Illinois Research Publication, 2024',
    description: 'Published dataset with 300+ downloads for detecting exaggerated claims in scientific abstracts.',
    links: [
      { label: 'Dataset', url: '#', icon: <FiDownload /> }
    ]
  },
  {
    title: 'Hybrid Citation Recommendation System with Graph Neural Networks and LLM Embeddings',
    authors: 'Apratim Mishra, Graduate Research',
    venue: 'UIUC iSchool, 2025',
    description: 'Novel approach combining GNN-based link prediction with semantic embeddings for 25% improvement over baseline.',
    links: []
  },
  {
    title: 'Transformer-based Protein Property Prediction with Parameter-Efficient Fine-tuning',
    authors: 'AstraZeneca Research Team',
    venue: 'Internal Research, 2023',
    description: '10% F1 improvement in protein property prediction using LoRA and multi-GPU training.',
    links: []
  }
]

function Publications() {
  return (
    <Section id="publications" $py="6rem" $bg={theme.colors.white}>
      <Container>
        <SectionTitle>
          <SectionLabel>Research</SectionLabel>
          <Heading>Publications & Research</Heading>
          <Text $color={theme.colors.textSecondary} $m="1rem 0 0 0" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Academic research contributions in NLP, machine learning, and information science.
          </Text>
        </SectionTitle>
        
        <PublicationsGrid>
          {publications.map((pub, index) => (
            <PublicationCard key={index}>
              <PublicationIcon>
                <FiBookOpen />
              </PublicationIcon>
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationAuthors>{pub.authors}</PublicationAuthors>
                <PublicationVenue>{pub.venue}</PublicationVenue>
                <Text $size="sm" $color={theme.colors.textSecondary} $m="0 0 1rem 0">
                  {pub.description}
                </Text>
                {pub.links.length > 0 && (
                  <PublicationLinks>
                    {pub.links.map((link, i) => (
                      <PublicationLink key={i} href={link.url} target="_blank">
                        {link.icon} {link.label}
                      </PublicationLink>
                    ))}
                  </PublicationLinks>
                )}
              </PublicationContent>
            </PublicationCard>
          ))}
        </PublicationsGrid>
        
        <ScholarLink>
          <LinkButton
            href="https://scholar.google.com/citations?user=J5nY6rEAAAAJ&hl=en"
            target="_blank"
            $variant="secondary"
            $size="md"
          >
            <SiGooglescholar /> View Google Scholar Profile
          </LinkButton>
        </ScholarLink>
      </Container>
    </Section>
  )
}

export default Publications

