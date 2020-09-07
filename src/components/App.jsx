import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Headline from './App/Header/Headline';
import SearchBox from './App/SearchBox/SearchBox';
import Intro from './App/Header/Intro';
import WebsiteList from './App/WebsiteList/WebsiteList';
import Form from './App/Form/Form';
import './App.scss';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            isListLoading: true,
            isInitialLoad: true,
            searchString: 'Ahaus',
            newSearchString: 'Ahaus',
        };
    }

    componentDidUpdate(prevState) {
        const { newSearchString } = this.state;
        if (newSearchString !== prevState.newSearchString) {
            this.setState({ searchString: newSearchString });
        }
    }

    render() {
        const { isListLoading, isInitialLoad, searchString } = this.state;

        return (
            <>
                <div className="headerBox">
                    <Headline headline="My Favourite Sites"/>
                    <SearchBox
                        setSearchString={(searchFilter) => this.setState({ newSearchString: searchFilter })}
                        searchString={searchString}
                    />
                </div>
                <Intro
                    intro="Hier findest Du eine Übersicht von allen Chayns Website
                    in deiner Umgebung. Deine Seite fehlt hier noch? Sende sie uns
                    mithilfe des Formulars unten."
                />
                <WebsiteList
                    setIsListLoading={(isSiteListLoading) => this.setState({ isListLoading: isSiteListLoading })}
                    setIsInitialLoad={(isInitialLoadTrue) => this.setState({ isInitialLoad: isInitialLoadTrue })}
                    isListLoading={isListLoading}
                    searchString={searchString}
                />
                {(!isListLoading || !isInitialLoad)
                    && <Form isListLoading/>}
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
