import styled, { css } from 'styled-components'

// Container - Atomize inspired
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`

// Section
export const Section = styled.section`
  padding: ${props => props.$py || '48px'} 0;
`

// Flex
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
`

// Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$cols || '1fr'};
  gap: ${props => props.$gap || '12px'};
  
  @media (max-width: 960px) {
    grid-template-columns: ${props => props.$colsMd || props.$cols || '1fr'};
  }
  
  @media (max-width: 640px) {
    grid-template-columns: ${props => props.$colsSm || '1fr'};
  }
`

// Text
export const Text = styled.p`
  font-size: ${props => props.$size || '14px'};
  font-weight: ${props => props.$weight || 400};
  color: ${props => props.$color || 'inherit'};
  line-height: ${props => props.$lh || 1.5};
  margin: ${props => props.$m || '0'};
`

// Heading
export const Heading = styled.h2`
  font-size: ${props => props.$size || '24px'};
  font-weight: ${props => props.$weight || 600};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  margin: ${props => props.$m || '0'};
`

// Button variants
const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover { background: ${({ theme }) => theme.colors.primaryLight}; }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover { background: ${({ theme }) => theme.colors.border}; }
  `
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: ${props => props.$sm ? '6px 12px' : '8px 16px'};
  font-size: ${props => props.$sm ? '12px' : '13px'};
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
  border: none;
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
`

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: ${props => props.$sm ? '6px 12px' : '8px 16px'};
  font-size: ${props => props.$sm ? '12px' : '13px'};
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
`

// Card - compact
export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 8px;
  padding: ${props => props.$p || '16px'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;
  
  ${props => props.$hover && css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  `}
`

// Tag - compact
export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  background: ${props => props.$bg || (({ theme }) => theme.colors.primaryLight)};
  color: ${props => props.$color || (({ theme }) => theme.colors.primary)};
`

// Section Header
export const SectionHeader = styled.div`
  margin-bottom: 24px;
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 4px;
  }
  
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

// Icon wrapper - compact
export const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size || '32px'};
  height: ${props => props.$size || '32px'};
  border-radius: 6px;
  background: ${props => props.$bg || (({ theme }) => theme.colors.primaryLight)};
  color: ${props => props.$color || (({ theme }) => theme.colors.primary)};
  font-size: ${props => props.$iconSize || '14px'};
`
