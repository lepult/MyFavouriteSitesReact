/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadSites } from '../../../redux-modules/actions/siteListActions';

function WebsiteList() {
    const sitesList = useSelector((state) => state.sites.list);
    const searchString = useSelector((state) => state.sites.searchString);
    const isExtendable = useSelector((state) => state.sites.isExtendable);
    const isLoading = useSelector((state) => state.sites.isLoading);
    const dispatch = useDispatch();

    const [extendedCounter, setExtendedCounter] = useState(1);
    const [isFirstUpdate, setIsFirstUpdate] = useState(true);

    useEffect(() => {
        if (isFirstUpdate) {
            setIsFirstUpdate(false);
        } else {
            dispatch(loadSites(searchString, 0));
        }
    }, [searchString]);

    // const websiteListItems = list.map(() => <WebsiteListItem/>);

    return (
        <div className="websiteContainer">

            <div className="websiteList">
                {sitesList.map((e) => (
                    <WebsiteListItem
                        key={e.siteId}
                        name={e.locationName}
                        linkId={e.siteId}
                        iconId={e.locationId}
                    />
                ))}
                {isExtendable && !isLoading && (
                    <Button
                        className="extendButton"
                        onClick={() => {
                            dispatch(loadSites(searchString, 20 * extendedCounter));
                            setExtendedCounter(extendedCounter + 1);
                        }}
                    >
                        Mehr
                    </Button>
                )}
            </div>

            {isLoading && (
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
