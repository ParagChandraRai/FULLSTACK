import React, { useState } from 'react';

 const Student =()=>{
  const[Name,setname]=useState('');
  const[password,setpassword]=useState('');
  const[gender,setgender]=useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = event => {
    setname(event.target.value);
  };
  const handleChangepass = event => {
    setpassword(event.target.value);
  };
  const handlegender = event => {
    setgender(event.target.value);
  };
  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };
  
  return (
    <div>
    NAME:<input type="text" value={Name} onChange={handleChange}/><br></br><br></br>
    PASSWORD:<input type="password" value={password} onChange={handleChangepass}/><br></br><br></br>
    Gender:<input type="radio" name="gender" value={gender} onChange={handlegender}/>MALE
    <input type="radio" name="gender" value={gender} onChange={handlegender}/> FEMALE<br></br><br></br>
    Subject:<input type="checkbox" onChange={handleCheckboxChange}/>JAVA
    <input type="checkbox" onChange={handleCheckboxChange}/>React
    <input type="checkbox" onChange={handleCheckboxChange}/>PHP
    </div>
  )
};

export default Student;