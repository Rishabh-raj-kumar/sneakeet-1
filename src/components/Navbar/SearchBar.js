import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className=" w-3/4">
    <div className=" flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleSearch}
      />
      <div className=" absolute right-5 rounded-r-md w-1 px-4 py-2 bg-gray-200"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    </div>
  );
};

export default SearchBar;


