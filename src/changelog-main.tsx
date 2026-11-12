import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './styles.css'
import { Changelog } from './pages/Changelog'

hydrateRoot(document.getElementById('root')!, <StrictMode><Changelog /></StrictMode>)
