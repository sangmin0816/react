import React, {useState, useCallback} from 'react';
import Light from './Light';

const Test8 = () => {
   const [onState1, onSet1] = useState(true);
   const [onState2, onSet2] = useState(true);
   const [onState3, onSet3] = useState(true);

   const toggle1 = useCallback(()=> onSet1(!onState1), [onState1]);
   const toggle2 = useCallback(()=> onSet2(!onState2), [onState2]);
   const toggle3 = useCallback(()=> onSet3(!onState3), [onState3]);

  return (
   <>
      <Light room="하늘" on={onState1} toggle={toggle1} />
      <Light room="땅" on={onState2} toggle={toggle2} />
      <Light room="바람" on={onState3} toggle={toggle3} />
    </>
  )
}

export default Test8