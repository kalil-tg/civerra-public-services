import { Icon } from '../icons'

export function Confirmation({ onHome }: { onHome: () => void }) {
  return <main id="main-content" tabIndex={-1} className="confirmation"><span className="confirmation-mark" aria-hidden="true">✓</span><h1>Your answers are ready to review.</h1><p>We saved your household and income details. Review every answer before submitting your application.</p><dl><div><dt>Application</dt><dd>Housing support</dd></div><div><dt>Reference</dt><dd>HS-2026-1842</dd></div><div><dt>Next step</dt><dd>Review</dd></div></dl><div><button type="button" className="button primary">Review application <span aria-hidden="true">→</span></button><button type="button" className="button secondary" onClick={onHome}><Icon name="home" />Return to applications</button></div></main>
}
