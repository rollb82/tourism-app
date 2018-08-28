import React from 'react';
import PropTypes from 'prop-types';

const PageTitleComponent = (props) => {
    
    /**
     * createMarup: used to place correct markup on headings. we need to account for special characters.
     * @param {*} markup 
     */
    const createMarkup = (markup) => {
        return {
            __html: markup
        }
    };

    return (
        <h1 dangerouslySetInnerHTML={createMarkup(props.title)} />
    );
}

PageTitleComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageTitleComponent;


