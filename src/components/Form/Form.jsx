import React from 'react'
import { useState } from 'react'
import './Form.css'


function Form() {
  const [userName,setUserName]= useState('')
  // const [userEmail,setUserEmail]= useState('')
  // const [userDate,setUserDate]= useState('')


  const [userInput,setUserInput]= useState ({
    // userName:'',
    userEmail:'',
    userDate:'',
  })
  const userNameChangeHandler=(event)=>{
    setUserName(event.target.value)
  }
  const userEmailChangeHandler=(event)=>{
    setUserInput({
      ...userInput,
      userEmail: event.target.value})
  }
  const userDateChangeHandler=(event)=>{
    setUserInput((prevState)=>({
      ...prevState,
      userDate: event.target.value}))
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const userInfo={
      name:userName,
      email:userInput.userEmail,
      date: new Date(userInput.userDate),
    }
    console.log(userInfo)
    setUserName('')
    setUserInput({
      userEmail:'',
      userDate:'',
    })
  }
  // console.log(userName)
  // console.log(userEmail)
  // console.log(userDate)
  return (
    <form  onSubmit={submitHandler} className='form-block'>
        <label htmlFor="name">
            Your name:
            <input type="text" value={userName} onChange={userNameChangeHandler} />
        </label>
        <label htmlFor="name">
            Your email:
            <input type="email" value={userInput.userEmail} onChange={userEmailChangeHandler}/>
        </label>
        <label htmlFor="name">
            Your birthday:
            <input type="date" value={userInput.userDate} onChange={userDateChangeHandler}/>
        </label>
		    <button type='submit'>Submit</button>
    </form>
  )
}

export default Form