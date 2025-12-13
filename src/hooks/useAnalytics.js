import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import analytics from '../utils/analytics'

const trackGaPageView = (pagePath) => {
  try {
    if (typeof window === 'undefined') return
    if (typeof window.gtag !== 'function') return

    window.gtag('event', 'page_view', {
      page_path: pagePath
    })
  } catch {
    // no-op
  }
}

export const useAnalytics = () => {
  const location = useLocation()
  const pageStartTime = useRef(Date.now())
  const previousPath = useRef(null)

  useEffect(() => {
    const currentPath = location.pathname + location.hash

    if (previousPath.current !== null) {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      if (timeSpent > 0 && previousPath.current) {
        analytics.trackTimeOnPage(previousPath.current, timeSpent)
      }
    }

    analytics.trackPageView(currentPath)
    trackGaPageView(currentPath)
    pageStartTime.current = Date.now()
    previousPath.current = currentPath

    return () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000)
      if (timeSpent > 0 && currentPath) {
        analytics.trackTimeOnPage(currentPath, timeSpent)
      }
    }
  }, [location.pathname, location.hash])

  return analytics
}

export default useAnalytics
