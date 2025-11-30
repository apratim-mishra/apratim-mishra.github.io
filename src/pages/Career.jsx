import React from 'react'
import styled from 'styled-components'
import { FiMapPin, FiCalendar, FiDownload } from 'react-icons/fi'
import { Container, Section, Card, Tag, LinkButton } from '../components/ui'

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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`

const TimelineItem = styled.div`
  position: relative;
  padding-left: 24px;
  padding-bottom: 24px;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.$current 
      ? (({ theme }) => theme.colors.primary) 
      : (({ theme }) => theme.colors.bg)};
    border: 2px solid ${props => props.$current 
      ? (({ theme }) => theme.colors.primary) 
      : (({ theme }) => theme.colors.border)};
  }
`

const JobCard = styled(Card)`
  padding: 16px;
`

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`

const JobTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const JobCompany = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`

const CurrentTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.success};
`

const JobMeta = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  
  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

const JobList = styled.ul`
  list-style: none;
`

const JobItem = styled.li`
  position: relative;
  padding-left: 12px;
  margin-bottom: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

const EducationSection = styled.div`
  margin-top: 32px;
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 16px;
  }
`

const EduCard = styled(Card)`
  padding: 14px;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const EduTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const EduSchool = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2px;
`

const EduMeta = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

const experiences = [
  {
    title: 'Machine Learning Engineer',
    company: 'Verizon',
    location: 'Irving, TX',
    period: 'July 2025 - Present',
    current: true,
    highlights: [
      'Built unified enterprise agent platform for multi-agent workflows with Agent Builder and Connector Registry',
      'Designed LLM fine-tuning pipelines with SFT/RFT using SageMaker, DeepSpeed, LoRA/PEFT',
      'Deployed quantized models with ONNX Runtime and Triton/TGI on Kubernetes',
      'Achieved +24% training throughput and -15% p95 latency in production'
    ]
  },
  {
    title: 'Graduate Research Assistant',
    company: 'University of Illinois Urbana-Champaign',
    location: 'Champaign, IL',
    period: 'June 2024 - May 2025',
    current: false,
    highlights: [
      'Parsed 15M PubMed abstracts on Databricks with PySpark for NER and Named Disambiguation',
      'Trained LLM models with 12% F1 improvement for hype detection, dataset downloaded 300+ times',
      'Developed hybrid citation recommendation with GNN + LLM embeddings (25% lift over BM25)'
    ]
  },
  {
    title: 'Data Science Intern (Applied ML)',
    company: 'AstraZeneca',
    location: 'Gaithersburg, MD',
    period: 'May 2023 - Aug 2023',
    current: false,
    highlights: [
      'Improved protein-property prediction F1 by 10% with transformer models on A100 multi-GPUs',
      'Cut model retraining time by 30% by refactoring ETL in PySpark',
      'Deployed TorchServe microservice handling 1K predictions/day with zero-downtime updates'
    ]
  },
  {
    title: 'NLP Engineer Intern',
    company: 'The Cline Centre for Advanced Social Research',
    location: 'Champaign, IL',
    period: 'May 2021 - Dec 2021',
    current: false,
    highlights: [
      'Boosted entity-quotation extraction precision by 18% fine-tuning BERT and XLNet',
      'Processed 250M+ records on 20-node Spark cluster, reduced pipeline cost by 25%',
      'Served real-time inference with FastAPI on Kubernetes, P99 latency under 150ms'
    ]
  }
]

const education = [
  { degree: 'Ph.D. in Information Sciences', school: 'University of Illinois at Urbana-Champaign', period: 'Aug 2019 - June 2025' },
  { degree: "Master's in Energy and Environmental Policy", school: 'University of Delaware', period: 'Aug 2016 - May 2018' },
  { degree: "Bachelor's in Chemical Engineering", school: 'Birla Institute of Technology and Science', period: 'Aug 2012 - May 2016' }
]

function Career() {
  return (
    <Container>
      <PageHeader>
        <div>
          <h1>Career</h1>
          <p>Building production ML systems across enterprise, research, and healthcare</p>
        </div>
        <LinkButton href="/files/Resume_Apratim.pdf" target="_blank" $variant="primary" $sm>
          <FiDownload size={12} /> Download Resume
        </LinkButton>
      </PageHeader>
      
      <Section $py="0">
        <Timeline>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} $current={exp.current}>
              <JobCard>
                <JobHeader>
                  <div>
                    <JobTitle>{exp.title}</JobTitle>
                    <JobCompany>{exp.company}</JobCompany>
                  </div>
                  {exp.current && <CurrentTag>Current</CurrentTag>}
                </JobHeader>
                <JobMeta>
                  <span><FiMapPin size={12} /> {exp.location}</span>
                  <span><FiCalendar size={12} /> {exp.period}</span>
                </JobMeta>
                <JobList>
                  {exp.highlights.map((item, j) => (
                    <JobItem key={j}>{item}</JobItem>
                  ))}
                </JobList>
              </JobCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>
      
      <EducationSection>
        <h2>Education</h2>
        {education.map((edu, i) => (
          <EduCard key={i}>
            <EduTitle>{edu.degree}</EduTitle>
            <EduSchool>{edu.school}</EduSchool>
            <EduMeta>{edu.period}</EduMeta>
          </EduCard>
        ))}
      </EducationSection>
    </Container>
  )
}

export default Career
