import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

// Container
export const Container = styled.div`
  width: 100%;
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${theme.container.padding};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 1rem;
  }
`

// Section
export const Section = styled.section`
  padding: ${props => props.$py || '5rem'} 0;
  background: ${props => props.$bg || 'transparent'};
`

// Flex
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: ${props => props.$directionMd || props.$direction || 'row'};
  }
`

// Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$cols || '1fr'};
  gap: ${props => props.$gap || '1.5rem'};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: ${props => props.$colsLg || props.$cols || '1fr'};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: ${props => props.$colsMd || '1fr'};
  }
`

// Text Components
export const Text = styled.p`
  font-size: ${props => theme.fontSizes[props.$size] || theme.fontSizes.base};
  font-weight: ${props => theme.fontWeights[props.$weight] || theme.fontWeights.normal};
  color: ${props => props.$color || theme.colors.textPrimary};
  line-height: ${props => theme.lineHeights[props.$lineHeight] || theme.lineHeights.normal};
  text-align: ${props => props.$align || 'left'};
  margin: ${props => props.$m || '0'};
`

export const Heading = styled.h2`
  font-size: ${props => theme.fontSizes[props.$size] || theme.fontSizes['3xl']};
  font-weight: ${props => theme.fontWeights[props.$weight] || theme.fontWeights.bold};
  color: ${props => props.$color || theme.colors.textPrimary};
  line-height: ${theme.lineHeights.tight};
  margin: ${props => props.$m || '0'};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${props => props.$sizeMd || theme.fontSizes['2xl']};
  }
`

export const SubHeading = styled.h3`
  font-size: ${props => theme.fontSizes[props.$size] || theme.fontSizes.xl};
  font-weight: ${props => theme.fontWeights[props.$weight] || theme.fontWeights.semibold};
  color: ${props => props.$color || theme.colors.textPrimary};
  line-height: ${theme.lineHeights.snug};
  margin: ${props => props.$m || '0'};
`

// Button
const buttonVariants = {
  primary: css`
    background: ${theme.colors.primary600};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.primary700};
    }
  `,
  secondary: css`
    background: transparent;
    color: ${theme.colors.primary600};
    border: 2px solid ${theme.colors.primary600};
    &:hover {
      background: ${theme.colors.primary100};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${theme.colors.textPrimary};
    &:hover {
      background: ${theme.colors.black100};
    }
  `,
  accent: css`
    background: ${theme.colors.accent600};
    color: ${theme.colors.white};
    &:hover {
      background: ${theme.colors.accent700};
    }
  `
}

const buttonSizes = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: ${theme.fontSizes.sm};
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: ${theme.fontSizes.base};
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: ${theme.fontSizes.lg};
  `
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.lg};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  border: none;
  white-space: nowrap;
  
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
  ${props => buttonSizes[props.$size] || buttonSizes.md}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

// Link Button
export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.lg};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  text-decoration: none;
  
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
  ${props => buttonSizes[props.$size] || buttonSizes.md}
`

// Card
export const Card = styled.div`
  background: ${props => props.$bg || theme.colors.white};
  border-radius: ${theme.radii.xl};
  padding: ${props => props.$p || '1.5rem'};
  box-shadow: ${props => theme.shadows[props.$shadow] || theme.shadows.base};
  border: 1px solid ${props => props.$border || theme.colors.black200};
  transition: all ${theme.transitions.base};
  
  ${props => props.$hover && css`
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`

// Tag/Badge
export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.radii.full};
  background: ${props => props.$bg || theme.colors.primary100};
  color: ${props => props.$color || theme.colors.primary700};
`

// Divider
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${props => props.$color || theme.colors.black200};
  margin: ${props => props.$m || '2rem 0'};
`

// Icon wrapper
export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size || '2.5rem'};
  height: ${props => props.$size || '2.5rem'};
  border-radius: ${props => props.$rounded || theme.radii.lg};
  background: ${props => props.$bg || theme.colors.primary100};
  color: ${props => props.$color || theme.colors.primary600};
  font-size: ${props => props.$iconSize || '1.25rem'};
`

// Section Title Component
export const SectionTitle = styled.div`
  text-align: ${props => props.$align || 'center'};
  margin-bottom: 3rem;
`

export const SectionLabel = styled.span`
  display: inline-block;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.primary600};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`

