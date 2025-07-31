import React, { useContext, useEffect, useState, useMemo } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import { SearchContext } from "./SearchContext";

function Movie({ handleAddWatchlist, removeFromWatchlist, watchlists }) {
  const [movie, setMovie] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const { searchText } = useContext(SearchContext);

  const filteredMovies = useMemo(() => {
    return movie.filter((mov) =>
      mov.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [movie, searchText]);
  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

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
        {filteredMovies.map((movObj) => (
          <MovieCard
            key={movObj.id}
            posterPath={movObj.poster_path}
            title={movObj.title}
            movObj={movObj}
            handleAddWatchlist={handleAddWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            watchlists={watchlists}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movie;
