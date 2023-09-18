import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// 객체의 배열
const Test2 = () => {
  const [names, setNames] = useState(
   [
      {id: 1, fullname: 'name1'},
      {id: 2, fullname: 'name2'},
      {id: 3, fullname: 'name3'},
   ]
  );
  // useState를 사용하면 객체 제어에 용이하다.

   const onRemove = (id) => {
      const newNames = names.filter((name) => name.id!== id);
      setNames(newNames);
   }

  const nameList = names.map((name, index) => {
    return (
      <ListGroup.Item key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.fullname}</ListGroup.Item>
    )
  });

  const [inputText, setInputText] = useState('');
  const onChange = (e) => {
   setInputText(e.target.value);
  }

  const onClick = (e) => {
   const nextName = names.concat({
      id: names.length + 1,
      fullname: inputText
   })
   setNames(nextName);
   setInputText('');
};


  return (
   <Container>
      <h1>Test2</h1>
      <ListGroup>
         {nameList}
      </ListGroup>
      <InputGroup className="mb-3" style={{marginTop: "15px"}}>
         <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value = {inputText}
            onChange = {onChange}
         />
         <button onClick={onClick}>Submit</button>
      </InputGroup>
   </Container>
  )
}

export default Test2