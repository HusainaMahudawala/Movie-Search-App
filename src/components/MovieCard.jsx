import React from 'react'
import poster from './noposter.jpg'
import { Link } from 'react-router-dom';

export default function MovieCard({movie}) {
   //console.log(movie);
  return (
    <Link to={"/movie/"+movie.imdbID}>
    <div className='bg-white shadow rounded p-4'>
      <img src={movie.Poster!=="N/A" ? movie.Poster : poster} alt={movie.Title} className='w-full h-60 object-cover mb-2 rounded'/>
      <h2 className='text-lg font-semibold'>{movie.Title}</h2>
      <p className='text-sm text-gray-500'>{movie.Year}</p>
    </div>
    </Link>

    
  );
}
