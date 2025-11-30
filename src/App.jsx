import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Contact />
      </Main>
      <Footer />
    </AppContainer>
  )
}

export default App

