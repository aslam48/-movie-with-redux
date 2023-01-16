import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import  { APIKey } from '../../common/apis/movieApiKey'
import movieApi from '../../common/apis/movieApi'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../feature/movies/MovieSlice'

const Home = () => {
const movieText = "Harry"
const dispatch = useDispatch()

  useEffect(() => {
    const fechMovies = async () => {
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log("err :", err);
      });
      dispatch(addMovies(response.data))
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