import React from 'react';
import './Form.module.css';
import AddField from './AddField/AddField';
import SearchField from './SearchField/SearchField';

const Form = () => {

  return (
    <form>
      <fieldset>
        <AddField />
      </fieldset>

      <fieldset>
        <SearchField />
      </fieldset>
    </form>
  );
};

export default Form;