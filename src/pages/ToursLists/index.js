import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTours } from './actions';
import TourCard from './TourCard';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTours: () => dispatch(getTours())
    }
}

class TourList extends Component {
    componentDidMount() {
        this.props.getTours();
    }
    render() {
        const tours = this.props.state.TourListReducer.tours;
        if (tours.length > 0) {
            
            return (
                <div>
                    {tours.map((element, index) => {
                        //const {title} = element;
                        return (
                            <div key={index}>
                                <Link to={`tour/9`} >
                                    <TourCard {...element} />
                                </Link>
                            </div>
                        );
                    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(TourList);