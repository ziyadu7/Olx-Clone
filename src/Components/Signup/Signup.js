import React, { useState } from 'react';
import { useContext } from 'react';

import Logo from '../../olx-logo.png';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { firebaseContext } from '../../store/firebaseContext';

export default function Signup() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {Firebase} = useContext(firebaseContext)
  const history = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
      result.user.updateProfile({diplayName:username}).then(()=>{
        console.log(result.user.displayName);
          Firebase.firestore().collection('users').add({
              id:result.user.uid,
              username:username,
              phone:phone
        }).then(()=>{
            history('/login')
        })
      })
    }).catch((err)=>{
      alert(err)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            required
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            required
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            required
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            required
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          history('/login')
        }} >Login</a>
      </div>
    </div>
  );
}
