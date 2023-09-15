import React, { Component} from 'react';

class Test1 extends Component {
   state = {message: "Enter your message here"};
   render() {
      return (
         <div className="container content">
            <h1>Test1</h1>
            <input className="input" type="text" name="msg" id="msg" value={this.state.message}
            onChange={
               // (e)=>{console.log(e.target.value)}
               (e)=>{this.setState({message: e.target.value})}
               }/>
            <button className="button is-primary" onClick={
               ()=>{alert(this.state.message)}
            }>Alert</button>
            <button className="button is-danger" onClick={
               ()=>{this.setState({message: ""})}
            }>Cancel</button>
            <h4>{this.state.message}</h4>
         </div>
      );
   }
};

export default Test1;