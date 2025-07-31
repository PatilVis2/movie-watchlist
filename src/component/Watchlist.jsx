import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import genreMap from "../utility/genre"
import { SearchContext } from "./SearchContext";


function Watchlist({ watchlists, setWatchlists, removeFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genrelist, setGenrelist] = useState(['All genre'])
  const [getCurrentGenre, setCurrentGenre]= useState('All genre')
  const {searchText} = useContext(SearchContext)

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handlefilter= (genre)=>{
    setCurrentGenre(genre)
  }

  const filteredMovies = useMemo(() => {
  return watchlists.filter((mov) =>
    mov.title.toLowerCase().includes(searchText.toLowerCase())
  );
}, [watchlists, searchText]);

  let sortByAc = () => {
    let ascSort = [...watchlists].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlists([...ascSort]);
  };

  let sortByDsc = () => {
    let dcsSort = [...watchlists].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlists([...dcsSort]);
  };

  const handleSort = (field, direction) => {
    const sorted = [...watchlists].sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];

      if (typeof aVal === "string" && typeof bVal === "string") {
        if (direction === "asc") {
          return aVal.localeCompare(bVal);
        } else {
          return bVal.localeCompare(aVal);
        }
      } else {
        if (direction === "asc") {
          return aVal - bVal;
        } else {
          return bVal - aVal;
        }
      }
    });

    setWatchlists(sorted);
  };

  useEffect (()=>{
    let tempList = watchlists.map((movie)=>{
      return genreMap[movie.genre_ids[0]]
    })
    tempList = new Set(tempList)
    setGenrelist(['All genre', ...tempList])
    console.log(tempList);
    
  },[watchlists])

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
      {genrelist.map((genre)=>{
        return <div key={genre} onClick={()=>handlefilter(genre)} className={ getCurrentGenre==genre ? "bg-blue-900 hover:scale-120 duration-300 hover:cursor-pointer flex justify-center h-10  w-30 items-center text-white rad rounded-xl font-bold mx-2" : "bg-gray-500 hover:scale-120 duration-300 hover:cursor-pointer flex justify-center h-10 w-30 items-center text-white rad rounded-xl font-bold mx-2"}>
          {genre}
        </div>
      })}
      </div>

      <div className="flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search For Movies..."
          className="h-10 w-2xs bg-gray-200 outline-none px-4"
        ></input>
      </div>

      <div className="border rounded-lg overflow-hidden border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 h-8">
            <tr>
              <th>
                <div className="flex items-center justify-center space-x-1">
                  <div
                    onClick={() => handleSort("title", "asc")}
                    className="cursor-pointer"
                  >
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Name</div>
                  <div
                    onClick={() => handleSort("title", "dsc")}
                    className="cursor-pointer"
                  >
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex items-center justify-center space-x-1">
                  <div onClick={sortByAc} className="cursor-pointer"><i class="fa-solid fa-arrow-up"></i></div>
                  <div>Ratings</div>
                  <div onClick={sortByDsc} className="cursor-pointer"><i class="fa-solid fa-arrow-down"></i></div>
                </div>
              </th>
              <th>
                <div className="flex items-center justify-center space-x-1">
                  {" "}
                  <div
                    onClick={() => handleSort("popularity", "asc")}
                    className="cursor-pointer"><i class="fa-solid fa-arrow-up"></i></div>
                  <div>Popularity</div>
                  <div
                    onClick={() => handleSort("popularity", "dsc")}
                    className="cursor-pointer"
                  ><i class="fa-solid fa-arrow-down"></i></div>
                </div>
              </th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody className="">
            {filteredMovies.filter((movObj)=>{
              if(getCurrentGenre == 'All genre'){
                return true
              }else{
                return genreMap[movObj.genre_ids[0]]==getCurrentGenre
              }
            }) .filter((movObj) => {
                return movObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movObj) => {
                return (
                  <tr key={movObj.id} className="border-b-2">
                    <td className="flex items-center p-4">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movObj.poster_path}`}
                        className="h-[7rem] w-[10rem]"
                      ></img>
                      <div className="mx-6">{movObj.title}</div>
                    </td>
                    <td>{movObj.vote_average}</td>
                    <td>{movObj.popularity}</td>
                    <td>{genreMap[movObj.genre_ids[0]]}</td>
                    <td onClick={()=>removeFromWatchlist(movObj)} className="text-red-500 cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
