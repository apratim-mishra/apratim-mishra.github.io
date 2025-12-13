class Analytics {
  constructor() {
    this.storageKey = 'apratim_analytics_data'
    this.sessionKey = 'apratim_analytics_session'
    this.maxEntries = 10000
    this.init()
  }

  init() {
    if (!this.getData()) {
      this.saveData({
        visits: [],
        uniqueVisitors: 0,
        totalPageViews: 0,
        referrers: {},
        pages: {},
        devices: {},
        browsers: {},
        countries: {},
        lastUpdated: new Date().toISOString()
      })
    }
  }

  getData() {
    try {
      const data = localStorage.getItem(this.storageKey)
      return data ? JSON.parse(data) : null
    } catch (error) {
      console.error('Error reading analytics data:', error)
      return null
    }
  }

  saveData(data) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data))
      return true
    } catch (error) {
      console.error('Error saving analytics data:', error)
      if (error.name === 'QuotaExceededError') {
        this.cleanupOldData()
        return this.saveData(data)
      }
      return false
    }
  }

  cleanupOldData() {
    const data = this.getData()
    if (data && data.visits) {
      data.visits = data.visits.slice(-this.maxEntries / 2)
      this.saveData(data)
    }
  }

  getSessionId() {
    let sessionId = sessionStorage.getItem(this.sessionKey)
    if (!sessionId) {
      sessionId = this.generateId()
      sessionStorage.setItem(this.sessionKey, sessionId)
    }
    return sessionId
  }

  generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  getVisitorId() {
    let visitorId = localStorage.getItem('apratim_visitor_id')
    if (!visitorId) {
      visitorId = this.generateId()
      localStorage.setItem('apratim_visitor_id', visitorId)
    }
    return visitorId
  }

  getReferrer() {
    const referrer = document.referrer
    if (!referrer || referrer === window.location.href) {
      return 'direct'
    }
    try {
      const url = new URL(referrer)
      return url.hostname
    } catch {
      return referrer
    }
  }

  getUserAgent() {
    return navigator.userAgent
  }

  getDeviceInfo() {
    const ua = this.getUserAgent()
    const screen = {
      width: window.screen.width,
      height: window.screen.height
    }
    
    let device = 'desktop'
    if (/mobile|android|iphone|ipad/i.test(ua)) {
      device = 'mobile'
    } else if (/tablet|ipad/i.test(ua)) {
      device = 'tablet'
    }

    return { device, screen }
  }

  getBrowser() {
    const ua = this.getUserAgent()
    if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome'
    if (ua.includes('Firefox')) return 'Firefox'
    if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari'
    if (ua.includes('Edg')) return 'Edge'
    if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera'
    return 'Other'
  }

  getLocation() {
    return {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language || navigator.userLanguage
    }
  }

  trackPageView(page = window.location.pathname) {
    const data = this.getData()
    if (!data) return

    const visitorId = this.getVisitorId()
    const sessionId = this.getSessionId()
    const referrer = this.getReferrer()
    const { device, screen } = this.getDeviceInfo()
    const browser = this.getBrowser()
    const location = this.getLocation()

    const visit = {
      id: this.generateId(),
      visitorId,
      sessionId,
      page,
      referrer,
      timestamp: new Date().toISOString(),
      device,
      screen,
      browser,
      timezone: location.timezone,
      language: location.language,
      userAgent: this.getUserAgent()
    }

    data.visits.push(visit)
    data.totalPageViews++

    if (!data.pages[page]) {
      data.pages[page] = 0
    }
    data.pages[page]++

    if (!data.referrers[referrer]) {
      data.referrers[referrer] = 0
    }
    data.referrers[referrer]++

    if (!data.devices[device]) {
      data.devices[device] = 0
    }
    data.devices[device]++

    if (!data.browsers[browser]) {
      data.browsers[browser] = 0
    }
    data.browsers[browser]++

    const isNewVisitor = !localStorage.getItem(`apratim_visited_${visitorId}`)
    if (isNewVisitor) {
      data.uniqueVisitors++
      localStorage.setItem(`apratim_visited_${visitorId}`, 'true')
    }

    data.lastUpdated = new Date().toISOString()

    this.saveData(data)
    return visit
  }

  trackTimeOnPage(page, timeSpent) {
    const data = this.getData()
    if (!data) return

    if (!data.timeOnPage) {
      data.timeOnPage = {}
    }
    if (!data.timeOnPage[page]) {
      data.timeOnPage[page] = { total: 0, count: 0, average: 0 }
    }

    data.timeOnPage[page].total += timeSpent
    data.timeOnPage[page].count++
    data.timeOnPage[page].average = 
      data.timeOnPage[page].total / data.timeOnPage[page].count

    this.saveData(data)
  }

  getStats() {
    const data = this.getData()
    if (!data) return null

    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    const visits = data.visits || []
    const visitsToday = visits.filter(v => new Date(v.timestamp) >= today).length
    const visitsThisWeek = visits.filter(v => new Date(v.timestamp) >= thisWeek).length
    const visitsThisMonth = visits.filter(v => new Date(v.timestamp) >= thisMonth).length

    return {
      totalPageViews: data.totalPageViews || 0,
      uniqueVisitors: data.uniqueVisitors || 0,
      visitsToday,
      visitsThisWeek,
      visitsThisMonth,
      totalVisits: visits.length,
      topPages: this.getTopItems(data.pages || {}),
      topReferrers: this.getTopItems(data.referrers || {}),
      topDevices: this.getTopItems(data.devices || {}),
      topBrowsers: this.getTopItems(data.browsers || {}),
      lastUpdated: data.lastUpdated
    }
  }

  getTopItems(obj, limit = 10) {
    return Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([key, value]) => ({ name: key, count: value }))
  }

  exportData(format = 'json') {
    const data = this.getData()
    if (!data) return null

    if (format === 'json') {
      return JSON.stringify(data, null, 2)
    } else if (format === 'csv') {
      return this.convertToCSV(data.visits || [])
    }
    return null
  }

  convertToCSV(visits) {
    if (!visits.length) return ''

    const headers = Object.keys(visits[0]).join(',')
    const rows = visits.map(visit => 
      Object.values(visit).map(val => 
        typeof val === 'object' ? JSON.stringify(val) : val
      ).join(',')
    )

    return [headers, ...rows].join('\n')
  }

  downloadData(format = 'json') {
    const data = this.exportData(format)
    if (!data) return

    const blob = new Blob([data], { 
      type: format === 'json' ? 'application/json' : 'text/csv' 
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.${format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  clearData() {
    localStorage.removeItem(this.storageKey)
    localStorage.removeItem('apratim_visitor_id')
    sessionStorage.removeItem(this.sessionKey)
    this.init()
  }

  getRecentVisits(limit = 50) {
    const data = this.getData()
    if (!data || !data.visits) return []
    
    return data.visits
      .slice(-limit)
      .reverse()
  }
}

export default new Analytics()
