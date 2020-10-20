import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Components
import Headline from './App/Header/Headline';
import SearchBox from './App/SearchBox/SearchBox';
import Intro from './App/Header/Intro';
import WebsiteList from './App/WebsiteList/WebsiteList';
import Form from './App/Form/Form';
import './App.scss';

function App() {
    const { isLoading } = useSelector((state) => state.sitesReducer);
    const [firstLoading, setFirstLoading] = useState(true);

    useEffect(() => {
        if (firstLoading === true && isLoading === false) {
            setFirstLoading(false);
        }
    }, [isLoading]);

    return (
        <>
            <div className="headerBox">
                <Headline headline="My Favourite Sites"/>
                <SearchBox/>
            </div>
            <Intro
                intro="Hier findest Du eine Übersicht von allen Chayns Website
                in deiner Umgebung. Deine Seite fehlt hier noch? Sende sie uns
                mithilfe des Formulars unten."
            />
            <WebsiteList/>
            {!firstLoading
                && <Form/>}
        </>
    );
}

export default App;
export const HotApp = hot(App);
