import React, { useEffect, useState } from "react";
import "./App.css";
import "tailwindcss";
import Navbar from "./component/Navbar.jsx";
import Movie from "./component/Movie.jsx";
import Watchlist from "./component/Watchlist.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baner from "./component/Baner.jsx";
import SignUpModal from "./component/SignUpModal.jsx";

function App() {

  const [watchlists, setWatchlists]= useState([])

  const handleAddWatchlist = (movObj)=>{
   let newWatchlist= [...watchlists, movObj]
   localStorage.setItem("MovieList", JSON.stringify(newWatchlist))
    setWatchlists(newWatchlist)
    console.log(newWatchlist)
  }

  let removeFromWatchlist =(movObj)=>{
    let removedList = watchlists.filter((movie)=>{
      return movie.id != movObj.id
    })
    setWatchlists(removedList)
        localStorage.setItem("MovieList",JSON.stringify(removedList))

    console.log(removedList)
  }

  useEffect(()=>{
    let localMovieList= localStorage.getItem('MovieList')
    if(!localMovieList){
        return
    }
    setWatchlists(JSON.parse(localMovieList))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            element={
              <>
                <Baner /> <Movie handleAddWatchlist={handleAddWatchlist} removeFromWatchlist={removeFromWatchlist} watchlists={watchlists}/>
              </>
            }
            path="/"
          />
          <Route element={<Watchlist watchlists={watchlists} setWatchlists={setWatchlists}  removeFromWatchlist={removeFromWatchlist}/>} path="/watchlist" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
