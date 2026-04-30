export default function EmptyState({ onAddTask }) {
  return (
    <div className="text-center py-16">
      <svg
        className="mx-auto h-16 w-16 text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01M9 16h.01"
        />
      </svg>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No tasks yet
      </h3>
      <p className="text-gray-600 mb-6">
        Create your first task to get started.
      </p>
      <button
        onClick={onAddTask}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Create Your First Task
      </button>
    </div>
  );
}
