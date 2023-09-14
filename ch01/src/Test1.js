import './Test1.css';

// 테스트1 컴포넌트 생성
function Test1() {
   const name = "Kim1";
   let point = 1;
   const params = undefined;
   const style = {
      backgroundColor: 'blue',
      color: 'white',
      padding: 20
   };
  return (
    <div className="App">
      <h1>{name} This is Test1</h1>
      <p className="point">point: {point === 1 ? 'one':point}</p>
      <p className="point">point+1: {point+1}</p>
      <p className="point">point-2: {point-2}</p>
      <p className="point">point*2: {point*2}</p>
      <p className="point">point/2: {point/2}</p>
      <p className="point">point%2: {point%2}</p>
      <p>params: {params||"param is undefined"}</p>
      <p style={style}>style: {JSON.stringify(style)}</p>
      <div style={{backgroundColor: "pink", color: "#ffff"}}>
         인라인 스타일은 중괄호 2개씩
      </div>
    </div>
  );
}

export default Test1;