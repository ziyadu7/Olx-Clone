import {createContext, useState} from 'react'

export const postContex = createContext(null)

function Post({children}){
    const [postDetails,setPostDetails] = useState()
    return(
        <postContex.Provider value = {{postDetails,setPostDetails}}>
            {children}
        </postContex.Provider>
    )
}

export default Post