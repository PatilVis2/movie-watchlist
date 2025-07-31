import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchContext } from "./component/SearchContext.jsx";

function Root() {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <App />
    </SearchContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
