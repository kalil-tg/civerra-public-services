import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/libre-baskerville/400.css'
import '@fontsource/libre-baskerville/700.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
