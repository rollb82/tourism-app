import React from 'react';

const PageShell = (Page) => {
    return props => (
        <div className="app-wrapper">
            <div className="container">
                <Page {...props} />
            </div>
        </div>
    );
}

export default PageShell;