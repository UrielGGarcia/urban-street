import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Se renderiza Router ya que es el que contiene las rutas de las paginas */}
    <Router />
  </StrictMode>,
)
