import { useState } from 'react'

function TaskList({ tasks, doneTaskIds, onTaskToggle }) {
  const [expandedId, setExpandedId] = useState(null)

  function toggleExpand(id) {
    setExpandedId(expandedId === id ? null : id)
  }

  function toggleDone(id) {
    onTaskToggle(id)
    setExpandedId(null)
  }

  const completedCount = doneTaskIds.length
  const totalCount = tasks.length

  return (
    <div className="tasklist card">
      <div className="tasklist__header">
        <div>
          <h2 className="tasklist__title">Fix this week</h2>
          <p className="tasklist__subtitle">Tap a task to see why it matters, then check it off.</p>
        </div>
        <span className="tasklist__count">{totalCount} TASKS</span>
      </div>

      <div className="tasklist__items">
        {tasks.map((task) => {
          const isDone = doneTaskIds.includes(task.id)
          const isOpen = expandedId === task.id

          return (
            <div
              key={task.id}
              className={`tasklist__item ${isDone ? 'tasklist__item--done' : ''}`}
            >
              {/* COLLAPSED ROW — always visible */}
              <button
                className="tasklist__row"
                onClick={() => !isDone && toggleExpand(task.id)}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  className="tasklist__checkbox"
                  aria-label={`Mark "${task.title}" ${isDone ? 'not done' : 'done'}`}
                  onChange={(e) => { e.stopPropagation(); toggleDone(task.id) }}
                  onClick={(e) => e.stopPropagation()}
                />
                <span className={`badge badge--${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
                <span className="tasklist__meta">
                  {task.category} · ~{task.minutes} min
                </span>
                <span className="tasklist__chevron">{isOpen ? '∧' : '›'}</span>
              </button>

              <p className="tasklist__task-title">{task.title}</p>

              {/* EXPANDED DETAIL — only shown when this task is open */}
              {isOpen && (
                <div className="tasklist__detail">
                  <p>{task.detail}</p>
                  <button
                    className="btn btn--accent"
                    onClick={() => toggleDone(task.id)}
                  >
                    {isDone ? 'Mark as open' : 'Mark as done'}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <p className="tasklist__progress">
        {completedCount} of {totalCount} done
      </p>
    </div>
  )
}

export default TaskList
