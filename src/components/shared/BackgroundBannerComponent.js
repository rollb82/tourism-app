import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} props 
 */
const BackgroundBannerComponent = (props)=>{
    const style = {
        backgroundImage: `url(${props.imageUrl})`,
        maxWidth: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroudPosition: '50% bottom',
        paddingTop: '0em',
        position: 'relative'
    };

    //const bannerText = props.bannerText;

    return(
        <div
            className="appImageBanner embed-responsive embed-responsive-16by9"
            style={style}>           
            { props.children }      
        </div>
    );
}

BackgroundBannerComponent.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}

export default BackgroundBannerComponent;