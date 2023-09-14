// 구조 분할
const Test6 = (props) => {
   let {name, age, addr} = props;
  return (
    <div className="App">
      <h2>Test6</h2>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>addr: {addr}</p>
    </div>
  )
}

export default Test6

Test6.defaultProps = {
   name: "this name",
   age: 18,
   addr: "this addr"
}