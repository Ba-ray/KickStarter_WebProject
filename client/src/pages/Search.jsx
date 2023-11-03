import React,{useState} from 'react'
import NavigationBar from '../components/NavigationBar'
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import SearchBar from '../components/SearchBar.tsx'
import '../styles/Search.css'
import PopUpFilter from '../components/PopUpFilter';



const components = {
  DropdownIndicator: null,
};
const Search = () => {
   const [inputValue, setInputValue] = useState("");
   const [keywords, setKeywords] = useState([]);
    const handleKeyDown = (event) => {
      if (!inputValue) return;
      if (event.key === "Enter" || event.key === "Tab") {
        setKeywords((prev) => [
          ...prev,
          { label: inputValue, value: inputValue },
        ]);
        setInputValue("");
        event.preventDefault();
      }
    };

  return (
    <section className="search">
      <div className="search-nav-background">
        <NavigationBar />
      </div>
      <div className="search-section">
        <SearchBar isInPage="searchpage" />
        <PopUpFilter isOpen={true} isInPage={"searchpage"} />
      </div>
    </section>
  );
}

export default Search