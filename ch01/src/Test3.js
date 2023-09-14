import React from 'react'

const Test3 = () => {
   const arr = [1, 2, 3, 4, 5, 6, 7];
   return (
   <div className="App">
      <ul>
         {
            arr.map((item, index) => {
               return <li>{item}</li>
            })
         }
      </ul>
      
   </div>
   )
}

export default Test3

// 

