import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';

// eslint-disable-next-line react/prop-types
function WebsiteList({ setIsListLoading, isListLoading }) {
    const [list, setList] = useState([]);
    const [isListExtendable, setIsListExtendable] = useState(true);

    const fetchSitesData = async (skip = 0, take = 21) => {
        setIsListLoading(true);

        try {
            const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=Ahaus&Skip=${skip}&Take=${take}`);
            const json = await response.json();

            if (json.Data.length < 21) {
                setIsListExtendable(false);
            } else {
                // removes the 21 item
                json.Data.length = 20;
            }

            setList((prevList) => prevList.concat(json.Data));
        } catch (ex) {
            console.log('parsing failed', ex);
            setList([]);
        }

        setIsListLoading(false);
    };

    useEffect(() => {
        fetchSitesData();
    }, []);

    // const websiteListItems = list.map(() => <WebsiteListItem/>);

    return (
        <div className="websiteContainer">

            <div className="websiteList">
                {list.map((e) => (
                    <WebsiteListItem
                        key={e.siteId}
                        name={e.appstoreName}
                        linkId={e.siteId}
                        iconId={e.locationId}
                    />
                ))}
                {isListExtendable && !isListLoading && (
                    <Button
                        className="extendButton"
                        onClick={() => fetchSitesData(list.length)}
                    >
                        Mehr
                    </Button>
                )}
            </div>

            {isListLoading && (
                <SmallWaitCursor
                    className="waitCursor"
                    show
                    inlines
                />
            )}

        </div>
    );
}

export default WebsiteList;
