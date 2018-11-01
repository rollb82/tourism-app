import initialStore from './store';

const AudioPlayerReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'SET_AUDIO_PLAYLIST':
            return {
                ...store,
                playList: action.payload
            }
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

export default AudioPlayerReducer;