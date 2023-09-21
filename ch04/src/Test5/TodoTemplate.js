const TodoTemplate = ({children}) => {
  return (
   <>
   <div className="TodoTemplate">
      <div className="app-title">
         <h2>Todo</h2>
      </div>
      <div className="content">
         {children}
      </div>
   </div>
</>
  )
}
export default TodoTemplate