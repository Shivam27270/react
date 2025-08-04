import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Protected({children ,  authentication = true}) {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const [loader , setloader] = useState(true)

console.log("Children:", children); // Debug the children prop
  console.log("Type of children:", typeof children);

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setloader(false)
    },[authentication, authStatus, navigate])
    return loader ? null : <>{children}</>
}

export default Protected
