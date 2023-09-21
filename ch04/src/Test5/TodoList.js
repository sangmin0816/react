import TodoListItem from './TodoListItem';

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <div>
      <ul>
      {todos.map(todo => (
         <TodoListItem id={todo.id} text={todo.text} onToggle={onToggle} onRemove={onRemove} />
      ))}
      </ul>
    </div>
  )
}
export default TodoList