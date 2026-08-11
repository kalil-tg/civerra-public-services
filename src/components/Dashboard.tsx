import { deadlines, documents } from '../data'
import { Icon } from '../icons'
import { Progress } from './Progress'

export function Dashboard({ onContinue }: { onContinue: () => void }) {
  return <main id="main-content" tabIndex={-1} className="dashboard page-grid">
    <section className="dashboard-main" aria-labelledby="dashboard-title">
      <h1 id="dashboard-title">Your services, in one clear place.</h1>
      <p className="lead">Track your applications, meet deadlines and view your messages.</p>
      <div className="application-frame">
        <div className="application-heading"><span className="round-icon"><Icon name="home" /></span><div><h2>Housing support</h2><p>Step 3 of 5 <span className="status">In progress</span></p></div><button className="button primary" type="button" onClick={onContinue}>Continue application</button></div>
        <Progress />
        <div className="application-row current"><span className="step-circle">3</span><div><h3>Household and income</h3><p>Tell us about the people in your household and your income.</p></div><div className="due"><small>Due by</small><span><Icon name="calendar" />18 August 2026</span></div><Icon name="chevron" /></div>
        <div className="application-row"><span className="step-circle muted">4</span><div><h3>Review</h3><p>Check your answers and documents before you submit.</p></div><span className="outlined-status">Not started</span><Icon name="chevron" /></div>
        <div className="application-row"><span className="step-circle muted">5</span><div><h3>Submit</h3><p>Sign and send your application.</p></div><span className="outlined-status">Not started</span><Icon name="chevron" /></div>
      </div>
      <div className="signout-row"><button className="button secondary" type="button"><Icon name="exit" />Save and sign out</button><span>Your progress is saved automatically.</span></div>
    </section>
    <aside className="utility-rail" aria-label="Application updates">
      <UtilitySection title="Upcoming deadlines" action="View all">
        {deadlines.map(([title, detail, date]) => <button className="utility-row" type="button" key={title}><span className="utility-icon"><Icon name="calendar" /></span><span><strong>{title}</strong><small>{detail}</small></span><time>{date}</time><Icon name="chevron" /></button>)}
        <a href="#deadlines">See all deadlines <Icon name="chevron" /></a>
      </UtilitySection>
      <UtilitySection title="Documents" action="View all">
        {documents.map(([title, date]) => <button className="document-row" type="button" key={title}><Icon name="file" /><span>{title}</span><time>{date}</time><Icon name="download" /></button>)}
        <button className="text-action" type="button">Upload document <Icon name="chevron" /></button>
      </UtilitySection>
      <UtilitySection title="Recent messages" action="View all">
        <button className="utility-row" type="button"><span className="utility-icon"><Icon name="mail" /></span><span><strong>Padua Housing Office</strong><small>Update on your application</small></span><time>2 Aug 2026</time><Icon name="chevron" /></button>
        <a href="#messages">Go to messages <Icon name="chevron" /></a>
      </UtilitySection>
    </aside>
  </main>
}

function UtilitySection({ title, action, children }: { title: string; action: string; children: React.ReactNode }) {
  return <section className="utility-section"><header><h2>{title}</h2><a href={`#${title.toLowerCase().replace(' ', '-')}`}>{action}</a></header>{children}</section>
}
