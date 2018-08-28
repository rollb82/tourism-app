export const initialState = {
    tours: [],//GET_TOURS
    currentTour: {
        title:{
            rendered: null
        },
        content:{
            rendered: null
        },
        featured_image: null,
        'app-excerpt': null,
        acf:{
            map: {
                lat: null,
                lng: null,
                address: null
            },
            interesting_locations: []
        }
    },//SET_CURRENT_TOUR
    currentLocation: {
        title:{
            rendered: null
        },
        content:{
            rendered: null
        },
        featured_image: null,
        'app-excerpt': null,
        acf:{
            map: {
                lat: null,
                lng: null,
                address: null
            },
            points_of_interests: []
        }
    },//SET_CURRENT_LOCATION
    pageIsLoading: true,
    currentPoint: {
        title:{
            rendered: null
        },
        content:{
            rendered: null
        },
        featured_image: null,
        'app-excerpt': null,
        acf:{
            audio: {
                audio_file: null
            }
        }
    },//SET_CURRENT_POINT
    yourGeoLocation: {},//SET_CURRENT_GEO_LOCATION
    isAudioPlaying: false,//SET_A UDIO_STATUS
    isSideMenuOpen: false,//SET_SIDE_MENU_STATUS
    currentlyPlaying:{
        audioFile: null,
        progress: 0,
        banner: null
    },
    playList:[]
};