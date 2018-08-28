import React from 'react';
import { connect } from 'react-redux';
import { getTours, pageIsLoading } from '../../actions/tourActions';
import BackgroundBannerComponent from '../shared/BackgroundBannerComponent';
import {Link} from 'react-router-dom';

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        tours: state.tours
    }
};

/**
 * 
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        getTours: () => dispatch(getTours()),
        pageIsLoading: ()=>dispatch(pageIsLoading())
    }
}

class ToursContainer extends React.Component {
    componentDidMount() {
        this.props.getTours();
    }

    render() {
        /**
         * createMarkup: creates our html markup using dangerouslySetInnerHtml
         * @param {*} markup : use a string instead of html
         */
        const createMarkup = (markup) => {
            const markupSubString = markup.substring(0, 100);
            return {
                __html: `${markupSubString}`
            }
        }
        
        const { tours } = this.props;

        /**
         * create a list of tours
         */
        const tourList = tours.map((tour) => {
            const { id } = tour;
            return (
                <Link 
                    onClick={this.props.pageIsLoading}
                    to={`/tour/${id}`}
                    key={id}>
                <div
                    className="tourSummary">
                    <BackgroundBannerComponent bannerText={tour.title.rendered} imageUrl={tour.featured_image}>
                        <div className="backgroundHeading" >
                            <h2>{tour.title.rendered}</h2>
                        </div>
                    </BackgroundBannerComponent>
                    <div>
                        <p dangerouslySetInnerHTML={createMarkup(tour['app-excerpt'])}></p>
                    </div>
                </div>
                </Link>
            );
        })

        return (
            <div className="row">
                <div className="col-md-7">
                <h1>Tours in Richmond</h1>
                {tourList.length > 0 ? tourList:null}
                </div>
                <div className="col-md-5">
                    side bar
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToursContainer);