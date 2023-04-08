import { useState } from "react";

/*
    What is Hooks - Just a function
    What is state  - Every component have state 
    What is useState - A hook that gives you local state variables 
                        and a function to update it so it can re render

*/
export default Search = ({ allData, updateRestaurantOnFiltered }) => {
  let [searchText, setSearchText] = useState(); // giving default value
  return (
    <div className="search-container">
      <input
        type="search"
        className="search-input"
        id="search"
        placeholder="Search Restaurant"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const data = filterData(allData, searchText);
          console.log(data);
          updateRestaurantOnFiltered(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

const filterData = (allData, searchText) => {
  const filteredData = allData.SECTION_SEARCH_RESULT.filter((restaurant) => {
    return restaurant.info.name.includes(searchText);
  });
  return { SECTION_SEARCH_RESULT: filteredData };
};
