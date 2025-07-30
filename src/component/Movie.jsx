import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movie({handleAddWatchlist, removeFromWatchlist, watchlists}) {
  const [movie, setMovie] = useState([]);
  const [pageNo, setPageNo]= useState(1)

  const handlePrev = ()=>{
    if(pageNo ==1){
        setPageNo(pageNo)
    }else{
    setPageNo(pageNo-1)
    }
  }

  const handleNext =()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8cc6da77272c71f9822f675d692b3248&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovie(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="bg-auto">
      <div className="text-2xl font-bold text-center p-5">Trending Movies</div>

      <div className="flex flex-row justify-around flex-wrap">
        {movie.map((movObj) => {
          return <MovieCard posterPath={movObj.poster_path} key={movObj.id} title={movObj.title} handleAddWatchlist={handleAddWatchlist} movObj={movObj} removeFromWatchlist={removeFromWatchlist} watchlists={watchlists}/>;
        })}
      </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>

  );
  

}

export default Movie;
