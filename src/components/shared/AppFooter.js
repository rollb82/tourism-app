import React from 'react';

const AppFooter = (props) => {

    const year = new Date().getFullYear();

    return (
        <div className="appFooter">
            <p>&copy; {year} Richmondstoryhouse</p>
        </div>
    );
}

export default AppFooter;