import React, { useEffect, useState } from 'react';

import { Button, SmallWaitCursor } from 'chayns-components/lib';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import WebsiteListItem from './WebsiteListItem/WebsiteListItem';
import './WebsiteList.scss';
import { loadSites } from '../../../redux-modules/actions/siteListActions';

const WebsiteList = () => {
    const { searchString, ids, isExtendable, isLoading } = useSelector((state) => state.sitesReducer, shallowEqual);
    const dispatch = useDispatch();

    const [extendedCounter, setExtendedCounter] = useState(1);

    useEffect(() => {
        dispatch(loadSites(searchString, 0));
    }, []);

    return (
        <div className="websiteContainer">

            <div className="websiteList">
                {ids.map((e) => (
                    <WebsiteListItem
                        key={e}
                        id={e}
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
