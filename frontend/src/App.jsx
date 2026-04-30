import { useEffect, useState } from 'react'
import Header from './components/Header'
import StatsCard from './components/StatsCard'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import EmptyState from './components/EmptyState'
import ConfirmModal from './components/ConfirmModal'
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
} from './api/todoApi'

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editingTodo, setEditingTodo] = useState(null)
  const [todoToDelete, setTodoToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const loadTodos = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getTodos()
        setTodos(Array.isArray(data) ? data : [])
      } catch (err) {
        setError('Failed to load tasks. Please check if the backend is running.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadTodos()
  }, [])

  const handleAddClick = () => {
    setEditingId(null)
    setEditingTodo(null)
    setShowForm(true)
  }

  const handleEditClick = async (id) => {
    try {
      const todo = await getTodoById(id)
      setEditingId(id)
      setEditingTodo(todo)
      setShowForm(true)
    } catch (err) {
      setError('Failed to load task for editing')
      console.error(err)
    }
  }

  const handleFormSubmit = async (formData) => {
    try {
      if (editingId) {
        const updatedTodo = await updateTodo(editingId, formData)
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo._id === editingId ? updatedTodo : todo
          )
        )
      } else {
        const newTodo = await createTodo(formData)
        setTodos((currentTodos) => [newTodo, ...currentTodos])
      }
      setShowForm(false)
      setEditingId(null)
      setEditingTodo(null)
      setError(null)
    } catch (err) {
      setError('Failed to save task')
      console.error(err)
    }
  }

  const handleFormCancel = () => {
    setShowForm(false)
    setEditingId(null)
    setEditingTodo(null)
  }

  const handleToggleCompleted = async (id) => {
    try {
      const updatedTodo = await toggleTodoCompleted(id)
      setTodos((currentTodos) =>
        currentTodos.map((todo) => (todo._id === id ? updatedTodo : todo))
      )
    } catch (err) {
      setError('Failed to update task status')
      console.error(err)
    }
  }

  const handleDeleteTodo = (id) => {
    const selectedTodo = todos.find((todo) => todo._id === id) ?? null
    setTodoToDelete(selectedTodo)
  }

  const handleDeleteCancel = () => {
    if (isDeleting) return
    setTodoToDelete(null)
  }

  const handleDeleteConfirm = async () => {
    if (!todoToDelete?._id) return

    setIsDeleting(true)
    try {
      await deleteTodo(todoToDelete._id)
      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo._id !== todoToDelete._id)
      )
      setTodoToDelete(null)
      setError(null)
    } catch (err) {
      setError('Failed to delete task')
      console.error(err)
    } finally {
      setIsDeleting(false)
    }
  }

  const totalTasks = todos.length
  const completedTasks = todos.filter((todo) => todo.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="min-h-screen bg-gray-50">
      <ConfirmModal
        isOpen={Boolean(todoToDelete)}
        title="Delete task?"
        message={
          todoToDelete
            ? `This will permanently delete "${todoToDelete.title}".`
            : ''
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        isLoading={isDeleting}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

      <main className="mx-auto max-w-4xl px-6 py-12">
        <Header />

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        <div className="mb-8 grid grid-cols-3 gap-4">
          <StatsCard label="Total Tasks" value={totalTasks} />
          <StatsCard label="Completed" value={completedTasks} />
          <StatsCard label="Pending" value={pendingTasks} />
        </div>

        {!showForm && (
          <button
            onClick={handleAddClick}
            className="mx-auto mb-8 flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <span className="text-xl">+</span> Add New Task
          </button>
        )}

        {showForm && (
          <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {editingId ? 'Edit Task' : 'Create New Task'}
            </h2>
            <TodoForm
              initialData={editingTodo}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
            />
          </div>
        )}

        {isLoading ? (
          <div className="py-12 text-center">
            <div className="inline-block">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading tasks...</p>
          </div>
        ) : todos.length === 0 ? (
          <EmptyState onAddTask={handleAddClick} />
        ) : (
          <TodoList
            todos={todos}
            onToggle={handleToggleCompleted}
            onEdit={handleEditClick}
            onDelete={handleDeleteTodo}
            isLoading={false}
          />
        )}
      </main>
    </div>
  )
}

export default App
