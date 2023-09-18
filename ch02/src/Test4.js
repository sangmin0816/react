import React, { Component} from 'react'
import "./Test4.css";

class Test4 extends Component {
   input = React.createRef();
   state = {
      password: "",
      clicked: false,
      validated: false
   }

   // 반드시 에로우 함수로 해야 어쩌고저쩌고 바인딩이 뭐 어쩌고저쩌고
   handleChange = (e) => {
      this.setState({
         password: e.target.value
      })
   };

   handleClick = (e) =>{
      this.setState({
         clicked: true,
         validated: this.state.password==="1234"
      });
      this.input.current.focus();
   };

   render() {
      return (
         <div className="container content">
            <h1>Test4</h1>   
            <input type="password" ref={this.input} value={this.state.password} onChange = {this.handleChange} 
            className={this.state.clicked? this.state.validated?"input success":"input failure":"input"} />

            <button className="button" onClick={this.handleClick}>Click</button>
            
            <p>Is Valid? {this.state.validated?"yes":"no"}</p>
         </div>
      )
  }
}

export default Test4