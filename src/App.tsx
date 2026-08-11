import { useState } from 'react'
import { ApplicationForm } from './components/ApplicationForm'
import { Confirmation } from './components/Confirmation'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

type View = 'dashboard' | 'form' | 'confirmation'

export default function App() {
  const [view, setView] = useState<View>('dashboard')
  const go = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: 'instant' }); window.setTimeout(() => document.getElementById('main-content')?.focus(), 0) }
  return <><Header compact={view !== 'dashboard'} onHome={() => go('dashboard')} />{view === 'dashboard' && <Dashboard onContinue={() => go('form')} />}{view === 'form' && <ApplicationForm onBack={() => go('dashboard')} onComplete={() => go('confirmation')} />}{view === 'confirmation' && <Confirmation onHome={() => go('dashboard')} />}<footer className="site-footer"><strong>CIVERRA</strong><span>Fictional public-services case study</span><a href="#accessibility">Accessibility</a><a href="#privacy">Privacy</a></footer></>
}
