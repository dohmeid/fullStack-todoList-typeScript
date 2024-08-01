import React from 'react';
import './ControlBar.module.css';
import AddField from './AddField/AddField';
import SearchField from './SearchField/SearchField';

const ControlBar = () => {

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

export default ControlBar;