import React from 'react';
import { Link } from 'react-router-dom'
import {getSummary, setContent} from '../../shared/utils';

const Location = (props) => {
    const { locations, id } = props;
    
    


    return (
        <div className="location-list">
            {locations.map((element, index) => {
                if (element.acf.audio.audio_file !== false) {
                    const { featured_image, title } = element;
                    const appExcerpt = element['app-excerpt'];
                    return (
                        <Link key={index} to={`./${id}/${element.id}`}>
                            <div
                                className="row location-summary">
                                <div className="col-lg-4">
                                    <img
                                        className="img-circle"
                                        src={featured_image}
                                        alt={title.rendered} />
                                </div>
                                <div className="col-lg-8">
                                    <div>
                                        <h3 dangerouslySetInnerHTML={setContent(title.rendered)} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
                else {
                    return (
                        null
                    );
                }
            })}
        </div>
    );
}


export default Location;