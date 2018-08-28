import React from 'react';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

const mapStateToProps = (state) => {
    return {
        pageIsLoading: state.pageIsLoading
    }
}

class LoadingComponent extends React.Component {

    render() {
        console.log(this.props);
        if (this.props.pageIsLoading === true) {
        return (
            <div className="app-loading-overlay">
                <div className="loadingContent ">
                    <p className="loadingIcon">
                    <i className="fa fa-spinner" aria-hidden="true"></i>
                    </p>
                    <p>                        
                        Loading
                    </p>
                </div>
            </div>
        );
        
        }
        else {
            return (
                null
            );
        }
        
    }
}

export default connect(mapStateToProps)(LoadingComponent);