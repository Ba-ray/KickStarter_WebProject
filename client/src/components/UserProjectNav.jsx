import React,{useState}from "react";
import { Nav,Container,Form,FormControl,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../styles/UserProjectNav.css";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "../components/Filter"

const UserProjectNav = ({onNavChange , onSearch}) => {
   const [searchKeyword, setSearchKeyword] = useState("");
   const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
   
  const handleFilterChange = () => {
    setShowFilter(!showFilter);
  };


   const handleSearch = (e) => {
     if (e.key === "Enter") {
      const searchValue = searchKeyword;
      // alert("Searching for: " + searchKeyword);
      setSearchKeyword(""); // Clear the search input after searching
      onSearch(searchValue);
     }
   };
  return (
    <Container fluid className="user-project-nav-container">
      <Form
        className={`d-flex user-project-search-input ${
          isSearchFocused ? "focused" : ""
        }`}
      >
          <div className="search-container">
            <FormControl
              type="search"
              placeholder="projects,users..."
              className="mr-2 search-bar-nav"
              aria-label="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onKeyPress={handleSearch}
            />
            <Button variant="outline-success" className="search-button-nav">
              <FontAwesomeIcon icon={faSearch} />
            </Button>

            <Button
              variant="outline-success"
              className="search-button-nav"
              onClick={handleFilterChange}
            >
              <FontAwesomeIcon icon={faFilter} />
            </Button>
          </div>
          {showFilter && <Filter />}
      </Form>

      <Nav className="user-project-nav">
        <Nav.Item>
          <Nav.Link
            href="#!"
            className="user-project-nav-links"
            eventKey="people"
            onClick={() => onNavChange("users")}
          >
            People
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#!"
            className="user-project-nav-links"
            eventKey="projects"
            onClick={() => onNavChange("projects")}
          >
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default UserProjectNav;
