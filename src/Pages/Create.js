import React, { Fragment,useContext } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { authContext } from '../store/firebaseContext';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const {user} = useContext(authContext)
  const navigate = useNavigate()
  if(user){
    return (
      <Fragment>
        <Header />
        <Create/>
      </Fragment>
    );
  }
  return(
    navigate('/login')
  )
};

export default CreatePage;
