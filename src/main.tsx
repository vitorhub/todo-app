import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Global } from './components/globalStyle.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
)
