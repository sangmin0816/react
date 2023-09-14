import {Component} from'react';

// 클래스 형의 state(상태정보)
class Test8 extends Component{
   constructor(props){
      super(props);
      this.state = {
         increaseNumber: 0,
         decreaseNumber: 0,
     };
   }

   render(){
      const {increaseNumber, decreaseNumber} = this.state;

      return <div className="App">
         <h1>증가하는 값 : {increaseNumber}</h1>
         <h1>감소하는 값 : {decreaseNumber}</h1>
         <button style={{ padding: '30px' }}
            onClick={()=>{
               this.setState({
                    increaseNumber: increaseNumber + 1,
                    decreaseNumber: decreaseNumber - 1,
               });
            }}
         > button </button>
      </div>
   }
}
export default Test8