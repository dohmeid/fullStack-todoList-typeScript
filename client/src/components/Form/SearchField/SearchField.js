import React from 'react';
import './SearchField.module.css';

const SearchField = () => {

  return (
    <>
      <legend>Search Tasks</legend>
      <input type="search" name="search" aria-label="search for a task"
        placeholder="Search tasks..." tabIndex="3"/>
    </>
  );
};

export default SearchField;