import { useState,useEffect } from 'react'
import './App.css'
import {fetchdatafromapi} from '../src/utils/api'

function App() {
   const [movieData, setMovieData] = useState();
   useEffect(()=>{apitesting()},[])
  const apitesting=()=>{
    fetchdatafromapi("/movie/popular")
    .then((res)=>{
      console.log(res)
      setMovieData(res)
    }).catch((err)=>{
      console.log("error fetching the movie data ",err)
    })
  }
   

  return (
    <div>
      {movieData ? (
        <div>
          {movieData.results.map((movie) => (
            <div key={movie.key}>{(movie.title +" released in "+  movie.release_date)}</div>
          ))}
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );}

export default App
