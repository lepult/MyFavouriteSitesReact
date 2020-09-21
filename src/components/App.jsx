import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

// Components
import Headline from './App/Header/Headline';
import SearchBox from './App/SearchBox/SearchBox';
import Intro from './App/Header/Intro';
import WebsiteList from './App/WebsiteList/WebsiteList';
import Form from './App/Form/Form';
import './App.scss';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
function App() {

    const [isListLoading, setIsListLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [searchString, setSearchString] = useState('Ahaus');
    const [newSearchString, setNewSearchString] = useState('Ahaus');

    useEffect(() => {
        setSearchString(newSearchString);
    }, [newSearchString]);

    return (
        <>
            <div className="headerBox">
                <Headline headline="My Favourite Sites"/>
                <SearchBox
                    setSearchString={(searchFilter) => setNewSearchString(searchFilter)}
                    searchString={searchString}
                />
            </div>
            <Intro
                intro="Hier findest Du eine Übersicht von allen Chayns Website
                in deiner Umgebung. Deine Seite fehlt hier noch? Sende sie uns
                mithilfe des Formulars unten."
            />
            <WebsiteList
                setIsListLoading={(isSiteListLoading) => setIsListLoading(isSiteListLoading)}
                setIsInitialLoad={(isInitialLoadTrue) => setIsInitialLoad(isInitialLoadTrue)}
                isListLoading={isListLoading}
                searchString={searchString}
            />
            {(!isListLoading || !isInitialLoad)
                && <Form isListLoading/>}
        </>
    );
}

export default App;
export const HotApp = hot(App);
