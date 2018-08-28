import React from 'react';
import { connect } from 'react-redux';

import PageTitleComponent from '../shared/PageTitleComponent';
import BackgroundBannerComponent from '../shared/BackgroundBannerComponent';
import BannerAudioPlayer from '../shared/BannerAudioPlayer';
import TourDescription from '../shared/TourDescription';
import TipsAndHours from '../shared/TipsAndHours';
import MapComponent from '../shared/MapComponent';
import { Link } from 'react-router-dom';
import TourListItem from '../shared/TourListItem';

import { getTourByID, pageIsLoading } from '../../actions/tourActions';

const mapStateToProps = (state) => {
    return {
        currentTour: state.currentTour,
        pageIsLoading: state.pageIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTourByID: (id) => dispatch(getTourByID(id)),
        setPageToLoading: () => dispatch(pageIsLoading())
    }
}

class TourContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showContent: 'lessContent'
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getTourByID(id);

        this.toggleDescription = this.toggleDescription.bind(this);


    }

    componentWillMount() {
        this.props.setPageToLoading();
    }


    toggleDescription() {
        //console.log('toggleDescription value');
        this.updateShowContentState()
    }

    updateShowContentState() {
        this.setState({
            showContent: this.state.showContent === 'lessContent' ? 'moreContent' : 'lessContent'
        });
    }


    render() {
        const { pageIsLoading } = this.props;
        const { currentTour } = this.props;
        //const { showContent } = this.state;
        const duration = 56;
        console.log(this.state.showContent);

        if (this.props.pageIsLoading === false) {
            let tourList = null;

            let MapComponentOnRender = () => {
                if (currentTour.acf.map !== '' && currentTour.acf.map.lat !== null) {
                    return (
                        <MapComponent
                            latitude={currentTour.acf.map.lat}
                            longitude={currentTour.acf.map.lng}
                            address={currentTour.acf.map.address}
                            duration={parseInt(currentTour.acf.duration)}
                        />
                    );
                }
                else {
                    return (
                        null
                    );
                }
            };


            if (typeof (currentTour.acf) === 'object') {
                tourList = currentTour.acf.interesting_locations.map((location, index) => {
                    return (
                        <div key={index}>
                            <Link
                                onClick={this.props.setPageToLoading}
                                to={`/location/${location.id}`}>
                                <TourListItem
                                    title={location.title.rendered}
                                    description={location['app-excerpt']}
                                    imageUrl={location.featured_image} />

                            </Link>
                        </div>
                    );
                });
            }



            return (
                <div className="row">
                    <div className="col-md-7">
                        <PageTitleComponent title={currentTour.title.rendered} />
                        <BackgroundBannerComponent
                            imageUrl={currentTour.featured_image}>
                            {/*
                        <BannerAudioPlayer />
                        */}
                        </BackgroundBannerComponent>

                        <TourDescription
                            showContent={this.state.showContent}
                            toggleDescription={this.toggleDescription}
                            lessContent={currentTour['app-excerpt']}
                            moreContent={currentTour.content.rendered} />
                        <TipsAndHours />
                        
                    </div>
                    <div className="col-md-5">
                    <MapComponentOnRender />
                    
                    <div className="app-tour-locations-list">
                        <h2>Locations</h2>
                        {tourList}
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

export default connect(mapStateToProps, mapDispatchToProps)(TourContainer);