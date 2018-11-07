import React from 'react';
import {Link} from 'react-router-dom'

const Location = (props) =>{
    const {locations, id} = props;
    const setContent = (string) =>{        
        return {__html: string};        
    }

    return(
        <div>                                                
            {locations.map((element, index)=> {                
                return(
                    <div key={index}>
                        <Link to={`./${id}/${element.id}`}>
                        <div>
                            <h3 dangerouslySetInnerHTML={setContent(element.title.rendered)} />
                        </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}


export default Location;