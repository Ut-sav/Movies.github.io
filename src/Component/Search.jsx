import React from "react";
import { Global } from "./Context";

const Search=()=>{
    const{query, getquery,iserror}=Global()
    return(<>
    <section className="search-section">
    <h1>Search your Favourite Movie</h1>
    <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
        <div>
            <input type="text" placeholder="Search Here" value={query} 
            onChange={(e)=>{getquery(e.target.value)}}
            />
        </div>
    </form>
    <div className="card-error">
        <p>{iserror.show && iserror.mess}</p>
    </div>
    </section>
    </>)
}
export default Search