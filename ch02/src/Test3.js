import React, {useState} from 'react'

const Test3 = () => {
   const [form, setForm] = useState({id: "", pw: ""});
   const {id, pw} = form;

   const onChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
      setTimeout(() => {}, 500);
   };

   const onClick = () => {
      if(id === "admin" && pw === "1234"){
         alert("Login Success");
      } else{
         alert("Login Failed");
      }
      setForm({id: "", pw: ""});
   }

   const onKeyPress = (e) => {
      console.log(e.key);
      if(e.key === "Enter"){
         onClick();
      }
   }

   return (
      <div className="content container">
         <h1>Test 2</h1>
         <div className="form-group">
            <label>ID</label>
            <input type = "text" name="id" className="input" value = {id} onChange = {function(e){onChange(e);}}/>
            <label>PW</label>
            <input type = "password" name="pw" className="input" value = {pw} 
               onChange = {onChange}
               onKeyPress={onKeyPress}
            />
            <input type = "submit" className="button" value = "Submit" onClick={onClick} />
            <input type = "reset" className="button" value = "Reset" onClick={function(e){setForm({id: "", pw: ""});}} />
         </div>
      </div>
  )
}

export default Test3