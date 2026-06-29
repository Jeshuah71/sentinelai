import Header from '../components/layout/Header'
import SecurityScore from '../components/dashboard/SecurityScore'
import NistBar from '../components/dashboard/NistBar'
import TaskList from '../components/dashboard/TaskList'
import ActivityFeed from '../components/dashboard/ActivityFeed'
import ConnectedSources from '../components/dashboard/ConnectedSources'
import { dashboardData } from '../data/mockData'  // pull in all our fake data
import '../styles/dashboard.css'

function DashboardPage({ onNavigate }) {

  // Destructure the data we need from the imported object.
  // This is the same as writing:
  //   const business = dashboardData.business
  //   const score = dashboardData.score
  //   ... etc.
  const { business, score, tasks, events, nist, sources, totalEvents, activeSources, totalSources } = dashboardData

  // Build the date string: "TUESDAY · JUNE 28, 2026"
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).toUpperCase()

  // Count tasks completed (we'll start at 0 — TaskList handles its own state)
  const taskCount = tasks.length

  return (
    <div className="dashboard">
      <Header onNavigate={onNavigate} page="dashboard" />

      <main className="dashboard__main">

        {/* GREETING HEADER */}
        <div className="dashboard__greeting">
          <div>
            <p className="dashboard__date">{dateStr}</p>
            <h1 className="dashboard__name">Good morning, {business.owner}.</h1>
            <p className="dashboard__biz">{business.name} · {business.employees} employees</p>
          </div>
          <button className="dashboard__download">
            <span className="dot dot--green"></span>
            Download weekly briefing
          </button>
        </div>

        {/* TOP ROW: score + plan summary side by side */}
        <div className="dashboard__top-row">
          <SecurityScore score={score} />

          {/* Plan summary card */}
          <div className="plan-card card">
            <div className="plan-card__header">
              <p className="card__label">THIS WEEK'S PLAN</p>
              <span className="plan-card__done">0 of {taskCount} done</span>
            </div>
            {/* Progress bars (one per task, all gray = nothing done yet) */}
            <div className="plan-card__bars">
              {tasks.map((t) => (
                <div key={t.id} className="plan-card__bar"></div>
              ))}
            </div>
            <p className="plan-card__text">
              There are {taskCount} things worth doing this week — one high priority.
              Check each one off as you go — the score updates with you.
            </p>
            <p className="plan-card__time">
              ~{tasks.reduce((sum, t) => sum + t.minutes, 0)} min total across {taskCount} tasks
              {/* .reduce() adds up all the minutes: starts at 0, adds each task's minutes */}
            </p>
          </div>
        </div>

        {/* NIST BAR */}
        <NistBar nist={nist} />

        {/* BOTTOM ROW: tasks + activity feed side by side */}
        <div className="dashboard__bottom-row">
          <TaskList tasks={tasks} />
          <div className="dashboard__right-col">
            <ActivityFeed events={events} totalEvents={totalEvents} />
            <ConnectedSources
              sources={sources}
              activeSources={activeSources}
              totalSources={totalSources}
            />
          </div>
        </div>

        {/* BACK LINK */}
        <div className="dashboard__back">
          <button className="dashboard__back-btn" onClick={() => onNavigate('home')}>
            ← Back to home
          </button>
        </div>

      </main>
    </div>
  )
}

export default DashboardPage
