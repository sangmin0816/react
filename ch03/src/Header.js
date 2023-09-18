import React, {useContext} from 'react'
import { AgeContext} from './AgeContext'
import { NameContext} from './NameContext'

const Header = () => {
   const age = useContext(AgeContext);
   const user = useContext(NameContext);

  return (
    <div>
      <p>Hello, <strong>{user}</strong>!</p>
      <p>You are <strong>{age}</strong> years old.</p>
    </div>
  )
}

export default Header