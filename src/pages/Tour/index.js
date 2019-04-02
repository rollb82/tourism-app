import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTour, setTour } from './actions';
//import TourReducer from "./reducers";
import LoadingComponent from '../shared/components/Loading';
import Location from './components/Location';
import TourMap from './components/Map';
import MainHeading from './components/MainHeading';
import DurationComponent from './components/Duration';
import FeaturedImage from './components/FeaturedImage';
import TipsAndHours from './components/TipsAndHours';
//import { setContent } from './components/utils';
import TourDescription from './components/TourDescription';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTour: (id) => dispatch(getTour(id)),
        setTour: (tourObj) => dispatch(setTour(tourObj))
    }
}


class Tour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showContent: 'lessContent'
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { tours } = this.props.state.TourListReducer;

        const tourFound = tours.find(element => {
            return element.id === Number(id);
        });
        if (tourFound) {
            this.props.setTour(tourFound)
        }
        else {
            this.props.getTour(id);
        }
        this.toggleDescription = this.toggleDescription.bind(this);
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

        const { tour } = this.props.state.TourReducer;

        if (tour.id !== undefined) {
            const { acf, featured_image, id } = tour;
            const title = tour.title.rendered;
            const description = tour.content.rendered;
            return (
                <div className="row  animated fadeIn">
                    <div className="col-lg-8">
                        <MainHeading title={title} />

                        <FeaturedImage imageSrc={featured_image} alt={title} />
                        <TourDescription
                            showContent={this.state.showContent}
                            toggleDescription={this.toggleDescription}
                            lessContent={tour['app-excerpt']}
                            moreContent={description} />
                    </div>
                    <div className="col-lg-4">
                        <div className="app-side-bar">
                            <div className="app-take-tour">
                                <a href="javascript:void(0);" className="btn btn-success">
                                    <strong>Take this tour</strong>
                                    <br />
                                    <small>Try it for free!</small>
                                </a>
                            </div>
                            <TourMap map={acf.map} />
                            <DurationComponent duration={acf.duration} />
                            <Location id={id} locations={acf.interesting_locations} />
                            <TipsAndHours tips={tour.acf['tips_&_hours']} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <LoadingComponent />
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tour);