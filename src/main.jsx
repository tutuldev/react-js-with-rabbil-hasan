import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.main.css'
import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)
