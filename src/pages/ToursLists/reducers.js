import initialState from './store';

const TourListReducer = (store = initialState, action) => {
    switch (action.type) {
        case ('GET_TOURS'):
            return {
                ...store,
                tours: action.payload
            }
        default:
            return {
                ...store
            }
    }
}

export default TourListReducer;