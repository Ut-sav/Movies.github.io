import React from "react";
import { NavLink } from "react-router-dom";
import { Global } from "./Context";

const Movie=()=>{
    const {isup,isloading}=Global()
    if(isloading){
        return(<>
        <div>
            <div className="loading">loading..</div>
        </div>
        </>)
    }
    return(<>
    <section className="movie-page">
        <div className="container grid grid-4-col">
    {isup.map((val)=>{
     const {imdbID,Title,Poster}=val;
     const moviename=Title.substring(0,15)
     return <NavLink to={`movie/${imdbID}`} key ={imdbID}>
     <div className="card">
        <div className="card-info">
         <h2>{moviename.length>=15?`${moviename}....`:moviename}</h2>
         <img src={Poster} alt={imdbID}/>
        </div>
     </div>
     </NavLink>
    })}</div>
    </section></>)
}
export default Movie