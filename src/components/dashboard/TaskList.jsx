// useState lets individual tasks open/close and be checked off.
import { useState } from 'react'

// tasks = array from mockData
function TaskList({ tasks }) {

  // expandedId tracks WHICH task is currently open (showing its detail).
  // null means none are open.
  const [expandedId, setExpandedId] = useState(null)

  // doneTasks tracks which task IDs have been checked off.
  // We use a Set because Set makes it fast to check "is X in this collection?"
  const [doneTasks, setDoneTasks] = useState(new Set())

  function toggleExpand(id) {
    // If clicking the already-open task, close it. Otherwise open the new one.
    setExpandedId(expandedId === id ? null : id)
  }

  function markDone(id) {
    // We create a NEW Set (spread the old one in) then add the id.
    // React requires new objects/arrays to detect state changes.
    setDoneTasks(new Set([...doneTasks, id]))
    setExpandedId(null) // close the task after marking done
  }

  const completedCount = doneTasks.size
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
          const isDone = doneTasks.has(task.id)       // true/false
          const isOpen = expandedId === task.id        // true/false

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
                {/* Checkbox — checked when isDone is true */}
                <input
                  type="checkbox"
                  checked={isDone}
                  readOnly
                  className="tasklist__checkbox"
                  onClick={(e) => { e.stopPropagation(); markDone(task.id) }}
                  // stopPropagation prevents the click from also triggering the row's onClick
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
                    onClick={() => markDone(task.id)}
                  >
                    Mark as done
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
