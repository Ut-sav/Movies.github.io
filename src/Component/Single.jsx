import React from 'react'
import { useParams} from 'react-router-dom'
import { API_URL } from './Context'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


const Single = () => {
  const {id}= useParams()

  const [isloading,loading]=useState(true)
  const [isup, up]=useState('')
 
  const getmovie =async(url)=>{
    loading(true)
      try{
          const res =await fetch(url)
          const data= await res.json()
          console.log(data)
          if(data.Response==='True'){
              loading(false)
        
           up(data)
          }
          
      }
      catch(error){console.log(error)}
  }
  useEffect(()=>{
      let timeout =setTimeout(()=>{getmovie(`${API_URL}&i=${id}`)},800)
  return ()=>clearTimeout(timeout)   
  },[id])
 
  if(isloading){
    return(<>
    <div className='movie-section'>
        <div className="loading">loading..</div>
    </div>
    </>)}


  return (
   <>
  <section className='movie-section'>
<div className='movie-card'>
<figure>
  <img src={isup.Poster} alt="" />
</figure>
<div className="card-content">
  <p className="title">{isup.Title}</p>
  <p className="card-text">{isup.Released}</p>
  <p className="card-text">{isup.Genre}</p>
  <p className="card-text">{isup.imdbRating}</p>
  <p className="card-text">{isup.Country}</p>
  <NavLink to='/' className='back-btn'>Go Back</NavLink>
</div>
</div>

  </section>
   </>
  )
}
export default Single