import React from 'react';

const TourCard = (props) => {
    const { title, featured_image, acf } = props;
    return (
        <div>
            <h1>
                {title.rendered}
            </h1>
            <img src={featured_image} alt={title.rendered} />
            <div>
                {acf.map.address}
            </div>
        </div>
    );
}

export default TourCard;