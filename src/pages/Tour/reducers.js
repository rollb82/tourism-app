import initialStore from './store';

const TourReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'GET_TOUR':
            return {
                ...store,
                tour: action.payload
            }
        default:
            return {
                ...store
            }
    }
}

export default TourReducer;