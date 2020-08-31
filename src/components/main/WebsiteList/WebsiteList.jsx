import React from 'react';
import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';

const fetchSitesData = async (skip = 0, take = 20) => {
    try {
        const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=Ahaus&Skip=${skip}&Take=${take}`);
        const json = await response.json();
        console.log('parsed json', json);
        return json;
    } catch (ex) {
        console.log('parsing failed', ex);
        return null;
    }
};

function WebsiteList() {

    fetchSitesData(0, 20);

    return (
        <div className="websiteList">
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
            <WebsiteListItem/>
        </div>
    );
}

export default WebsiteList;
