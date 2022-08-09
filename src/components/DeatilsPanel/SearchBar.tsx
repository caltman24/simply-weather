import { useState } from "react";
import SearchIcon from "../Utility/SearchIcon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Another Location"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchIcon handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
