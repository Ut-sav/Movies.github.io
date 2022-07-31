import React, { useContext, useEffect, useState } from "react"


const API_URL =`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const Context = React.createContext()

const Appcontext =({children})=>{
    const [isloading,loading]=useState(true)
    const [isup, up]=useState([])
    const [iserror,error]=useState({show:false, mess:''})
    const [query, getquery]=useState('Avengers')
    const getmovie =async(url)=>{
        loading(true);
        try{
            const res =await fetch(url)
            const data= await res.json()
            console.log(data)
            if(data.Response==='True'){
                loading(false)
                error({show:false, mess:''})
             up(data.Search)
            }
            else{error({
                show:true,
                mess:data.Error
            })}
        }
        catch(error){console.log(error)}
    }
    useEffect(()=>{
        let timeout =setTimeout(()=>{getmovie(`${API_URL}&s=${query}`)},800)
    return ()=>clearTimeout(timeout)   
    },[query])

return(<>
<Context.Provider value={{isup, isloading, iserror, getquery}}>{children}</Context.Provider>
</>)
}

// Create The Global Hook

const Global = ()=>{
    return useContext(Context)
}
export{Context ,Global, Appcontext,API_URL}