import React, { useEffect, useState } from 'react';
import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';

function WebsiteList() {
    const [list, setList] = useState([]);

    const fetchSitesData = async (skip = 0, take = 20) => {
        try {
            const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=Ahaus&Skip=${skip}&Take=${take}`);
            const json = await response.json();
            console.log(json.Data);
            setList(json.Data);
        } catch (ex) {
            console.log('parsing failed', ex);
            setList([]);
        }
    };
    useEffect(() => {
        fetchSitesData();
    }, []);

    // const websiteListItems = list.map(() => <WebsiteListItem/>);

    return (
        <div className="websiteList">
            {list.map((e) => <WebsiteListItem key={e.siteId} name={e.appstoreName} linkId={e.siteId} iconId={e.locationId}/>)}
        </div>
    );
}

export default WebsiteList;
