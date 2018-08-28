import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
    return (
        <div className="app-header">
            <div className="container-fluid">
                <Link to="/">
                    <img src={props.logo} alt="home logo" />
                </Link>
            </div>
        </div>
    );
}

AppHeader.proptypes = {
    logo: PropTypes.string.isRequired
}

export default AppHeader;