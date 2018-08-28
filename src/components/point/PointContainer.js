import React from 'react';
import { connect } from 'react-redux';

import { getPointByID } from '../../actions/tourActions';
import PageTitleComponent from '../shared/PageTitleComponent';
import BackgroundBannerComponent from '../shared/BackgroundBannerComponent';


const mapStateToProps = (state) => {
    return {
        currentPoint: state.currentPoint,
        pageIsLoading: state.pageIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPointByID: (id) => dispatch(getPointByID(id))
    }
}

class PointContainer extends React.Component {

    componentDidMount() {
        this.props.getPointByID(35)
    }

    render() {
        const { currentPoint } = this.props;

        

        if (this.props.pageIsLoading === false) {
            
            return (
                <div>                    
                    <div className="row">
                        <div className="col-md-7">

                            <PageTitleComponent title={currentPoint.title.rendered} />
                            <BackgroundBannerComponent
                                imageUrl={currentPoint.featured_image}>
                            </BackgroundBannerComponent>
                            <audio controls>
                                <source src={currentPoint.acf.audio.audio_file} />
                            </audio>
                        </div>
                        <div className="col-md-5">
                            sidebar
                    </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    loading
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointContainer);