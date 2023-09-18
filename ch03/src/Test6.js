import {useState, useMemo, useEffect} from 'react'

const Test6 = () => {
  const [isTrue, setisTrue] = useState(true);

  const numberIs = useMemo(() => {
   return {
      number: isTrue? "true": "false",
   }
  }, [isTrue]);
  // [] 안에 기재된 내용은 항상 기억이 되어 반복 사용이 가능

  useEffect(() => {
      console.log(numberIs);
    }, [numberIs]);


  return (
    <div>
      <header>
         <h2>Test 6</h2>
         <hr/>
         <button onClick={() => setisTrue(!isTrue)}>Is True?</button>
         <p>{numberIs.number}</p>
   
      </header>
    </div>
  )
}

export default Test6