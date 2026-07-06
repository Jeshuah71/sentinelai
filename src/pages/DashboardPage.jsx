import { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import SecurityScore from '../components/dashboard/SecurityScore'
import NistBar from '../components/dashboard/NistBar'
import TaskList from '../components/dashboard/TaskList'
import ActivityFeed from '../components/dashboard/ActivityFeed'
import ConnectedSources from '../components/dashboard/ConnectedSources'
import { dashboardData } from '../data/mockData'  // pull in all our fake data
import { buildWeeklyBriefing, downloadTextFile } from '../utils/briefing'
import '../styles/dashboard.css'

function DashboardPage({ onNavigate }) {
  const { business, score, tasks, events, nist, sources, totalEvents, activeSources, totalSources } = dashboardData
  const [doneTaskIds, setDoneTaskIds] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem('vultur.doneTaskIds')) || []
    } catch {
      return []
    }
  })

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).toUpperCase()

  const taskCount = tasks.length
  const completedCount = doneTaskIds.length

  useEffect(() => {
    window.localStorage.setItem('vultur.doneTaskIds', JSON.stringify(doneTaskIds))
  }, [doneTaskIds])

  function handleTaskToggle(taskId) {
    setDoneTaskIds((current) => {
      if (current.includes(taskId)) {
        return current.filter((id) => id !== taskId)
      }

      return [...current, taskId]
    })
  }

  function handleDownloadBriefing() {
    const briefing = buildWeeklyBriefing(dashboardData, doneTaskIds)
    downloadTextFile('vultur-sentinel-weekly-briefing.txt', briefing)
  }

  return (
    <div className="dashboard">
      <Header onNavigate={onNavigate} page="dashboard" onDownload={handleDownloadBriefing} />

      <main className="dashboard__main">

        {/* GREETING HEADER */}
        <div className="dashboard__greeting">
          <div>
            <p className="dashboard__date">{dateStr}</p>
            <h1 className="dashboard__name">Good morning, {business.owner}.</h1>
            <p className="dashboard__biz">{business.name} · {business.employees} employees</p>
          </div>
          <button className="dashboard__download" onClick={handleDownloadBriefing}>
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
              <span className="plan-card__done">{completedCount} of {taskCount} done</span>
            </div>
            <div className="plan-card__bars">
              {tasks.map((t) => (
                <div
                  key={t.id}
                  className={`plan-card__bar ${doneTaskIds.includes(t.id) ? 'plan-card__bar--done' : ''}`}
                ></div>
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
          <TaskList tasks={tasks} doneTaskIds={doneTaskIds} onTaskToggle={handleTaskToggle} />
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
