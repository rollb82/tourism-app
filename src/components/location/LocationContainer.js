import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLocationByID, pageIsLoading, setCurrentlyPlaying } from '../../actions/tourActions';
import PageTitleComponent from '../shared/PageTitleComponent';
import BackgroundBannerComponent from '../shared/BackgroundBannerComponent';
import TourListItem from '../shared/TourListItem';
import TourDescription from '../shared/TourDescription';
import TipsAndHours from '../shared/TipsAndHours';
import MapComponent from '../shared/MapComponent';

const mapStateToProps = (state) => {
    return {
        currentLocation: state.currentLocation,
        pageIsLoading: state.pageIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocationByID: (id) => dispatch(getLocationByID(id)),
        setPageIsLoading: () => dispatch(pageIsLoading()),
        setCurrentlyPlaying: (id)=> dispatch(setCurrentlyPlaying(id))
    }
}

class LocationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: 'lessContent'
        }
        this.toggleDescription = this.toggleDescription.bind(this);
        this.setCurrentlyPlaying = this.setCurrentlyPlaying.bind(this);
    }

    setCurrentlyPlaying(id){
        const foundId = this.getPointById(id);
        const promise = new Promise((resolve, reject) =>{
            resolve(foundId)
        });
        
        promise.then((data)=>{
            console.log(data);
            this.props.setCurrentlyPlaying(data)
        })
    }

    getPointById(id){
        const  {points_of_interests} = this.props.currentLocation.acf
        console.log(points_of_interests)
        let foundItem = points_of_interests.find((item) => {
            return item.id === id;
        });

        return foundItem;
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getLocationByID(id)
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
        console.log(this.props);
        const { currentLocation } = this.props;

        if (this.props.pageIsLoading === false) {
            const { points_of_interests } = currentLocation.acf;

            let MapComponentOnRender = () => {
                if (currentLocation.acf.map !== '' && currentLocation.acf.map.lat !== null) {
                    return (
                        <MapComponent
                            latitude={parseFloat(currentLocation.acf.map.lat)}
                            longitude={parseFloat(currentLocation.acf.map.lng)}
                            address={currentLocation.acf.map.address}
                        //duration={duration}
                        />
                    );
                }
                else {
                    return (
                        null
                    );
                }
            };

            const pointsOfInterestList = points_of_interests.map((point, index) => {
                return (
                    <div
                        //onClick={this.props.setPageIsLoading}
                        onClick={()=>this.setCurrentlyPlaying(point.id)}
                        key={index}>
                        {/*
                        
                        setCurrentlyPlaying
                        <Link
                            to={`/point/${currentLocation.id}`} >
                            */}
                        <TourListItem
                            title={point.title.rendered}
                            description={point['app-excerpt']}
                            imageUrl={point.featured_image} />
                        {/*
                        </Link>*/}
                    </div>
                );
            });

            return (
                <div className="row">
                    <div className="col-md-7">

                        <PageTitleComponent title={currentLocation.title.rendered} />
                        <BackgroundBannerComponent
                            imageUrl={currentLocation.featured_image}>
                        </BackgroundBannerComponent>

                        <TourDescription
                            showContent={this.state.showContent}
                            toggleDescription={this.toggleDescription}
                            lessContent={currentLocation['app-excerpt']}
                            moreContent={currentLocation.content.rendered} />
                        <TipsAndHours />


                    </div>
                    <div className="col-md-5">
                        <MapComponentOnRender />
                        <div className="app-tour-locations-list">
                            <h2>Points of interests</h2>
                            {pointsOfInterestList}
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer);