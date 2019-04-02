import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTours } from './actions';
import TourCard from './TourCard';
import LoadingComponent from '../shared/components/Loading';
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
                <div className="row">
                    {tours.map((element, index) => {
                        const {id} = element;
                        return (
                            <div  className="col-lg-4" key={index}>
                                <Link to={`tour/${id}`} >
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
                <LoadingComponent />
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourList);