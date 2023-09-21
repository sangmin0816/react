const TodoListItem = ({id, text, onToggle, onRemove}) => {
  return (
    <li className="TodoListItem" id={id}>
      <button className="Checked" onClick={onToggle}></button>
      <p className="Todo.text">{text}</p>
      <button className="Delete" onClick={onRemove}></button>
    </li>
  )
}
export default TodoListItem