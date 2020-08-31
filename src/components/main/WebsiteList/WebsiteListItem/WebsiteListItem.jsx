import React from 'react';

import './WebsiteListItem.scss';

function WebsiteListItem() {
    return (
        <div className="websiteIconContainer">
            <a className="websiteIconLink">
                <img className="websiteIcon" src="" alt=""/>
            </a>
            <div className="websiteName">Websitename</div>
        </div>
    );
}

export default WebsiteListItem;
