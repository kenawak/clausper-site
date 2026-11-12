import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './styles.css'
import { Terms } from './pages/Terms'

hydrateRoot(document.getElementById('root')!, <StrictMode><Terms /></StrictMode>)
