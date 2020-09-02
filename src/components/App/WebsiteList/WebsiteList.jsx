import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';

// eslint-disable-next-line react/prop-types
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
            const response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchStringState}&Skip=${skip}&Take=21`);
            const json = await response.json();

            if (json.Data.length < 21) {
                setIsListExtendable(false);
            } else {
                // removes the 21 item
                json.Data.length = 20;
                setIsListExtendable(true);
            }

            setList((prevList) => prevList.concat(json.Data));
        } catch (ex) {
            console.log('parsing failed', ex);
            setIsListExtendable(false);
            setList([]);
        }
        setIsInitialLoad(false);
        setIsListLoading(false);
    };

    useEffect(() => {
        fetchSitesData(0, false, searchString);
    }, []);

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
                        name={e.appstoreName}
                        linkId={e.siteId}
                        iconId={e.locationId}
                    />
                ))}
                {isListExtendable && !isListLoading && (
                    <Button
                        className="extendButton"
                        onClick={() => fetchSitesData(list.length, false)}
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
