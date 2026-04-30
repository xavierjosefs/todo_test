import TodoCard from './TodoCard';

export default function TodoList({ todos, onToggle, onEdit, onDelete, isLoading }) {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}
