/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';

function WebsiteList({ setIsListLoading, setIsInitialLoad, isListLoading, searchString }) {
    const [list, setList] = useState([]);
    const [isListExtendable, setIsListExtendable] = useState(true);
    const [isFirstUpdate, setIsFirstUpdate] = useState(true);

    const fetchSitesData = async (skip, isNewSearchString, searchStringState) => {
        setIsListLoading(true);


        // Clears the List if there is a new Search String
        if (isNewSearchString) {
            setList([]);
        }

        if (!searchStringState) {
            searchStringState = 'Ahaus';
        }
        try {
            const response = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${searchStringState}/?skip=${skip}&take=21`);
            const json = await response.json();

            if (json.length < 21) {
                setIsListExtendable(false);
            } else {
                // removes the 21 item
                json.length = 20;
                setIsListExtendable(true);
            }

            setList((prevList) => prevList.concat(json));
        } catch (ex) {
            console.log('parsing failed', ex);
            setIsListExtendable(false);
            setList([]);
        }
        setIsInitialLoad(false);
        setIsListLoading(false);
    };

    useEffect(() => {
        if (isFirstUpdate) {
            setIsFirstUpdate(false);
        } else {
            fetchSitesData(0, true, searchString);
        }
    }, [searchString]);

    // const websiteListItems = list.map(() => <WebsiteListItem/>);

    return (
        <div className="websiteContainer">

            <div className="websiteList">
                {list.map((e) => (
                    <WebsiteListItem
                        key={e.siteId}
                        name={e.locationName}
                        linkId={e.siteId}
                        iconId={e.locationId}
                    />
                ))}
                {isListExtendable && !isListLoading && (
                    <Button
                        className="extendButton"
                        onClick={() => fetchSitesData(list.length, false, searchString)}
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
