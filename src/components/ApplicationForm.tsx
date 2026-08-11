import { useRef, useState } from 'react'
import { Icon } from '../icons'
import { Progress } from './Progress'

type FormState = { household: string; income: string; incomeType: string; additional: boolean; file: string }
const initial: FormState = { household: '3', income: '', incomeType: '', additional: false, file: '' }

export function ApplicationForm({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<string[]>([])
  const [saved, setSaved] = useState(false)
  const errorRef = useRef<HTMLDivElement>(null)

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const next = []
    if (!form.income.trim()) next.push('Enter your annual household income')
    if (!form.incomeType) next.push('Select your income type')
    setErrors(next)
    if (next.length) requestAnimationFrame(() => errorRef.current?.focus())
    else onComplete()
  }

  return <main id="main-content" tabIndex={-1} className="form-page">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><button type="button" onClick={onBack}>Applications</button><span aria-hidden="true">/</span><span>Housing support</span></nav>
    <details className="mobile-details"><summary><Icon name="file" />Application details</summary><Details /></details>
    <div className="form-shell">
      <section className="form-main" aria-labelledby="form-title">
        <h1 id="form-title">Household and income</h1>
        <p className="lead">Tell us about the people in your household and your income.</p>
        <Progress compact />
        {errors.length > 0 && <div className="error-summary" role="alert" tabIndex={-1} ref={errorRef}><span aria-hidden="true">!</span><div><h2>There is a problem</h2><ul>{errors.map(error => <li key={error}><a href={error.includes('annual') ? '#income' : '#income-type'}>{error}</a></li>)}</ul></div></div>}
        <form noValidate onSubmit={submit}>
          <fieldset><legend>Household</legend><label htmlFor="household">How many people live in your household?</label><select id="household" value={form.household} onChange={event => setForm({ ...form, household: event.target.value })}><option>1</option><option>2</option><option>3</option><option>4</option><option>5 or more</option></select></fieldset>
          <fieldset><legend>Income</legend><div className="field-grid"><div className={errors[0]?.includes('annual') ? 'field invalid' : 'field'}><label htmlFor="income">Annual household income</label><div className="currency-field"><span aria-hidden="true">€</span><input id="income" inputMode="decimal" value={form.income} aria-invalid={errors.some(e => e.includes('annual'))} aria-describedby={errors.some(e => e.includes('annual')) ? 'income-error' : undefined} onChange={event => setForm({ ...form, income: event.target.value })} placeholder="e.g. 28,500" /></div>{errors.some(e => e.includes('annual')) && <p className="field-error" id="income-error"><span aria-hidden="true">!</span> Enter your annual household income</p>}</div><div className={errors.some(e => e.includes('income type')) ? 'field invalid' : 'field'}><label htmlFor="income-type">Income type</label><select id="income-type" value={form.incomeType} aria-invalid={errors.some(e => e.includes('income type'))} aria-describedby={errors.some(e => e.includes('income type')) ? 'type-error' : undefined} onChange={event => setForm({ ...form, incomeType: event.target.value })}><option value="">Select income type</option><option>Employment</option><option>Self-employment</option><option>Pension</option><option>Other support</option></select>{errors.some(e => e.includes('income type')) && <p className="field-error" id="type-error"><span aria-hidden="true">!</span> Select your income type</p>}</div></div><label className="check-row"><input type="checkbox" checked={form.additional} onChange={event => setForm({ ...form, additional: event.target.checked })} />I receive additional support</label></fieldset>
          <fieldset><legend>Income evidence</legend><p>Upload a document that shows your household income.</p><label className="upload-control" htmlFor="evidence"><Icon name="upload" /><span><strong>{form.file || 'Upload document'}</strong><small>Accepted file types: PDF, JPG, PNG. Max size 10MB.</small></span></label><input className="visually-hidden" id="evidence" type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={event => setForm({ ...form, file: event.target.files?.[0]?.name ?? '' })} /></fieldset>
          <div className="form-actions"><button className="button secondary" type="button" onClick={onBack}>Back</button><div><button className="button secondary" type="button" onClick={() => { setSaved(true); window.setTimeout(() => setSaved(false), 1800) }}><Icon name="bookmark" />Save for later</button><button className="button primary" type="submit">Save and continue <span aria-hidden="true">→</span></button></div></div>
          <p className="save-status" role="status">{saved ? 'Your progress has been saved.' : ''}</p>
        </form>
      </section>
      <aside className="details-rail" aria-label="Application details"><Details /></aside>
    </div>
  </main>
}

function Details() {
  return <><h2>Application details</h2><dl><div><dt>Due date</dt><dd><Icon name="calendar" />18 August 2026</dd></div><div><dt>Reference</dt><dd><Icon name="file" />HS-2026-1842</dd></div></dl><a href="#help"><Icon name="help" />Get help with this question</a></>
}
