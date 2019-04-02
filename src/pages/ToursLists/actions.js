import fetch from 'cross-fetch';

export const getTours = () => {
    return (dispatch) => {
        fetch('/wp-json/wp/v2/tours').then(response=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            dispatch({
                type: 'GET_TOURS',
                payload: data
            });
        });
    }
}