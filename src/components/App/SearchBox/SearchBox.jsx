/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Input } from 'chayns-components/lib';
import './SearchBox.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadSites } from '../../../redux-modules/actions/siteListActions';


function SearchBox() {
    const dispatch = useDispatch();
    const oldSearchString = useSelector((state) => state.searchString);

    const [newSearch, setNewSearch] = useState();
    const [myVar, setMyVar] = useState();

    function searchSetTimeout() {
        clearTimeout(myVar);
        setMyVar(setTimeout(() => {
            if (oldSearchString !== newSearch) dispatch(loadSites(newSearch));
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
                onChange={(value) => setNewSearch(value)}
            />
            <i
                className="fal fa-search searchIcon"
            />
        </div>
    );
}

export default SearchBox;
