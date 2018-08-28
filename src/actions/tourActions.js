export const getTours = () => {
    return (dispatch) => {
        dispatch(pageIsLoading());
        fetch('/wp-json/wp/v2/tours').then((response) => {
            return response.json();
        }).then(data => {
            dispatch({
                type: 'GET_TOURS',
                payload: data
            });
            dispatch(pageIsComplete());
        });
    }
}

/**
 * getTourByID
 * @param {*} id : id number for the tour you want to request
 */
export const getTourByID = (id) => {
    return (dispatch) => {
        //dispatch(pageIsLoading());
        fetch(`/wp-json/wp/v2/tours/${id}`).then((response) => {
            return response.json();
        }).then(data => {
            dispatch({
                type: 'SET_CURRENT_TOUR',
                payload: data
            });
            dispatch(pageIsComplete())
        });
    }
}

export const pageIsLoading = () => {
    return {
        type: 'PAGE_IS_LOADING',
        payload: true
    }
}

export const pageIsComplete = () => {
    return {
        type: 'PAGE_LOADING_COMPLETE',
        payload: false
    }
}

/**
 * getLocationByID
 * @param {*} id : id number for the location you want to request
 */
export const getLocationByID = (id) => {
    return (dispatch) => {
        dispatch(pageIsLoading());
        fetch(`/wp-json/wp/v2/locations/${id}`).then((response) => {
            return response.json();
        }).then(data => {
            dispatch({
                type: 'SET_CURRENT_LOCATION',
                payload: data
            })
            dispatch(pageIsComplete());
        });
    }
}

/**
 * getPointByID
 * @param {*} id : id for the point you want to request
 */
export const getPointByID = (id) => {
    return (dispatch) => {
        dispatch(pageIsLoading());
        fetch(`/wp-json/wp/v2/points/${id}`).then((response) => {
            return response.json();
        }).then(data => {
            dispatch({
                type: 'SET_CURRENT_POINT',
                payload: data
            })
            dispatch(pageIsComplete())
        });
    }
}

/**
 * creates a promise to get the current location of a user
 */
export const getCurrentGeoLocation = (options) => {
    
    return new Promise((resolve, reject, options) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        }
    });
}

export const setGeoLocation = () => {
    return (dispatch) => {
        const options = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        };
        getCurrentGeoLocation(options).then((response) => {
            console.log(response);
            dispatch({
                type: 'SET_CURRENT_GEO_LOCATION',
                payload: response
            })
        }).catch((err) => {
            console.log(err);
        });
    }
}

/**
 * setMenuState: this is used to set the state of our side navigation
 * @param {*} value : set the isSideMenuOpen property to true or false
 */
export const setMenuState = (value) => {
    return {
        type: 'SET_SIDE_MENU_STATUS',
        payload: value
    }
}

export const setCurrentlyPlaying = (post) => {
    console.log(post);
    return {
        type: 'SET_CURRENTLY_PLAYING',
        payload: {
            audioFile: post.acf.audio.audio_file,
            progress: 0,
            banner: post.featured_image
        }
    }
}

//const testingPromise ()

export const toggleAudio = (val) => {
    return {
        type: 'TOGGLE_AUDIO',
        payload: val
    }
}

export const showAudioPlayer = (playerMode) =>{
    return {
        type: 'SHOW_AUDIO_PLAYER',
        payload: playerMode
    }
}

export const closePlayer = () => {
    return {
        type: 'CLOSE_AUDIO_PLAYER'
    }
}