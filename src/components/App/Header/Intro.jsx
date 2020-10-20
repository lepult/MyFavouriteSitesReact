import React from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
function Intro({ intro }) {

    return (
        <div className="tapp__intro">
            {intro}
        </div>
    );
}

Intro.propTypes = {
    intro: PropTypes.string.isRequired,
};

export default Intro;
