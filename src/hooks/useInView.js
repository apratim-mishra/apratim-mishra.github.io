import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to detect when an element enters the viewport
 * Uses Intersection Observer API for performance
 * 
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - How much of the element should be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isInView boolean]
 */
export function useInView({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
} = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setHasTriggered(true)
          
          // Unobserve if only triggering once
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return [ref, isInView]
}

/**
 * Hook for staggered animation of multiple items
 * Returns refs and visibility states for a list of items
 * 
 * @param {number} itemCount - Number of items to animate
 * @param {Object} options - Options
 * @param {number} options.staggerDelay - Delay between each item in ms
 * @param {number} options.threshold - Intersection Observer threshold
 * @returns {Object} - { containerRef, itemsInView: boolean[] }
 */
export function useStaggeredInView(itemCount, {
  staggerDelay = 100,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
} = {}) {
  const containerRef = useRef(null)
  const [isContainerInView, setIsContainerInView] = useState(false)
  const [itemsInView, setItemsInView] = useState(Array(itemCount).fill(false))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isContainerInView) {
          setIsContainerInView(true)
          observer.disconnect()
          
          // Stagger the items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setItemsInView(prev => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * staggerDelay)
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [itemCount, staggerDelay, threshold, rootMargin, isContainerInView])

  return { containerRef, itemsInView, isContainerInView }
}

/**
 * Simple hook to check if user prefers reduced motion
 * @returns {boolean}
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

export default useInView

