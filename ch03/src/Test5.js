import React from 'react'
import {AgeContext} from './AgeContext'
import {NameContext} from './NameContext'
import Header from './Header'

const Test5 = () => {


   return (
      <div>
         <h1>Test 5</h1>
         <AgeContext.Provider value="age of provider">
            <NameContext.Provider value="this is name of provider">
               <Header />
            </NameContext.Provider>
         </AgeContext.Provider>
         
      </div>
   )
}

export default Test5