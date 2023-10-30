import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './store/firebaseContext'
import Firebase from './firebase/config';
import Context from './store/firebaseContext'
ReactDOM.render(
<firebaseContext.Provider value={{Firebase}}>
<Context>
<App/>
</Context>
</firebaseContext.Provider>, 
document.getElementById('root'));
