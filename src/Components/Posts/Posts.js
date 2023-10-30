import React,{useContext,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import './Post.css';
import { firebaseContext } from '../../store/firebaseContext';
import { postContex } from '../../store/postContext';

function Posts() {
 const {Firebase} = useContext(firebaseContext)
 const [products,setProducts] = useState([])
 const {setPostDetails} = useContext(postContex)
 const navigate = useNavigate()
 useEffect(()=>{
      Firebase.firestore().collection('products').get().then((snapshot)=>{
        const allPost = snapshot.docs.map((product)=>{
          return {
            ...product.data(),
            id:product.id
          }
        })
        setProducts(allPost)
      })
 },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product)=>{
            return(
              <div onClick={()=>{
                setPostDetails(product)
                navigate('/view')
              }}
              className="card"
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            )
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        
            <div  className="cards">
              { products.map((product)=>{
           return(
             <div onClick={()=>{
              setPostDetails(product)
              navigate('/view')
            }} className="card">
               <div className="favorite">
                 <Heart></Heart>
               </div>
               <div className="image">
                 <img src={product.url} alt="" />
               </div>
               <div className="content">
                 <p className="rate">&#x20B9; {product.price}</p>
                 <span className="kilometer">{product.name}</span>
                 <p className="name"> {product.category}</p>
               </div>
               <div className="date">
                 <span>{product.createdAt}</span>
               </div>
             </div>
              )
            })}
           </div>
          
      </div>
    </div>
  );
}

export default Posts;
