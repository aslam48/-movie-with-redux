import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fechAsyncMovies = createAsyncThunk(
  "movie/fechAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );

    return response.data;
  }
);

export const fechAsyncShows = createAsyncThunk(
  "movie/fechAsyncShows",
  async () => {
    const seriesText = "love";
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`
    );

    return response.data;
  }
);




export const fechAsyncMovieOrShowDetails = createAsyncThunk(
  "movie/fechAsyncMovieOrShowDetails",
  async (id) => {
  
    const response = await movieApi.get(
      `?apikey=${APIKey}&i=${id}&Plot=full`
    );

    return response.data;
  }
);



const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrshow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {

    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrshow = {}
    }

  },
  extraReducers: {
    [fechAsyncMovies.pending]: () => {
      console.log("pending");
    },

    [fechAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fech successfully");
      return { ...state, movies: payload };
    },

    [fechAsyncMovies.rejected]: (state, { payload }) => {
      console.log("Rejected");
    },

    
    // shows Asyncs
    [fechAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fech successfully");
      return { ...state, shows: payload };
    },



    // show more data

    [fechAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
      console.log("fech successfully");
      return { ...state, selectedMovieOrshow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows; 
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrshow; 
export default movieSlice.reducer;
