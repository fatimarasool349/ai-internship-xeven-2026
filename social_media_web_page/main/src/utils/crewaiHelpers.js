/**
 * Normalize CrewAI AMP status values to internal app states.
 */
export function normalizeCrewStatus(status) {
  const value = (status || '').toLowerCase()

  if (value === 'completed' || value === 'success') return 'completed'
  if (value === 'error' || value === 'failed') return 'failed'
  if (value === 'running') return 'running'

  return 'running'
}

/**
 * Extract generated text from a CrewAI status/result payload.
 */
export function extractCrewOutput(result) {
  if (!result) return ''

  if (typeof result === 'string') return result

  // CrewAI AMP completed response: { status, result: { output, tasks } }
  if (result.result?.output) return result.result.output

  // Alternate shapes
  if (result.output) return result.output
  if (result.content) return result.content
  if (result.generated_content) return result.generated_content

  // Last task output fallback
  const tasks = result.result?.tasks || result.tasks
  if (Array.isArray(tasks) && tasks.length > 0) {
    return tasks[tasks.length - 1].output || ''
  }

  return JSON.stringify(result, null, 2)
}

/**
 * Map CrewAI current_task / progress to a loading stage index.
 */
export function mapTaskToLoadingStage(currentTask, progress) {
  const task = (currentTask || '').toLowerCase()

  if (task.includes('trend') || task.includes('research')) return 2
  if (task.includes('engagement') || task.includes('analy')) return 3
  if (task.includes('retriev') || task.includes('knowledge') || task.includes('rag')) return 4
  if (task.includes('content') || task.includes('creat') || task.includes('writ')) return 5

  if (progress?.completed_tasks != null && progress?.total_tasks) {
    const ratio = progress.completed_tasks / progress.total_tasks
    if (ratio >= 0.85) return 6
    if (ratio >= 0.65) return 5
    if (ratio >= 0.45) return 4
    if (ratio >= 0.25) return 3
    if (ratio > 0) return 2
  }

  return 2
}

/**
 * Parse axios/CrewAI errors into a user-friendly message.
 */
export function parseApiError(error) {
  const data = error.response?.data

  if (typeof data === 'string') return data
  if (data?.message) return data.message
  if (data?.error) {
    return typeof data.error === 'string' ? data.error : JSON.stringify(data.error)
  }
  if (data?.detail) {
    return typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail)
  }

  if (error.message === 'Network Error') {
    return 'Unable to reach the CrewAI API. Check your URL, token, and network connection.'
  }

  return error.message || 'An unexpected error occurred. Please try again.'
}
