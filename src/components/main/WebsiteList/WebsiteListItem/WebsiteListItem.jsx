import React, { useEffect, useState } from 'react';


import './WebsiteListItem.scss';

// eslint-disable-next-line react/prop-types
function WebsiteListItem({ name, iconId, linkId }) {
    const [icon, setIcon] = useState(152342);

    const fetchIcon = async () => {
        try {
            const response = await fetch(`https://sub60.tobit.com/l/${iconId}?size=65`);
            if (response.status === 200) {
                setIcon(iconId);
            }
        } catch {
            console.log("Can't find a website Icon");
        }
    };
    const openUrl = () => {
        chayns.openUrlInBrowser(`https://chayns.net/${linkId}`);
    };

    useEffect(() => {
        fetchIcon();
    }, []);

    return (
        <div className="websiteIconContainer">
            <a className="websiteIconLink" onClick={openUrl}>
                <img className="websiteIcon" src={`https://sub60.tobit.com/l/${icon}?size=65`} alt=""/>
            </a>
            <div className="websiteName">{name}</div>
        </div>
    );
}

export default WebsiteListItem;
