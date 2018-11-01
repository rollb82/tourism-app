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

export const setAudioPlayList = (id, list) => {
    console.log(id);
    const {interesting_locations} = list.acf;
    //[""0""].acf.points_of_interests
    console.log(interesting_locations);
    let currentLocation = interesting_locations.find(location=>{
        return location.id == id;
    });

    console.log();
    if(!currentLocation.acf.points_of_interests){
        return {
            type: 'SET_AUDIO_PLAYLIST',
            payload: []
        }
    }
    else{
        return {
            type: 'SET_AUDIO_PLAYLIST',
            payload: currentLocation.acf.points_of_interests
        }
    }
}

export const getAUDIO = (id) => {
    
}