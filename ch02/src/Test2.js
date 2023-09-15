import React, {useState} from 'react'

const Test2 = () => {
   const [form, setForm] = useState({username: "", message: ""});
   const {username, message} = form;

   const onChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
      setTimeout(() => {}, 500);
   };

   const onClick = () => {
      alert(username + " "+ message);
      setForm({username: "", message: ""});
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
            <label>Username</label>
            <input type = "text" name="username" className="input" value = {username} onChange = {function(e){onChange(e);}}/>
            <label>Message</label>
            <input type = "text" name="message" className="input" value = {message} onChange = {
               function(e){onChange(e);}
               } />
            <input type = "submit" className="button" value = "Submit" onClick={function(e){onClick();}} onKeyPress={
               function(e){onKeyPress(e);}
            }/>
            <input type = "reset" className="button" value = "Reset" />
         </div>

         <div className="is-primary">
            {username}
            {message}
         </div>
      </div>
  )
}

export default Test2