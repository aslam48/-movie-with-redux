import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
    
     <Router>
        <>
         <Header></Header>
        </>

   <div className='container'>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path='*' element={< PageNotFound/>} />
      </Routes>
      </div>

      <Footer />
       </Router>
    </div>
  );
}

export default App;
