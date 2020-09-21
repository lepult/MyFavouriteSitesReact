import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
function Headline({ headline }) {
    return <h1>{headline}</h1>;
}

Headline.propTypes = {
    headline: PropTypes.string.isRequired,
};

export default Headline;
