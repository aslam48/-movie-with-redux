import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import  { APIKey } from '../../common/apis/movieApiKey'
import movieApi from '../../common/apis/movieApi'

const Home = () => {
const movieText = "Harry"

  useEffect(() => {
    const fechMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("err :", err);
      });
console.log("response from API", response)
    }

    fechMovies()
  },[])


  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home