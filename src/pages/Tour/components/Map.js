import React from "react";
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import {GOOGLEAPIKEY} from '../../../config';

const styles = {
    height: '200px',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '1em',
    padding: '0.5em'
};

/**
 * TourMap: will create a google map component. 
 * @param {*} props 
 */

const Pin = () => <i style={{ color: 'red', fontSize: '3em' }} className="fa fa-map-marker"></i>;

const TourMap = (props) => {
    const { map } = props;
    const { lat, lng } = map;
    console.log(map);
    const mapProperties = {
        center: {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        },
        zoom: 11
    }

    return (
        <div>

            <div style={styles}>
                <p>
                    {map.address}
                </p>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLEAPIKEY }}
                    defaultCenter={mapProperties.center}
                    defaultZoom={mapProperties.zoom}>
                    <Pin
                        lat={lat}
                        lng={lng}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default TourMap;

TourMap.propTypes = {
    map: PropTypes.object.isRequired
}