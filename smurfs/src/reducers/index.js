import {
  SMURF_GET_START,
  SMURF_GET_SUCCESS,
  SMURF_GET_FAILURE,
  SMURF_POST_START,
  SMURF_POST_SUCCESS,
  SMURF_POST_FAILURE
} from '../actions';

export const initialState = {
  smurf: [],
  isLoading: false,
  error: '',
  newSmurf: { name: '', age: null, height: '', id: null }
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_GET_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurf: action.payload
      };
    case SMURF_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SMURF_POST_START:
      return {
        ...state,
        isLoading: true
      };

    case SMURF_POST_SUCCESS:
      return {
        ...state,
        smurf: [...state.smurf, action.payload]
      };

    case SMURF_POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
