import { dashboardData } from '../src/data/mockData.js'
import { buildWeeklyBriefing } from '../src/utils/briefing.js'

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

const requiredTopLevelKeys = [
  'business',
  'score',
  'tasks',
  'events',
  'nist',
  'sources',
  'totalEvents',
  'totalSources',
  'activeSources',
]

for (const key of requiredTopLevelKeys) {
  assert(key in dashboardData, `Missing dashboardData.${key}`)
}

assert(dashboardData.score.value >= 0, 'Score cannot be below zero')
assert(dashboardData.score.value <= dashboardData.score.max, 'Score cannot exceed max')
assert(dashboardData.tasks.length > 0, 'At least one task is required')
assert(dashboardData.events.length > 0, 'At least one event is required')
assert(dashboardData.nist.length === 6, 'NIST CSF 2.0 requires six functions')
assert(
  dashboardData.activeSources <= dashboardData.totalSources,
  'Active sources cannot exceed total sources',
)

const taskIds = new Set()
for (const task of dashboardData.tasks) {
  assert(!taskIds.has(task.id), `Duplicate task id: ${task.id}`)
  taskIds.add(task.id)
  assert(task.title, `Task ${task.id} is missing a title`)
  assert(['HIGH', 'MED', 'LOW'].includes(task.priority), `Task ${task.id} has invalid priority`)
}

const briefing = buildWeeklyBriefing(dashboardData, [])
assert(briefing.includes('Vultur Sentinel Weekly Briefing'), 'Briefing title missing')
assert(briefing.includes(dashboardData.business.name), 'Briefing business missing')

console.log('Data validation passed')
