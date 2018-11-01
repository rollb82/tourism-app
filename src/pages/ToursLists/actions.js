import fetch from 'cross-fetch';

export const getTours = () => {
    return (dispatch) => {
        fetch('/tours').then(response=>{
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