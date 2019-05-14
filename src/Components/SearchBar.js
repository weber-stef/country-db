import React from "react";

const SearchBar = props => {
  return (
    < input
      value={props.searchTerm}
      onChange={props.onSearchInputChangeHandler}
      placeholder="Search for countries"
    />
  );
};

export default SearchBar;