import React from 'react';
import PropTypes from 'prop-types';

const MainHeading = (props) => {

    const {title} = props;
    
    const setContent = (string) =>{        
        return {__html: string};        
    }

    return(
        <h1 dangerouslySetInnerHTML={setContent(title)} />
    );
}

export default MainHeading;

MainHeading.propTypes = {
    title: PropTypes.string.isRequired
}