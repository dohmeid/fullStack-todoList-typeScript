import React, { FC,useContext, ChangeEvent } from 'react';
import './SearchField.module.css';
import { TodosContext, TodosContextType } from "../../../context/todos";

const SearchField: FC = () => {
  const { setSearchQuery } = useContext(TodosContext) as TodosContextType;

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let searchInput = e.target.value; //get the search query
    setSearchQuery(searchInput);
  }

  return (
    <>
      <legend>Search Tasks</legend>
      <input
        type="search" placeholder="Search tasks..."
        id="search" name="search"
        aria-label="search for a task" tabIndex={3}
        onChange={handleSearchInputChange} />
    </>
  );
};

export default SearchField;