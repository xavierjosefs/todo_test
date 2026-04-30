export default function TodoCard({ todo, onToggle, onEdit, onDelete, isLoading }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo._id)}
        disabled={isLoading}
        className="flex-shrink-0 mt-1"
        title={todo.completed ? 'Mark as pending' : 'Mark as completed'}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {todo.title}
        </h3>
        <p className={`text-sm mt-1 ${todo.completed ? 'text-gray-300 line-through' : 'text-gray-600'}`}>
          {todo.content}
        </p>
        <div className="flex gap-6 mt-3 text-xs text-gray-500">
          <span>Created: {formatDate(todo.createdAt)}</span>
          <span>Updated: {formatDate(todo.updatedAt)}</span>
          <span
            className={`font-medium ${
              todo.completed ? 'text-green-600' : 'text-yellow-600'
            }`}
          >
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-shrink-0">
        <button
          onClick={() => onEdit(todo._id)}
          disabled={isLoading}
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
          title="Edit task"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          disabled={isLoading}
          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
          title="Delete task"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
