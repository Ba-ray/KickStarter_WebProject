import React, { useState } from "react";
import PopUpFilter from "./PopUpFilter";
import { useLocation } from "react-router-dom";
import searchicon from '../images/search.png';
import "../styles/SearchBar.css";

const SearchBar = ({ isInPage }) => {
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const onClose = () => {
    setShowFilter(false);
  };
  const isHomepage = location.pathname === "/";
  return (
    <div className={`search-wrapper ${isInPage}`}>
      <input className="search-input" type="text" placeholder="Search" />
      <img
        onClick={toggleFilter}
        src={searchicon}
        alt="Search"
        style={{ width: "6%" }}
      />
      {isHomepage && showFilter && (
        <PopUpFilter
          isInPage="homepage"
          isOpen={showFilter}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default SearchBar;
