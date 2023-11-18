import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter"; // Import the PopUpFilter component



const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event) => {
    // Handle key press logic if needed
    console.log('Key pressed:', event.key);
  };

  return (
    <div className="search-input">
      <form id="search" action="#">
        <input
          type="text"
          placeholder="Type Something"
          id="searchText"
          name="searchKeyword"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <i className="fa fa-search"></i>
      </form>
    </div>
  );
};


export default SearchForm;
