import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import App from './App'
import { ThemeProvider } from './styles/ThemeContext'
import './styles/global.css'

const engine = new Styletron()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>
)

