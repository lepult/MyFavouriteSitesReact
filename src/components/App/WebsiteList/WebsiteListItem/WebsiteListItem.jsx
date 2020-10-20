/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';


import './WebsiteListItem.scss';
import { useSelector } from 'react-redux';

function WebsiteListItem({ id }) {
    const [icon, setIcon] = useState(152342);
    const data = useSelector((state) => state.sitesReducer.entities[id]);

    const fetchIcon = async () => {
        try {
            const response = await fetch(`https://sub60.tobit.com/l/${data.locationId}?size=65`);
            if (response.status === 200) {
                setIcon(data.locationId);
            }
        } catch {
            console.log("Can't find a website Icon");
        }
    };
    const openUrl = () => {
        chayns.openUrlInBrowser(`https://chayns.net/${id}`);
    };

    useEffect(() => {
        fetchIcon();
    }, []);

    return (
        <div className="websiteIconContainer">
            <a className="websiteIconLink" onClick={openUrl}>
                <img className="websiteIcon" src={`https://sub60.tobit.com/l/${icon}?size=65`} alt=""/>
            </a>
            <div className="websiteName">{data.appstoreName}</div>
        </div>
    );
}

export default WebsiteListItem;
