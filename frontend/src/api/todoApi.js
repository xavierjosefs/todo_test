const API_BASE_URL = 'http://localhost:5000/api'

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(payload?.message || 'Request failed')
  }

  return payload
}

export const getTodos = async () => {
  const payload = await request('/todos')
  return Array.isArray(payload?.data) ? payload.data : []
}

export const getTodoById = async (id) => {
  const payload = await request(`/todos/${id}`)
  return payload?.data ?? null
}

export const createTodo = async (todoData) => {
  const payload = await request('/todos', {
    method: 'POST',
    body: JSON.stringify(todoData),
  })

  return payload?.data ?? null
}

export const updateTodo = async (id, todoData) => {
  const payload = await request(`/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(todoData),
  })

  return payload?.data ?? null
}

export const toggleTodoCompleted = async (id) => {
  const payload = await request(`/todos/${id}/toggle`, {
    method: 'PATCH',
  })

  return payload?.data ?? null
}

export const deleteTodo = async (id) => {
  return request(`/todos/${id}`, {
    method: 'DELETE',
  })
}
