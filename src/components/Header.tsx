import { Icon } from '../icons'

type HeaderProps = { active?: string; onHome?: () => void; compact?: boolean }

export function Header({ active = 'Applications', onHome, compact = false }: HeaderProps) {
  return <header className={compact ? 'site-header compact-header' : 'site-header'}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    {compact && <button className="compact-menu" type="button" aria-label="Open menu"><Icon name="menu" /></button>}
    <button className="brand" type="button" onClick={onHome}>CIVERRA</button>
    {!compact && <nav aria-label="Primary navigation">
      {['Services', 'Applications', 'Messages', 'Help'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} aria-current={item === active ? 'page' : undefined}><Icon name={(['apps', 'file', 'mail', 'help'] as const)[index]} />{item}</a>)}
    </nav>}
    {!compact && <details className="mobile-menu"><summary><Icon name="menu" /> Menu</summary><nav aria-label="Mobile navigation">{['Services', 'Applications', 'Messages', 'Help'].map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav></details>}
    <button className="user-control" type="button"><Icon name="user" />Kalil<span aria-hidden="true">⌄</span></button>
  </header>
}
