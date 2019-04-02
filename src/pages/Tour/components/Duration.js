import React from 'react';

const DurationComponent = (props) => {
    const {duration} = props;
    return(
        <div>
            Duration: {duration}
            {duration > 1? ' hours': ' hour' }
        </div>
    );
}

export default DurationComponent;