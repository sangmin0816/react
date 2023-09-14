import React from 'react'

const Test5 = (props) => {
  return (
    <div className="App" style={props.style}>{props.name}</div>
  )
}

export default Test5

Test5.defaultProps = {
   name: "이름",
   style: {backgroundColor: "pink", fontSize: "20px"}
}