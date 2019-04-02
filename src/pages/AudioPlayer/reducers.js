import initialStore from './store';

const AudioPlayerReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'SET_AUDIO_PLAYLIST':
            return {
                ...store,
                playList: action.payload
            }
        case 'SET_AUDIO_PLAYER':
            return {
                ...store,
                audioPlayer: {
                    ...action.payload
                }
            }
        case 'SET_AUDIO_PLAYER_STATUS':
            return {
                ...store,
                audioPlayer:{
                    ...store.audioPlayer,
                    playing: action.payload
                }
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