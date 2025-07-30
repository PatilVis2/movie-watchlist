import React, { useState } from "react";
import Logo from "../pngwing.com.png";
import Show from "../show.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import Select from "react-select";

function Navbar() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const cityOptions = [
    { value: "Pune", label: "Pune" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Hyderabad", label: "Hyderabad" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between border border-gray-300 px-6 py-4 ">
        <div className="flex items-center space-x-8">
          <img className="w-[50px]" src={Logo} alt="Logo" />
          <Link className="text-blue-800 text-2xl font-bold" to="/">
            Movies
          </Link>
          <Link className="text-blue-800 text-2xl font-bold" to="/watchlist">
            Watchlist
          </Link>
        </div>

        <div className="flex items-center space-x-4  w-3xl">
          <div className="relative flex-1 mx-4 ">
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <SearchIcon fontSize="small" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
          <Select
            className="w-40"
            defaultValue={cityOptions[0]}
            options={cityOptions}
            isSearchable
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#cbd5e0",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                borderRadius: "0.375rem", 
                boxShadow: "none",
                "&:hover": { borderColor: "#0ea5e9" },
              }),
            }}
          />

          <button
            className="bg-sky-500 hover:bg-blue-800  text-white px-4 py-2 rounded"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign In
          </button>
          <div className="">
            <span className="text-gray-400">
              <MenuIcon fontSize="medium" />
            </span>
          </div>
        </div>
      </nav>
      <SignUpModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </>
  );
}

export default Navbar;

// 8cc6da77272c71f9822f675d692b3248 api key tmdb
// https://api.themoviedb.org/3/movie/popular?api_key=8cc6da77272c71f9822f675d692b3248&language=en-US&page=1