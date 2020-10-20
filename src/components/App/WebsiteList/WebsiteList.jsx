import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';
import { useDispatch, useSelector } from 'react-redux';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';
import { loadSites } from '../../../redux-modules/actions/siteListActions';

const WebsiteList = () => {
    const { searchString, list, isExtendable, isLoading } = useSelector((state) => state.sitesReducer);
    const dispatch = useDispatch();

    const [extendedCounter, setExtendedCounter] = useState(1);

    useEffect(() => {
        dispatch(loadSites(searchString, 0));
    }, []);

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
};

export default WebsiteList;
