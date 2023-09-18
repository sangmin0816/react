import React, {useEffect, useRef} from 'react'

const Test4 = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  }, [])
  

  const loginPro = (e) => {
    alert(`Welcome ${inputRef.current.value}`);
    inputRef.current.focus();
  }

  // useEffect: 해당 이벤트를 진행하고 난 후에 실행되어야할 내용을 기술하는 hook

  return (
    <div>
      <h1>Test4</h1>
      <header>
        <fieldset>
          <input ref={inputRef} type="text" name="id" placeholder="id" />
          <button onClick={loginPro}>Login</button>
        </fieldset>
      </header>
    </div>
  )
}

export default Test4