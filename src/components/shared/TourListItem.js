import React from 'react';
import PropTypes from 'prop-types';

const TourListItem = (props) => {
    console.log(props);

    const createMarkup = (markup) => {
        const threshold = 80;
        if(markup.length > threshold){
            markup = markup.substring(0, threshold);
        }
        return {
            __html: markup
        }
    }

    return (
        <div className="app-tour-list">
            <div className="tour-image">
                <img
                    src={props.imageUrl}
                    alt="props.title" />
            </div>
            <div className="tour-details">
                <h3 dangerouslySetInnerHTML={createMarkup(props.title)} />
                <p dangerouslySetInnerHTML={createMarkup(props.description)} />
            </div>
        </div>
    );
}

export default TourListItem;

TourListItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}