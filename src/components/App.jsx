import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import WebsiteList from './main/WebsiteList/WebsiteList';
import Form from './main/WebsiteList/Form/Form';
// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Headline headline="My Favourite Sites"/>
                <Intro intro="Hier findest Du eine Übersicht von allen Chayns Website in deiner Umgebung. Deine Seite fehlt hier noch? Sende sie uns mithilfe des Formulars unten."/>
                <WebsiteList/>
                <Form/>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
