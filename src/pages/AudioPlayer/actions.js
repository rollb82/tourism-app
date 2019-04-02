

/**
 * getTour: sets the current tour based on id and grabs location related data.
 * @param {*} id 
 * @param {*} locationID 
 */
export const getTour = (id, locationID) => {
    console.log(id);
    return (dispatch) => {
        fetch(`/wp-json/wp/v2/tours/${id}`).then(response => {
            return response.json();
        }).then(data => {

            dispatch({
                type: 'GET_TOUR',
                payload: data
            });

            const location = data.acf.interesting_locations.find(element => {
                return element.id === Number(locationID);
            });

            dispatch(setAudioPlayList(location));            
        });
    }
}

export const setAudioPlayList = (location) => {
    console.log(location);
    return {
        type: 'SET_AUDIO_PLAYLIST',
        payload: location.acf.points_of_interests
    }
}

export const handleToggle = (status) =>{
    return {
        type: 'SET_AUDIO_PLAYER_STATUS',
        payload: status
    }
}

export const setAudioPlay = (data) => {
    console.log(data);
    return {
        type: 'SET_AUDIO_PLAYER',
        payload: data
    }
}

