type IconProps = { name: 'apps' | 'file' | 'mail' | 'help' | 'user' | 'calendar' | 'download' | 'home' | 'exit' | 'upload' | 'chevron' | 'menu' | 'bookmark'; className?: string }

export function Icon({ name, className }: IconProps) {
  const common = { className, width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  const paths: Record<IconProps['name'], React.ReactNode> = {
    apps: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
    file: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" /><path d="m3 7 9 7 9-7" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.3 2.3 0 1 1 3.5 2c-.9.5-1.3 1-1.3 2M12 17h.01" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
    download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></>,
    home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" /></>,
    exit: <><path d="M14 8V4H4v16h10v-4M10 12h11m0 0-3-3m3 3-3 3" /></>,
    upload: <><path d="M12 16V4m0 0-4 4m4-4 4 4M4 14v6h16v-6" /></>,
    chevron: <path d="m9 6 6 6-6 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    bookmark: <path d="M6 3h12v18l-6-4-6 4z" />,
  }
  return <svg {...common}>{paths[name]}</svg>
}
