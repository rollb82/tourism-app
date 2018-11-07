import React from "react";
import PropTypes from 'prop-types'

/**
 * TourMap: will create a google map component. 
 * @param {*} props 
 */

const TourMap = (props) => {
    const {map} = props;
    const {lat, lng} = map;
    return(
        <div>
            <div>
                <b>latitude:</b> {lat}
            </div>
            <div>
                <b>longitude:</b> {lng}
            </div>
        </div>
    );
}

export default TourMap;

TourMap.propTypes = {
    map: PropTypes.object.isRequired
}