import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fechAsyncMovieOrShowDetails, getSelectedMovieOrShow , removeSelectedMovieOrShow} from '../../feature/movies/MovieSlice'
import './MovieDetails.scss'

const MovieDetails = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)

  useEffect(()=> {
    dispatch(fechAsyncMovieOrShowDetails(imdbID))

    return () => {
    dispatch(removeSelectedMovieOrShow())
    };

  },[dispatch,imdbID ])

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ?  ( <div>...Loading</div>) : ( 
      <>
      <div className='section-left'>
        <div className='movie-title'>{data.Title}</div>
        <div className='movie-rating'>
        <span>IMDB Rating <i className='fa fa-star'>:{data.imdbRating}</i></span>
        <span>IMDB Votes <i className='fa fa-thumbs-up'>:{data.imdbVotes}</i></span>
        <span>RunTime <i className='fa fa-film'>:{data.Runtime}</i></span>
        <span>Year <i className='fa fa-calender'>:{data.Year}</i></span>  
        </div>

        <div className='movie-plot'>{data.Plot}</div>
          <div className='movie-info'>

            <div>
              <span>Directory</span>
              <span>{data.Director}</span>
            </div>

            <div>
              <span>Stars</span>
              <span>{data.Director}</span>
            </div>
            
            <div>
              <span>Directory</span>
              <span>{data.Genre}</span>
            </div>

            <div>
              <span>Language</span>
              <span>{data.Language}</span>
            </div>

            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
            
          </div>
          </div>

          <div className='section-right'>
            <img src={data.Poster} alt={data.Title}/>
          </div>
          </>
      )}
    </div>
  )
}

export default MovieDetails