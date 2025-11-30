import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Career from './pages/Career'
import Research from './pages/Research'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 250ms ease, color 250ms ease;
`

const Main = styled.main`
  flex: 1;
  padding-top: 64px;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Main>
      <Footer />
    </AppContainer>
  )
}

export default App
