import React, { useState } from 'react'
import axios from 'axios';

 const Demo = () => {
    const [name, setName] = useState("");

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); 
        console.log('name 👉️', name);
        setName('');
        postUser()
      };
      const postUser = ()=>{
        axios
        .post('http://localhost:8000/users', { name: name })
        .then((res) => getResturants())
        .catch((err) => console.log(err));
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}
export default Demo








