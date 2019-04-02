export const getTour = (id) => {
    console.log(id);
    return (dispatch) => {
        fetch(`/wp-json/wp/v2/tours/${id}`).then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            dispatch({
                type: 'GET_TOUR',
                payload: data
            });
        });
    }
}

export const setTour = (tourObject) =>{
    return{
        type: 'GET_TOUR',
        payload: tourObject
    }
}