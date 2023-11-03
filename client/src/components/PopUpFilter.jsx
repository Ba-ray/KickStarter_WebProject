import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/PopUpFilter.css";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "most_viewed", label: "Most Viewed" },
  { value: "most_recent", label: "Most Recent" },
];

const categoryOptions = [
  { value: "projects", label: "Projects" },
  { value: "people", label: "People" },
  { value: "collaborators", label: "Collaborators" },
];

const timeFilterOptions = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "This Week", value: "this-week" },
  { label: "This Month", value: "this-month" },
  { label: "Custom Date Range", value: "custom-range" },
];

const components = {
  DropdownIndicator: null,
};

function PopUpFilter({ isOpen, onClose, isInPage }) {
  const [filter, setFilter] = useState(filterOptions[0]);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(
    timeFilterOptions[0]
  );
  const [customDateRange, setCustomDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const handleTimeFilterChange = (option) => {
    setSelectedTimeFilter(option);
  };

  const handleStartDateChange = (date) => {
    setCustomDateRange({ ...customDateRange, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setCustomDateRange({ ...customDateRange, endDate: date });
  };

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

  const handleSearch = () => {
    console.log("Filter:", filter.value);
    console.log("Category:", category ? category.value : "All Categories");
    console.log("Keywords:", keywords.map((kw) => kw.value).join(", "));
    console.log(
      "Time Filter:",
      selectedTimeFilter ? selectedTimeFilter?.value : "All Time"
    );

    if (selectedTimeFilter && selectedTimeFilter.value === "custom-range") {
      console.log(
        "Custom Date Range:",
        customDateRange.startDate,
        "to",
        customDateRange.endDate
      );
    }
    onClose();
  };

  const isCustomRangeValid =
    customDateRange.startDate && customDateRange.endDate;

  return (
    isOpen && (
      <div className={`dropdown-container ${isInPage}`}>
        {/* <div className="popup-filter-header">
          <span className="popup-filter-title">Refine Your Search</span>
          <button className="popup-filter-close" onClick={onClose}>
            X
          </button>
        </div>
        <label
          className="search-dropdown-label"
          style={{ fontStyle: "italic" }}
        >
          Find What Matters: Refine Your Search and Get Results That Click
        </label> */}
        <div className={`filters-container ${isInPage}`}>
          <button className="popup-filter-close" onClick={onClose}>
            X
          </button>
          <div className="label-select-conatiner">
            <label className="search-dropdown-label">Filter by:</label>

            <Select
              value={filter}
              onChange={handleFilterChange}
              options={filterOptions}
              theme={(theme) => ({
                ...theme,
                borderRadius: "10px",
                colors: {
                  ...theme.colors,
                  primary25: "#80e3b7",
                  primary: "#80e3b7",
                },
              })}
            />
          </div>
          <div className="label-select-conatiner">
            <label className="search-dropdown-label">Choose a Time:</label>
            <Select
              value={selectedTimeFilter}
              onChange={handleTimeFilterChange}
              options={timeFilterOptions}
              isClearable={true}
              placeholder="All Time"
              theme={(theme) => ({
                ...theme,
                borderRadius: "10px",
                colors: {
                  ...theme.colors,
                  primary25: "#80e3b7",
                  primary: "#80e3b7",
                },
              })}
            />
          </div>
          {selectedTimeFilter &&
            selectedTimeFilter.value === "custom-range" && (
              <div className="date-pickers">
                <DatePicker
                  selected={customDateRange.startDate}
                  onChange={handleStartDateChange}
                  placeholderText="Start Date"
                />
                <DatePicker
                  selected={customDateRange.endDate}
                  onChange={handleEndDateChange}
                  placeholderText="End Date"
                />
              </div>
            )}
          <div className="label-select-conatiner">
            <label className="search-dropdown-label">Choose Category:</label>
            <Select
              value={category}
              onChange={handleCategoryChange}
              options={categoryOptions}
              placeholder="All Categories"
              theme={(theme) => ({
                ...theme,
                borderRadius: "10px",
                colors: {
                  ...theme.colors,
                  primary25: "#80e3b7",
                  primary: "#80e3b7",
                  neutral40: "grey",
                },
              })}
            />
          </div>
          <div>
            <label className="label-select-conatiner search-dropdown-label">
              Add keywords:
            </label>
            <CreatableSelect
              components={components}
              inputValue={inputValue}
              isClearable
              isMulti
              menuIsOpen={false}
              onChange={(newValue) => setKeywords(newValue)}
              onInputChange={(newValue) => setInputValue(newValue)}
              onKeyDown={handleKeyDown}
              placeholder="Type a keyword and press enter..."
              value={keywords}
              theme={(theme) => ({
                ...theme,
                borderRadius: "10px",
                border: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#80e3b7",
                  primary: "#80e3b7",
                },
              })}
            />
          </div>
          <button className="search-dropdown-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    )
  );
}

export default PopUpFilter;
