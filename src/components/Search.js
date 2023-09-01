import { useState } from "react";

import "./search.css";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="search">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;