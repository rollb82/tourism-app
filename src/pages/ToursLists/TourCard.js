import React from 'react';
import {setContent, getSummary} from '../shared/utils';
import FeaturedImage from '../Tour/components/FeaturedImage';
const TourCard = (props) => {
    const { title, featured_image, acf, content:{rendered} } = props;
    const summary = getSummary(rendered, 100);
    return (
                  
            <div>            
            <FeaturedImage height="200px" imageSrc={featured_image} alt={title.rendered} />
            <h2>
                {title.rendered}
            </h2>
            {/**
            <div>
                {acf.map.address}
            </div>
             */}
            <p dangerouslySetInnerHTML={setContent(summary)} />
            </div>
        
    );
}

export default TourCard;