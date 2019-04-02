import React from 'react';
import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';
import GOOGLEAPIKEY from '../../../../config';


const MapComponent = (props) => {
    const { address } = props;

    console.log(props);

    console.log(address);
    const mapProperties = {
        center: {
            lat: parseFloat(props.latitude),
            lng: parseFloat(props.longitude)
        },
        zoom: 11
    }

    const styles = { 
        height: '200px', 
        width: '100%', 
        borderRadius: '4px', 
        overflow: 'hidden',
        marginBottom: '1em'
    };

    const Duration = () => {
        console.log(props.duration);
        return(
            <p>Duration: {props.duration} minutes</p>
        );
    }

    return (
        <div className="app-map-component">
            
            <div style={styles}>
                <GoogleMapReact
                    bootstrapURLKeys={{key:GOOGLEAPIKEY}}
                    defaultCenter={mapProperties.center}
                    defaultZoom={mapProperties.zoom}
                >
                </GoogleMapReact>
            </div>
            
            {props.duration !== undefined? <Duration /> : null}

            <h6>{address}</h6>
            
        </div>
    );
}

export default MapComponent;

MapComponent.propTypes = {
    address: PropTypes.string.isRequired,
    //latitude: PropTypes.string.isRequired,
    //longitude: PropTypes.string.isRequired,
    duration: PropTypes.number
}

/*
const MapComponent = () => {
    return(
        null
    );
}

export default MapComponent;
*/