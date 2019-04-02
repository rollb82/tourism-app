import React from "react";
import PropTypes from 'prop-types';

const FeaturedImage = (props) => {
    const {imageSrc, alt} = props;
    const style ={
        margin: '0 0 1em 0',
        background: `url(${imageSrc}) no-repeat #ccc `,
        backgroundSize: `cover`,
        borderRadius: '8px',
        height: props.height? props.height:'400px',
        width: '100%'
    }
    return(
        <div style={style}>            
            {/*<img src={imageSrc} alt={alt} />*/}
        </div>
    );
}

export default FeaturedImage;

FeaturedImage.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}