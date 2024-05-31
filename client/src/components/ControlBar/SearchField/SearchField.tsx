import React, { useContext } from 'react';
import './SearchField.module.css';
import { TodosContext } from "../../../context/todos";

const SearchField = () => {
  const { setSearchQuery } = useContext(TodosContext);

  const handleSearchInputChange = (e) => {
    let searchInput = e.target.value; //get the search query
    setSearchQuery(searchInput);
  }

  return (
    <>
      <legend htmlFor="search">Search Tasks</legend>
      <input
        type="search" placeholder="Search tasks..."
        id="search" name="search"
        aria-label="search for a task" tabIndex="3"
        onChange={handleSearchInputChange} />
    </>
  );
};

export default SearchField;