import React,{useState} from 'react'
import NavigationBar from '../components/NavigationBar'
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import '../styles/Search.css'
import ReactPaginate from "react-paginate";
import SearchFilterButton from '../components/SearchFilterButton.jsx';
import UserCard from '../components/UserCard.jsx';
import '../styles/pagination.css'; // Import the Pagination.css file



const Search = () => {

  

const searchResults = [
  {
    id: 1,
    type: "user",
    name: "John Doe",
    username: "johndoe",
  },
  {
    id: 2,
    type: "user",
    name: "Alice Smith",
    username: "alicesmith",
  },
  {
    id: 4,
    type: "user",
    name: "teta",
    username: "alicesmith",
  },
  {
    id: 5,
    type: "user",
    name: "jeddo",
    username: "alicesmith",
  },
  {
    id: 6,
    type: "user",
    name: "Alice Smith",
    username: "alicesmith",
  },
  {
    id: 7,
    type: "user",
    name: "Alice Smith",
    username: "alicesmith",
  },
  {
    id: 8,
    type: "user",
    name: "Alice Smith",
    username: "alicesmith",
  },
  {
    id: 3,
    type: "project",
    title: "Project A",
    description: "This is project A description.",
    owner: "johndoe",
  },
  {
    id: 4,
    type: "project",
    title: "Project B",
    description: "This is project B description.",
    owner: "alicesmith",
  },
];
const userResults = searchResults.filter((result) => result.type === "user");
const projectResults = searchResults.filter(
  (result) => result.type === "project"
);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of search results to display per page

  // Calculate the range of user results to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentUsers = userResults.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(userResults.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

 
  return (
    <section className="search">
      <div className="search-nav-background">
        <NavigationBar />
        <div className="search-section">
          <SearchFilterButton isInPage={"SearchPage"} initiallyVisible={true} />
        </div>
      </div>

      <div className="search-resultpage">
        <h2 className="search-results-header">User Results</h2>
        <div className="user-results">
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} name={user.name} />
          ))}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"} // Apply the CSS class for the pagination container
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageLabel={(page) => `Chapter ${page + 1}`}
          />
        </div>
        <div className="project-results">
          <h2>Project Results</h2>
          {projectResults.map((project) => (
            <div key={project.id}>
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search