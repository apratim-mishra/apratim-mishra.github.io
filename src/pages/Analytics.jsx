import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiDownload, FiRefreshCw, FiTrash2, FiBarChart2, FiUsers, FiEye, FiClock, FiGlobe, FiMonitor, FiBrowser } from 'react-icons/fi'
import { Container, Section, Card, Button } from '../components/ui'
import analytics from '../utils/analytics'

const AnalyticsContainer = styled(Section)`
  padding: 40px 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 12px;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`

const StatCard = styled(Card)`
  padding: 24px;
  text-align: center;
`

const StatIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`

const TopList = styled(Card)`
  padding: 24px;
  margin-bottom: 24px;
`

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`

const ListItemName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`

const ListItemCount = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`

const RecentVisits = styled(Card)`
  padding: 24px;
`

const VisitItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`

const VisitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const VisitPage = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const VisitTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
`

const VisitDetails = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

function Analytics() {
  const [stats, setStats] = useState(null)
  const [recentVisits, setRecentVisits] = useState([])
  const [loading, setLoading] = useState(false)

  const loadData = () => {
    setLoading(true)
    const analyticsStats = analytics.getStats()
    const visits = analytics.getRecentVisits(20)
    setStats(analyticsStats)
    setRecentVisits(visits)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleExport = (format) => {
    analytics.downloadData(format)
  }

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
      analytics.clearData()
      loadData()
    }
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    return `${Math.floor(seconds / 86400)}d ago`
  }

  if (!stats) {
    return (
      <AnalyticsContainer>
        <Container>
          <EmptyState>Loading analytics data...</EmptyState>
        </Container>
      </AnalyticsContainer>
    )
  }

  return (
    <AnalyticsContainer>
      <Container>
        <Header>
          <Title>
            <FiBarChart2 /> Analytics Dashboard
          </Title>
          <ActionButtons>
            <StyledButton onClick={() => handleExport('json')} $variant="secondary">
              <FiDownload /> Export JSON
            </StyledButton>
            <StyledButton onClick={() => handleExport('csv')} $variant="secondary">
              <FiDownload /> Export CSV
            </StyledButton>
            <StyledButton onClick={loadData} $variant="secondary" disabled={loading}>
              <FiRefreshCw /> Refresh
            </StyledButton>
            <StyledButton onClick={handleClear} $variant="secondary" style={{ color: '#ef4444', borderColor: '#ef4444' }}>
              <FiTrash2 /> Clear Data
            </StyledButton>
          </ActionButtons>
        </Header>

        <StatsGrid>
          <StatCard>
            <StatIcon>
              <FiEye size={24} />
            </StatIcon>
            <StatValue>{stats.totalPageViews}</StatValue>
            <StatLabel>Total Page Views</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FiUsers size={24} />
            </StatIcon>
            <StatValue>{stats.uniqueVisitors}</StatValue>
            <StatLabel>Unique Visitors</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FiBarChart2 size={24} />
            </StatIcon>
            <StatValue>{stats.visitsToday}</StatValue>
            <StatLabel>Visits Today</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FiClock size={24} />
            </StatIcon>
            <StatValue>{stats.visitsThisWeek}</StatValue>
            <StatLabel>This Week</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <FiBarChart2 size={24} />
            </StatIcon>
            <StatValue>{stats.visitsThisMonth}</StatValue>
            <StatLabel>This Month</StatLabel>
          </StatCard>
        </StatsGrid>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <TopList>
            <SectionTitle>
              <FiGlobe /> Top Referrers
            </SectionTitle>
            {stats.topReferrers.length > 0 ? (
              stats.topReferrers.map((item, i) => (
                <ListItem key={i}>
                  <ListItemName>{item.name === 'direct' ? 'Direct' : item.name}</ListItemName>
                  <ListItemCount>{item.count}</ListItemCount>
                </ListItem>
              ))
            ) : (
              <EmptyState style={{ padding: '20px' }}>No referrer data yet</EmptyState>
            )}
          </TopList>

          <TopList>
            <SectionTitle>
              <FiMonitor /> Top Devices
            </SectionTitle>
            {stats.topDevices.length > 0 ? (
              stats.topDevices.map((item, i) => (
                <ListItem key={i}>
                  <ListItemName>{item.name}</ListItemName>
                  <ListItemCount>{item.count}</ListItemCount>
                </ListItem>
              ))
            ) : (
              <EmptyState style={{ padding: '20px' }}>No device data yet</EmptyState>
            )}
          </TopList>

          <TopList>
            <SectionTitle>
              <FiBrowser /> Top Browsers
            </SectionTitle>
            {stats.topBrowsers.length > 0 ? (
              stats.topBrowsers.map((item, i) => (
                <ListItem key={i}>
                  <ListItemName>{item.name}</ListItemName>
                  <ListItemCount>{item.count}</ListItemCount>
                </ListItem>
              ))
            ) : (
              <EmptyState style={{ padding: '20px' }}>No browser data yet</EmptyState>
            )}
          </TopList>
        </div>

        <TopList>
          <SectionTitle>
            <FiBarChart2 /> Top Pages
          </SectionTitle>
          {stats.topPages.length > 0 ? (
            stats.topPages.map((item, i) => (
              <ListItem key={i}>
                <ListItemName>{item.name || '/'}</ListItemName>
                <ListItemCount>{item.count}</ListItemCount>
              </ListItem>
            ))
          ) : (
            <EmptyState style={{ padding: '20px' }}>No page data yet</EmptyState>
          )}
        </TopList>

        <RecentVisits>
          <SectionTitle>
            <FiClock /> Recent Visits
          </SectionTitle>
          {recentVisits.length > 0 ? (
            recentVisits.map((visit) => (
              <VisitItem key={visit.id}>
                <VisitHeader>
                  <VisitPage>{visit.page || '/'}</VisitPage>
                  <VisitTime>{formatTimeAgo(visit.timestamp)}</VisitTime>
                </VisitHeader>
                <VisitDetails>
                  <span>From: {visit.referrer === 'direct' ? 'Direct' : visit.referrer}</span>
                  <span>Device: {visit.device}</span>
                  <span>Browser: {visit.browser}</span>
                  <span>{formatDate(visit.timestamp)}</span>
                </VisitDetails>
              </VisitItem>
            ))
          ) : (
            <EmptyState style={{ padding: '20px' }}>No visits recorded yet</EmptyState>
          )}
        </RecentVisits>
      </Container>
    </AnalyticsContainer>
  )
}

export default Analytics
