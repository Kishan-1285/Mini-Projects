import React, { useState,useEffect } from 'react'
import "../styles/searchbar.css";
import axios from 'axios';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await axios.get(
            'D:/Mini-projects/movie-explorer/src/data/Movie.js'
          );
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    },[])
  return (
    <div className='main'>
        <input className="search-bar" type='text' value={search} placeholder="Search movies..." onChange={(e)=>setSearch(e.target.value)}/>
        <button>Search</button>
    </div>
  )
}

export default SearchBar
