import React from 'react';
import PropTypes from 'prop-types';

const TourDescription = (props) => {

    const generateMarkup = (markup) => {
        return {
            __html: markup
        }
    }

    const LessContent = () => {
        return (
            <div>
                <p dangerouslySetInnerHTML={generateMarkup(props.lessContent + '...')} />
            </div>
        )
    }

    const MoreContent = () => {
        return (
            <div>
                <div dangerouslySetInnerHTML={generateMarkup(props.moreContent)}></div>
            </div>
        )
    }

    return (
        <div className="app-tour-description">
            {props.showContent === 'lessContent' ? <LessContent /> : <MoreContent />}

            <button
                className="btn btn-primary"
                onClick={props.toggleDescription}>
                {props.showContent === 'lessContent' ? 'More' : 'Less'}
            </button>
        </div>
    );
}

export default TourDescription;

TourDescription.propTypes = {
    showContent: PropTypes.string.isRequired,
    toggleDescription: PropTypes.func.isRequired,
    lessContent: PropTypes.string.isRequired,
    moreContent: PropTypes.string.isRequired
}