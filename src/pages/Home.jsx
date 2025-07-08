import React, { useState } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import MovieCard from '../components/MovieCard'
export default function Home() {
    let [searchText,setSearchText]=useState("");
    let [movies,setMovies]=useState([]);
    let handlesearch=async()=>{
        if(searchText.trim()==="")
        {
            toast.warn("Search is empty");
            return;
        }
        try {
            const response=await fetch('http://www.omdbapi.com/?apikey=4ba678fb&s='+searchText);
            const data=await response.json();
           //console.log(data);
            if(data.Response==="True")
            {
                setMovies(data.Search);
            }
            else{
                toast.error("Movie not found!");
                setMovies([]);
            }
        }catch(error){
            console.error("Error Fetching Movies!!"+error);
            setMovies([]);
        }
        }
       // console.log(movies);
        
  return (
   <div className='min-h-screen bg-gray-100 p-4'>
    <h1 className='text-3xl text-center font-bold text-blue-600 mb-6'>Search Movies</h1>
    <div className='flex justify-center mb-6'>
        <input type="text" value={searchText} onChange={(event)=>setSearchText(event.target.value)} placeholder='Search for movies...' className='border px-4 py-2 ruonded-l-md w-72'/>
        <button onClick={handlesearch} className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600'>Search</button>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            { movies.map((movie)=>(
                    <MovieCard key={movie.imdbID} movie={movie}/>
                ))}
        </div>
        <ToastContainer/>
   </div>
  )
}
