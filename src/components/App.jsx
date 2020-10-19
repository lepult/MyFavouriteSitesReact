import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

// Components
import Headline from './App/Header/Headline';
import SearchBox from './App/SearchBox/SearchBox';
import Intro from './App/Header/Intro';
import WebsiteList from './App/WebsiteList/WebsiteList';
import Form from './App/Form/Form';
import './App.scss';
import { useSelector } from 'react-redux';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
function App() {

    const { isLoading } = useSelector((state) => state.sitesReducer);

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
            {!isLoading
                && <Form/>}
        </>
    );
}

export default App;
export const HotApp = hot(App);
