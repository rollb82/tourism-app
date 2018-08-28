import { initialState } from '../store';
import {
    GET_TOURS, SET_CURRENT_TOUR, SET_CURRENT_LOCATION, SET_CURRENT_POINT,
    SET_CURRENT_GEO_LOCATION, SET_AUDIO_STATUS, SET_SIDE_MENU_STATUS,
    PAGE_IS_LOADING, PAGE_LOADING_COMPLETE
} from '../actions/types';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOURS:
            return {
                ...state,
                tours: [...action.payload],
                pageIsLoading: false
            }
        case SET_CURRENT_TOUR:
            return {
                ...state,
                currentTour: action.payload,
                pageIsLoading: false
            }
        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload,
                pageIsLoading: false
            }
        case SET_CURRENT_POINT:
            return {
                ...state,
                currentPoint: action.payload,
                pageIsLoading: false
            }
        case SET_CURRENT_GEO_LOCATION:
            return {
                ...state,
                yourGeoLocation: action.payload
            }
        case SET_AUDIO_STATUS:
            return {
                ...state,
                isAudioPlaying: action.payload
            }
        case PAGE_IS_LOADING: 
            return {
                ...state,
                pageIsLoading: true
            }
        case PAGE_LOADING_COMPLETE:
            return {
                ...state,
                pageIsLoading: false
            }
        case SET_SIDE_MENU_STATUS:
            return {
                ...state,
                isSideMenuOpen: action.payload
            }
        case 'SET_CURRENTLY_PLAYING':
            return {
                ...state,
                currentlyPlaying: action.payload
            }
        case 'TOGGLE_AUDIO':
            return{ 
                ...state,
                isAudioPlaying: action.payload
            }
        case 'CLOSE_AUDIO_PLAYER':
            return {
                ...state,
                isAudioPlaying: false,
                currentlyPlaying:{
                    audioFile: null,
                    progress: 0,
                    banner: null
                }
            }
        default:
            return state;
    }
}

export default reducer;