import React from 'react'
import styled from 'styled-components'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import { Container, Section, Heading, Text, SectionTitle, SectionLabel, Tag } from './ui'
import theme from '../styles/theme'

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.black200};
    
    @media (max-width: ${theme.breakpoints.md}) {
      left: 20px;
    }
  }
`

const TimelineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-bottom: 3rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding-left: 4rem;
  }
`

const TimelineDot = styled.div`
  position: absolute;
  left: -8px;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme.colors.white};
  border: 3px solid ${props => props.$current ? theme.colors.primary500 : theme.colors.black300};
  z-index: 1;
  
  @media (max-width: ${theme.breakpoints.md}) {
    left: 12px;
  }
`

const ExperienceCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.radii.xl};
  padding: 1.75rem;
  box-shadow: ${theme.shadows.base};
  border: 1px solid ${theme.colors.black200};
  transition: all ${theme.transitions.base};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.primary300};
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const ExperienceTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
`

const ExperienceCompany = styled.div`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.primary600};
  margin-bottom: 0.5rem;
`

const ExperienceMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  
  span {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }
`

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ExperienceListItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  line-height: ${theme.lineHeights.relaxed};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.primary400};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

const experiences = [
  {
    title: 'Machine Learning Engineer',
    company: 'Verizon',
    location: 'Irving, TX',
    period: 'July 2025 – Present',
    current: true,
    highlights: [
      'Developed unified enterprise agent platform for multi-agent workflows with Agent Builder, Connector Registry, and ChatKit UI',
      'Designed LLM fine-tuning pipelines with SFT/RFT using SageMaker, DeepSpeed, LoRA/PEFT',
      'Deployed quantized models with ONNX Runtime and Triton/TGI on Kubernetes with autoscaling',
      'Achieved +24% training throughput and -15% p95 latency in production'
    ]
  },
  {
    title: 'Graduate Research Assistant',
    company: 'University of Illinois Urbana-Champaign',
    location: 'Champaign, IL',
    period: 'June 2024 – May 2025',
    current: false,
    highlights: [
      'Parsed 15M PubMed abstracts on Databricks with PySpark for NER and Named Disambiguation',
      'Trained LLM models raising F1 by 12% for hype detection, producing dataset with 300+ downloads',
      'Developed hybrid citation recommendation system with GNN + LLM embeddings (25% lift over BM25)'
    ]
  },
  {
    title: 'Data Science Intern (Applied ML)',
    company: 'AstraZeneca',
    location: 'Gaithersburg, MD',
    period: 'May 2023 – Aug 2023',
    current: false,
    highlights: [
      'Improved protein-property prediction F1 by 10% with transformer models on A100 multi-GPUs',
      'Cut model retraining time by 30% by refactoring ETL in PySpark and caching parquet layers',
      'Deployed TorchServe microservice handling ~1K predictions/day with zero-downtime updates'
    ]
  },
  {
    title: 'NLP Engineer Intern',
    company: 'The Cline Centre for Advanced Social Research',
    location: 'Champaign, IL',
    period: 'May 2021 – Dec 2021',
    current: false,
    highlights: [
      'Boosted entity-quotation extraction precision by 18% fine-tuning BERT and XLNet',
      'Processed 250M+ records on 20-node Spark cluster, reduced pipeline cost by 25%',
      'Served real-time inference with FastAPI on Kubernetes, P99 latency under 150ms'
    ]
  }
]

function Experience() {
  return (
    <Section id="experience" $py="6rem" $bg={theme.colors.bgPrimary}>
      <Container>
        <SectionTitle>
          <SectionLabel>Career</SectionLabel>
          <Heading>Work Experience</Heading>
          <Text $color={theme.colors.textSecondary} $m="1rem 0 0 0" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Building production ML systems across enterprise, research, and healthcare domains.
          </Text>
        </SectionTitle>
        
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineDot $current={exp.current} />
              <ExperienceCard>
                <ExperienceHeader>
                  <div>
                    <ExperienceTitle>{exp.title}</ExperienceTitle>
                    <ExperienceCompany>{exp.company}</ExperienceCompany>
                  </div>
                  {exp.current && (
                    <Tag $bg={theme.colors.success100} $color={theme.colors.success700}>
                      Current
                    </Tag>
                  )}
                </ExperienceHeader>
                
                <ExperienceMeta>
                  <span><FiMapPin /> {exp.location}</span>
                  <span><FiCalendar /> {exp.period}</span>
                </ExperienceMeta>
                
                <ExperienceList>
                  {exp.highlights.map((item, i) => (
                    <ExperienceListItem key={i}>{item}</ExperienceListItem>
                  ))}
                </ExperienceList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}

export default Experience

