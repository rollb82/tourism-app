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
        });
    }
}