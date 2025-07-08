import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import poster from '../components/noposter.jpg'

export default function MovieDetails() {
  const {id}=useParams();//get id from URL
  const [movie,setMovie]=useState(null);//store movie data
  useEffect(()=>{
  async function fetchmovie(){
    try{
     const response=await fetch('http://www.omdbapi.com/?apikey=4ba678fb&i='+id);
            const data=await response.json();
           // console.log(data);
           if(data.Response==="True"){
            setMovie(data);
           }
           else{
            setMovie(null);
           }
           }
           catch(err)
           {
            console.error("Error fetching movie:",err);
           }
  }
  if(id)
  {
  fetchmovie();
  }
  },[id]);
  if(!movie) return <div className='text-center mt-10 text-lg text-blue-600'>Loading....</div>;


  return (
     <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6'>
        <Link to="/" className='inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>←Back to Home</Link>
      <h1 className='text-3xl font-bold mb-4 text-center text-blue-700'>{movie.Title}</h1>
      <div className='flex flex-col md:flex-row gap-6'>
       <img src={movie.Poster!=="N/A" ? movie.Poster : poster} alt={movie.Title} className='w-full md:w-1/3 rounded-lg shadow-md h-full'/>
       <div className='flex-1 space-y-3 mt-[50px]'>
       <p className='font-semibold text-gray-700'><strong>Year:</strong>{movie.Year}</p>
       <p className='font-semibold text-gray-700'><strong>Genre:</strong>{movie.Genre}</p>
       <p className='font-semibold text-gray-700'><strong>Director:</strong>{movie.Director}</p>
       <p className='font-semibold text-gray-700'><strong>Actors:</strong>{movie.Actors}</p>
       <p className='font-semibold text-gray-700'><strong>Plot:</strong>{movie.Plot}</p>
       </div>
       </div>
       </div>

    </div>

  );
}
