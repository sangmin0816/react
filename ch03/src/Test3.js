import React, {useRef, useState} from 'react'

const Test3 = () => {
  const korScore = useRef(0);
  const [engScore, setEngScore] = useState(0);

  const onUseRef = (e) => {
    korScore.current = korScore.current + 1;
    console.log(korScore.current);
  }

  const onUseState = (e) => {
    setEngScore(engScore + 1);
    console.log(engScore);
  }

  return (
    <div>
      <h1>Test3</h1>
      <button onClick={onUseRef}>useRef</button>
      <p>점수: {korScore.current}</p>

      <button onClick={onUseState}>useState</button>
      <p>점수: {engScore}</p>
    </div>
  )
}

export default Test3