import styled, { css, keyframes } from 'styled-components'

// ============================================
// KEYFRAMES
// ============================================

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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

// ============================================
// LAYOUT COMPONENTS
// ============================================

// Container with max-width
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  
  @media (max-width: 640px) {
    padding: 0 16px;
  }
`

// Section with generous spacing
export const Section = styled.section`
  padding: ${props => props.$py || '64px'} 0;
  
  @media (max-width: 768px) {
    padding: ${props => props.$pyMobile || '48px'} 0;
  }
`

// Flex container
export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
`

// Grid container with responsive columns
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$cols || '1fr'};
  gap: ${props => props.$gap || '16px'};
  
  @media (max-width: 1024px) {
    grid-template-columns: ${props => props.$colsLg || props.$cols || '1fr'};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: ${props => props.$colsMd || 'repeat(2, 1fr)'};
    gap: ${props => props.$gapMd || props.$gap || '16px'};
  }
  
  @media (max-width: 640px) {
    grid-template-columns: ${props => props.$colsSm || '1fr'};
    gap: ${props => props.$gapSm || '12px'};
  }
`

// ============================================
// TYPOGRAPHY
// ============================================

export const Text = styled.p`
  font-size: ${props => props.$size || '15px'};
  font-weight: ${props => props.$weight || 400};
  color: ${props => props.$color || 'inherit'};
  line-height: ${props => props.$lh || 1.6};
  margin: ${props => props.$m || '0'};
  letter-spacing: ${props => props.$ls || 'normal'};
`

export const Heading = styled.h2`
  font-size: ${props => props.$size || '24px'};
  font-weight: ${props => props.$weight || 700};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  letter-spacing: -0.025em;
  margin: ${props => props.$m || '0'};
`

// Gradient text
export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

// ============================================
// BUTTONS
// ============================================

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    
    &:hover:not(:disabled) { 
      background: ${({ theme }) => theme.colors.primaryHover};
      border-color: ${({ theme }) => theme.colors.primaryHover};
      transform: translateY(-1px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &:hover:not(:disabled) { 
      background: ${({ theme }) => theme.colors.bgHover};
      border-color: ${({ theme }) => theme.colors.borderHover};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid transparent;
    
    &:hover:not(:disabled) { 
      background: ${({ theme }) => theme.colors.bgHover}; 
      color: ${({ theme }) => theme.colors.text};
    }
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    
    &:hover:not(:disabled) { 
      background: ${({ theme }) => theme.colors.accentHover};
      border-color: ${({ theme }) => theme.colors.accentHover};
      transform: translateY(-1px);
    }
  `
}

const buttonSizes = {
  sm: css`
    padding: 6px 12px;
    font-size: 12px;
    gap: 4px;
  `,
  md: css`
    padding: 10px 18px;
    font-size: 14px;
    gap: 6px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 15px;
    gap: 8px;
  `
}

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 8px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  cursor: pointer;
  
  ${props => buttonSizes[props.$size] || buttonSizes.md}
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    flex-shrink: 0;
  }
`

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 8px;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  
  ${props => buttonSizes[props.$size] || buttonSizes.md}
  ${props => buttonVariants[props.$variant] || buttonVariants.primary}
  
  svg {
    flex-shrink: 0;
  }
`

// Icon-only button
export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size === 'sm' ? '32px' : props.$size === 'lg' ? '44px' : '38px'};
  height: ${props => props.$size === 'sm' ? '32px' : props.$size === 'lg' ? '44px' : '38px'};
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid transparent;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.bgHover};
    color: ${({ theme }) => theme.colors.text};
  }
  
  &:active {
    transform: scale(0.95);
  }
`

// ============================================
// CARDS
// ============================================

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 12px;
  padding: ${props => props.$p || '20px'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  ${props => props.$hover && css`
    cursor: pointer;
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.borderHover};
      background: ${({ theme }) => theme.colors.bgHover};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${props => props.$glow && css`
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  `}
  
  ${props => props.$gradient && css`
    background: ${({ theme }) => theme.colors.gradientCard};
    border-color: ${({ theme }) => theme.colors.borderLight};
  `}
`

// Elevated card variant
export const ElevatedCard = styled(Card)`
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: none;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`

// Interactive card with left accent
export const AccentCard = styled(Card)`
  border-left: 3px solid ${props => 
    props.$accent === 'primary' ? (({ theme }) => theme.colors.primary) :
    props.$accent === 'accent' ? (({ theme }) => theme.colors.accent) :
    props.$accent === 'success' ? (({ theme }) => theme.colors.success) :
    (({ theme }) => theme.colors.primary)
  };
  
  &:hover {
    border-left-color: ${props => 
      props.$accent === 'primary' ? (({ theme }) => theme.colors.primaryHover) :
      props.$accent === 'accent' ? (({ theme }) => theme.colors.accentHover) :
      (({ theme }) => theme.colors.primaryHover)
    };
  }
`

// ============================================
// TAGS & BADGES
// ============================================

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryText};
  transition: all 150ms ease;
  
  ${props => props.$variant === 'outline' && css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
  `}
  
  ${props => props.$variant === 'accent' && css`
    background: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.accent};
  `}
  
  ${props => props.$variant === 'success' && css`
    background: ${({ theme }) => theme.colors.successLight};
    color: ${({ theme }) => theme.colors.success};
  `}
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  
  ${props => props.$dot && css`
    width: 8px;
    height: 8px;
    min-width: 8px;
    padding: 0;
  `}
`

// ============================================
// SECTION HEADER
// ============================================

export const SectionHeader = styled.div`
  margin-bottom: 32px;
  position: relative;
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
    letter-spacing: -0.025em;
    
    @media (max-width: 640px) {
      font-size: 24px;
    }
  }
  
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    max-width: 600px;
  }
  
  ${props => props.$accent && css`
    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 4px;
      background: ${({ theme }) => theme.colors.gradientPrimary};
      border-radius: 2px;
      margin-bottom: 16px;
    }
  `}
`

// ============================================
// DIVIDERS
// ============================================

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${props => props.$my || '24px'} 0;
  
  ${props => props.$gradient && css`
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.border} 50%,
      transparent
    );
  `}
`

// ============================================
// ICON BOX
// ============================================

export const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$size || '40px'};
  height: ${props => props.$size || '40px'};
  border-radius: ${props => props.$rounded || '10px'};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${props => props.$iconSize || '18px'};
  transition: all 200ms ease;
  
  ${props => props.$variant === 'accent' && css`
    background: ${({ theme }) => theme.colors.accentLight};
    color: ${({ theme }) => theme.colors.accent};
  `}
  
  ${props => props.$variant === 'ghost' && css`
    background: ${({ theme }) => theme.colors.bgHover};
    color: ${({ theme }) => theme.colors.textSecondary};
  `}
`

// ============================================
// ANIMATED SECTION
// ============================================

export const AnimatedSection = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${props => props.$delay || '0ms'};
`

export const AnimatedItem = styled.div`
  opacity: 0;
  animation: ${scaleIn} 400ms cubic-bezier(0, 0, 0.2, 1) forwards;
  animation-delay: ${props => props.$delay || '0ms'};
`

// ============================================
// AVATAR
// ============================================

export const Avatar = styled.div`
  width: ${props => props.$size || '48px'};
  height: ${props => props.$size || '48px'};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  span {
    font-size: ${props => props.$fontSize || '18px'};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`

// ============================================
// SKELETON LOADER
// ============================================

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.bgHover} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.bgHover} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${props => props.$rounded || '8px'};
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '20px'};
`
