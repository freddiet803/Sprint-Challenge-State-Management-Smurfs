import axios from 'axios';

export const SMURF_GET_START = 'SMURF_GET_START';
export const SMURF_GET_SUCCESS = 'SMURF_GET_SUCCESS';
export const SMURF_GET_FAILURE = 'SMURF_GET_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_GET_START });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      console.log(res.data);
      dispatch({
        type: SMURF_GET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SMURF_GET_FAILURE,
        payload: err
      });
    });
};
