import { steps } from '../data'

export function Progress({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? 'progress compact' : 'progress'} aria-label="Application progress">
    {compact && <strong>Step 3 of 5</strong>}
    <ol>{steps.map((step, index) => <li key={step} className={index < 2 ? 'complete' : index === 2 ? 'current' : ''} aria-current={index === 2 ? 'step' : undefined}><span>{index < 2 ? '✓' : index + 1}</span><small>{step}</small></li>)}</ol>
  </div>
}
