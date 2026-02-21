import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FiMapPin, FiCalendar, FiDownload, FiAward, FiBookOpen } from 'react-icons/fi'
import { Container, Section, Card, Tag, LinkButton, Grid } from '../components/ui'
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

const expandLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 102, 255, 0);
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

// Timeline
const TimelineContainer = styled.div`
  position: relative;
  padding-left: 32px;
  
  @media (max-width: 640px) {
    padding-left: 24px;
  }
`

const TimelineLine = styled.div`
  position: absolute;
  left: 6px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.border} 100%
  );
  border-radius: 1px;
`

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 32px;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:last-child {
    padding-bottom: 0;
  }
`

const TimelineDot = styled.div`
  position: absolute;
  left: -32px;
  top: 24px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ $current, theme }) => 
    $current ? theme.colors.primary : theme.colors.bgCard};
  border: 3px solid ${({ $current, theme }) => 
    $current ? theme.colors.primary : theme.colors.border};
  z-index: 1;
  
  ${({ $current }) => $current && css`
    animation: ${pulse} 2s ease-in-out infinite;
  `}
  
  @media (max-width: 640px) {
    left: -24px;
    width: 12px;
    height: 12px;
  }
`

// Job Card
const JobCard = styled(Card)`
  padding: 28px;
  border-radius: 16px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  ${({ $current, theme }) => $current && `
    border-color: ${theme.colors.primary};
    background: ${theme.colors.gradientCard};
  `}
  
  &:hover {
    transform: translateX(8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  @media (max-width: 640px) {
    padding: 20px;
  }
`

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
  flex-wrap: wrap;
`

const JobInfo = styled.div``

const JobTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
  letter-spacing: -0.02em;
  
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

const JobCompany = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.success};
`

const JobMeta = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  flex-wrap: wrap;
  
  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`

const JobHighlights = styled.ul`
  list-style: none;
`

const JobHighlight = styled.li`
  position: relative;
  padding-left: 16px;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

// Education Section
const SectionTitle = styled.h2`
  font-size: 28px;
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
  
  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const EducationCard = styled(Card)`
  padding: 24px;
  border-radius: 16px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${({ $delay }) => $delay || '0ms'};
  opacity: 0;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`

const EduTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

const EduSchool = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`

const EduMeta = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  gap: 6px;
`

// Data
const experiences = [
  {
    title: 'AI Researcher',
    company: 'Toyota',
    location: 'Mountain View, CA',
    period: 'Feb 2026 - Present',
    current: true,
    highlights: [
      'Research, develop, and prototype multi-agent AI frameworks for mobility',
      'Focus on agent orchestration, tool integration, fine-tuning, evaluation, and alignment'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Verizon',
    location: 'Irving, TX',
    period: 'July 2025 - Feb 2026',
    current: false,
    highlights: [
      'Led team of four building a network QA platform with config validation and agentic AI architectures',
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
  { 
    degree: 'Ph.D. in Information Sciences', 
    school: 'University of Illinois at Urbana-Champaign', 
    period: 'Aug 2019 - June 2025',
    location: 'Champaign, IL'
  },
  { 
    degree: "Master's in Energy and Environmental Policy", 
    school: 'University of Delaware', 
    period: 'Aug 2016 - May 2018',
    location: 'Newark, DE'
  },
  { 
    degree: "Bachelor's in Chemical Engineering", 
    school: 'Birla Institute of Technology and Science', 
    period: 'Aug 2012 - May 2016',
    location: 'Pilani, India'
  }
]

function Career() {
  const [expRef, expVisible] = useInView({ threshold: 0.1 })
  const [eduRef, eduVisible] = useInView({ threshold: 0.1 })

  return (
    <Container>
      <PageHeader>
        <div>
          <h1>Career</h1>
          <p>Building production ML and AI research systems across automotive, enterprise, and healthcare</p>
        </div>
        <LinkButton 
          href="/files/Resume_Apratim.pdf" 
          target="_blank" 
          $variant="primary"
        >
          <FiDownload size={16} /> Download Resume
        </LinkButton>
      </PageHeader>
      
      {/* Work Experience */}
      <Section $py="0" ref={expRef}>
        <SectionTitle $delay="100ms">
          <FiAward size={24} />
          Work Experience
        </SectionTitle>
        
        <TimelineContainer>
          <TimelineLine />
          {experiences.map((exp, i) => (
            <TimelineItem key={i} $delay={`${150 + i * 100}ms`}>
              <TimelineDot $current={exp.current} />
              <JobCard $current={exp.current}>
                <JobHeader>
                  <JobInfo>
                    <JobTitle>{exp.title}</JobTitle>
                    <JobCompany>{exp.company}</JobCompany>
                  </JobInfo>
                  {exp.current && (
                    <CurrentBadge>
                      <span>●</span> Current Role
                    </CurrentBadge>
                  )}
                </JobHeader>
                <JobMeta>
                  <span><FiMapPin size={14} /> {exp.location}</span>
                  <span><FiCalendar size={14} /> {exp.period}</span>
                </JobMeta>
                <JobHighlights>
                  {exp.highlights.map((item, j) => (
                    <JobHighlight key={j}>{item}</JobHighlight>
                  ))}
                </JobHighlights>
              </JobCard>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Section>
      
      {/* Education */}
      <Section $py="64px" ref={eduRef}>
        <SectionTitle $delay="0ms">
          <FiBookOpen size={24} />
          Education
        </SectionTitle>
        
        <Grid $cols="repeat(3, 1fr)" $colsMd="repeat(2, 1fr)" $colsSm="1fr" $gap="20px">
          {education.map((edu, i) => (
            <EducationCard key={i} $delay={`${i * 100}ms`}>
              <EduTitle>{edu.degree}</EduTitle>
              <EduSchool>{edu.school}</EduSchool>
              <EduMeta>
                <FiCalendar size={12} />
                {edu.period}
              </EduMeta>
            </EducationCard>
          ))}
        </Grid>
      </Section>
    </Container>
  )
}

export default Career
