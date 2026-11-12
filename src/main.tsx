import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './styles.css'
import { Landing } from './pages/Landing'

hydrateRoot(document.getElementById('root')!, <StrictMode><Landing /></StrictMode>)
