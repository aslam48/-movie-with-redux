import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fechAsyncMovieOrShowDetails } from '../../feature/movies/MovieSlice'

const MovieDetails = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fechAsyncMovieOrShowDetails(imdbID))
  },[dispatch])
  return (
    <div>
      
    </div>
  )
}

export default MovieDetails