import React from 'react'
import styled from 'styled-components'
import { 
  SiPython, SiPytorch, SiTensorflow, SiDocker, SiKubernetes, 
  SiAmazonwebservices, SiGooglecloud, SiApachespark, SiPostgresql,
  SiReact, SiFastapi, SiMongodb, SiRedis, SiGit
} from 'react-icons/si'
import { FiCpu, FiDatabase, FiCloud, FiCode, FiBox, FiLayers } from 'react-icons/fi'
import { Container, Section, Grid, Card, Heading, Text, SectionTitle, SectionLabel, Tag } from './ui'
import theme from '../styles/theme'

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled(Card)`
  padding: 1.5rem;
  
  &:hover {
    border-color: ${props => props.$accentColor || theme.colors.primary300};
    box-shadow: ${theme.shadows.md};
  }
`

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.radii.lg};
  background: ${props => props.$bg || theme.colors.primary100};
  color: ${props => props.$color || theme.colors.primary600};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`

const SkillTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SkillTag = styled(Tag)`
  background: ${props => props.$bg || theme.colors.black100};
  color: ${props => props.$color || theme.colors.textSecondary};
`

const skillCategories = [
  {
    title: 'Machine Learning & LLMs',
    icon: <FiCpu />,
    bgColor: theme.colors.primary100,
    iconColor: theme.colors.primary600,
    tagBg: theme.colors.primary100,
    tagColor: theme.colors.primary700,
    skills: ['PyTorch', 'Transformers', 'LangChain', 'LangGraph', 'vLLM', 'LiteLLM', 'RAG', 'Fine-tuning']
  },
  {
    title: 'MLOps & Infrastructure',
    icon: <FiLayers />,
    bgColor: theme.colors.accent100,
    iconColor: theme.colors.accent600,
    tagBg: theme.colors.accent100,
    tagColor: theme.colors.accent700,
    skills: ['W&B', 'MLflow', 'DeepSpeed', 'Accelerate', 'ONNX', 'TensorRT', 'Kubeflow', 'Triton']
  },
  {
    title: 'Vector & Databases',
    icon: <FiDatabase />,
    bgColor: theme.colors.success100,
    iconColor: theme.colors.success700,
    tagBg: theme.colors.success100,
    tagColor: theme.colors.success700,
    skills: ['FAISS', 'Pinecone', 'Weaviate', 'PostgreSQL', 'MongoDB', 'Redis', 'Snowflake']
  },
  {
    title: 'Cloud Platforms',
    icon: <FiCloud />,
    bgColor: theme.colors.warning100,
    iconColor: theme.colors.warning700,
    tagBg: theme.colors.warning100,
    tagColor: theme.colors.warning700,
    skills: ['AWS SageMaker', 'AWS Bedrock', 'AWS EKS', 'Lambda', 'GCP Vertex AI', 'BigQuery', 'Databricks']
  },
  {
    title: 'Programming',
    icon: <FiCode />,
    bgColor: '#EDE9FE',
    iconColor: '#7C3AED',
    tagBg: '#EDE9FE',
    tagColor: '#7C3AED',
    skills: ['Python', 'TypeScript', 'SQL', 'Go', 'Node.js', 'R', 'Bash']
  },
  {
    title: 'DevOps & Tools',
    icon: <FiBox />,
    bgColor: '#FCE7F3',
    iconColor: '#DB2777',
    tagBg: '#FCE7F3',
    tagColor: '#DB2777',
    skills: ['Docker', 'Kubernetes', 'FastAPI', 'Git', 'CI/CD', 'Airflow', 'PySpark']
  }
]

function Skills() {
  return (
    <Section id="skills" $py="6rem" $bg={theme.colors.bgPrimary}>
      <Container>
        <SectionTitle>
          <SectionLabel>Technical Skills</SectionLabel>
          <Heading>Tools & Technologies I Work With</Heading>
          <Text $color={theme.colors.textSecondary} $m="1rem 0 0 0" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            From research prototypes to production systems, I leverage modern ML infrastructure 
            and cloud platforms to build scalable AI solutions.
          </Text>
        </SectionTitle>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCard key={index} $hover $accentColor={category.iconColor}>
              <SkillHeader>
                <SkillIcon $bg={category.bgColor} $color={category.iconColor}>
                  {category.icon}
                </SkillIcon>
                <SkillTitle>{category.title}</SkillTitle>
              </SkillHeader>
              <SkillTags>
                {category.skills.map((skill, i) => (
                  <SkillTag key={i} $bg={category.tagBg} $color={category.tagColor}>
                    {skill}
                  </SkillTag>
                ))}
              </SkillTags>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </Section>
  )
}

export default Skills

