import React from 'react'

const Test1 = () => {
  const names = ['John', 'Jane', 'Mary'];
  const nameList = names.map((name, index) => {
    return <li key={index}>{name}</li>
  });

  return (
    <div>
      <h1>Test1</h1>
      <ul>{nameList}</ul>
    </div>
  )
}

export default Test1