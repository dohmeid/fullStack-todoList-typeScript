import React, { useState, useContext } from 'react';
import './SearchField.module.css';
import { TodosContext } from "../../../context/todos";

const SearchField = () => {
  const { setSearchQuery } = useContext(TodosContext);

  const handleSearchInputChange = (e) => {
    let searchInput = e.target.value.toLowerCase(); //get the search query
    setSearchQuery(searchInput);
  }

  return (
    <>
      <legend>Search Tasks</legend>
      <input type="search" name="search" aria-label="search for a task"
        placeholder="Search tasks..." tabIndex="3"
        onChange={handleSearchInputChange} />
    </>
  );
};

export default SearchField;