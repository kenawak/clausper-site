import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Changelog } from './pages/Changelog'

createRoot(document.getElementById('root')!).render(<StrictMode><Changelog /></StrictMode>)
