import React, {useState, useRef, useCallback} from'react';

import TodoTemplate from './Test5/TodoTemplate';
import TodoInsert from './Test5/TodoInsert';
import TodoList from './Test5/TodoList';


const Test5 = () => {
   const [todos, settodos] = useState({
      id: 0,
      text: 'Todo를 입력해주세요',
      checked: true,
   });
   const nextId = useRef(1);
   
   const onInsert = useCallback(
      (text) => {
         const todo = {id: nextId.current, text, checked: false};
         settodos(todos.concat(todo));
         nextId.current += 1; 
      }, [todos]);
   
      const onRemove = useCallback(
         id=>{settodos(todos.filter(todo=>todo.id!==id))}, [todos]
      );

      const onToggle = useCallback(
         id=>{settodos(todos.map(todo=>todo.id===id? {...todo, checked:!todo.checked} : todo))}, [todos]
      );

  return (
    <>
      <TodoTemplate>
         <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
         <TodoInsert onInsert={onInsert} />
      </TodoTemplate>
    </>
  )
}
export default Test5