export const getTour = (id) => {
    console.log(id);
    return (dispatch) => {
        fetch(`/tours/${id}`).then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            dispatch({
                type: 'GET_TOUR',
                payload: data
            });
            console.log(data);
            return data;
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

export const getAUDIO = (id) => {
    
}