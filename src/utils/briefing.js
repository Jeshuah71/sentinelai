export function buildWeeklyBriefing(data, doneTaskIds = []) {
  const completed = new Set(doneTaskIds)
  const openTasks = data.tasks.filter((task) => !completed.has(task.id))
  const highPriorityTasks = openTasks.filter((task) => task.priority === 'HIGH')
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const lines = [
    `Vultur Sentinel Weekly Briefing`,
    `${data.business.name} - ${date}`,
    ``,
    `Security posture: ${data.score.value}/${data.score.max} (${data.score.label})`,
    `Change since last week: ${data.score.change > 0 ? '+' : ''}${data.score.change}`,
    ``,
    `Summary`,
    data.score.summary,
    ``,
    `Open tasks (${openTasks.length})`,
    ...openTasks.map((task) => `- [${task.priority}] ${task.title} (${task.category}, ~${task.minutes} min)`),
    ``,
    `Highest priority`,
    highPriorityTasks.length > 0
      ? highPriorityTasks.map((task) => `- ${task.title}`).join('\n')
      : '- No high priority tasks remain.',
    ``,
    `Events reviewed: ${data.totalEvents}`,
    ...data.events.map((event) => `- [${event.severity}] ${event.title} - ${event.meta}`),
    ``,
    `Connected sources: ${data.activeSources}/${data.totalSources} active`,
    ...data.sources.map((source) => `- ${source.name}: ${source.label}`),
    ``,
    `Prototype note: this briefing is generated from bundled mock data for portfolio demonstration.`,
  ]

  return lines.join('\n')
}

export function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
