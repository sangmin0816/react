import React, {useState} from 'react'

const Test9 = () => {
   const [message, setMessage] = useState('');
   const onClickEnter = () => setMessage("환영");
   const onClickLeave = () => setMessage("바이");
   const [color, setColor] = useState("black");
  return (
    <div className="App">
      <h1>Test9</h1>
      <button onClick={onClickEnter}>입실</button>
      <button onClick={onClickLeave}>퇴실</button>
      <h1 style={{color}}>{message}</h1>
      <button onClick={() => setColor('gold')}>금</button>
    </div>
  )
}

export default Test9