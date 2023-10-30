import React from 'react';
import { useEffect,useContext,useState } from 'react';
import './View.css';
import { postContex } from '../../store/postContext';
import { firebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContex)
  const {Firebase} = useContext(firebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        console.log(doc.data().username);
          setUserDetails(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        { userDetails && <div className="contactDetails">
        <p>Seller Details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
