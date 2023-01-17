import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import {  fechAsyncMovies, fechAsyncShows } from '../../feature/movies/MovieSlice'

const Home = () => {
const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fechAsyncMovies())
      dispatch(fechAsyncShows())
  },[dispatch])


  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home