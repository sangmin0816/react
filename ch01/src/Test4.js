import { Component } from 'react';
import Test1 from './Test1';
// 클래스를 import할 때는 중괄호로

class Test4 extends Component {
    render() {
      return (
        <div className="App">
          <h1>Test4</h1>
          <Test1 />
        </div>
      );
    
    }
}

export default Test4;