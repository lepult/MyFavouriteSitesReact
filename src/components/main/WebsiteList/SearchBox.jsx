import React, { useState, useEffect } from 'react';
import { Input } from 'chayns-components/lib';
import './SearchBox.scss';


// eslint-disable-next-line react/prop-types
function SearchBox({ setSearchString }) {
    const [newSearch, setNewSearch] = useState();
    const [myVar, setMyVar] = useState();

    function searchSetTimeout() {
        clearTimeout(myVar);
        setMyVar(setTimeout(() => {
            setSearchString(newSearch);
        }, 750));
    }

    useEffect(() => {
        searchSetTimeout();
    }, [newSearch]);

    return (
        <div
            className="searchBox"
        >
            <Input
                className="searchInput"
                value={newSearch}
                placeholder="Suche"
                onChange={(value) => {
                    setNewSearch(value);
                    // setSearchString(value);
                }}
                dynamic
            />
            <i
                className="fal fa-search searchIcon"
            />
        </div>
    );
}

export default SearchBox;