import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTour } from './actions';
//import TourReducer from "./reducers";

import Location from './components/Location';
import TourMap from './components/Map';
import MainHeading from './components/MainHeading';
import DurationComponent from './components/Duration';
import FeaturedImage from './components/FeaturedImage';
import TipsAndHours from './components/TipsAndHours';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTour: (id) => dispatch(getTour(id))
    }
}


class Tour extends Component {

    componentDidMount() {
        this.props.getTour(9);
    }
    render() {
        //TourReducer.tour
        const { tour } = this.props.state.TourReducer;        
        
        if (tour.id !== undefined) {
            const { acf, featured_image, id } = tour;
            const title = tour.title.rendered;
            return (
                <div>
                    <MainHeading title={title} />
                    <FeaturedImage imageSrc={featured_image} alt={title} />
                    <TourMap map={acf.map} />
                    <DurationComponent duration={acf.duration} />
                    <Location id={id} locations={acf.interesting_locations} />
                    <TipsAndHours tips={tour.acf['tips_&_hours']} />
                </div>
            );
        }
        else {
            return (
                <div>
                    none
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tour);