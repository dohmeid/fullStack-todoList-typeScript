import React, { FC, useContext, ChangeEvent } from 'react';
import './SearchField.module.css';
import { TodosContext } from "../../../context/todos";
import { TodosContextType } from "../../../interfaces/interfaces";

const SearchField: FC = () => {
  const { setSearchQuery } = useContext(TodosContext) as TodosContextType;

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let searchInput = e.target.value;
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