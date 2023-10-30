import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, firebaseContext } from '../../store/firebaseContext';

function Header() {
  const navigate = useNavigate()
  const {user} = useContext(authContext)
  const {Firebase} = useContext(firebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user?<span>{user.displayName}</span>:<span onClick={()=>{
            navigate('/login')
          }} >Login</span>}
          {console.log(user)}
          <hr />
        </div>
         {user&&<span onClick={()=>{
          Firebase.auth().signOut();
          navigate('/login')
         }} >Logout</span>} 
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              if(user){
                navigate('/create')
              }else{
                navigate('/login')
                alert('login first')
              }
            }} >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
