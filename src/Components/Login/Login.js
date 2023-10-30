import React, { useState ,useContext} from 'react';
import {authContext, firebaseContext} from '../../store/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const {Firebase} = useContext(firebaseContext)
const navigate = useNavigate()
function handleLogin(e){
      e.preventDefault()
      Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navigate('/')
      }).catch((err)=>{
          alert(err.message)
      })
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            required
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            required
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          navigate('/signup')
        }} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
