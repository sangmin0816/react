const TodoInsert = ({onInsert}) => {
  return (
    <>
    <input type="text" className="form-control" placeholder="Insert todo" />
    <button type="submit" onClick={onInsert}>Add Todo</button>
    </>
  )
}
export default TodoInsert