import { FETCH_JOBS, SELECT_JOB } from '../constants/actionTypes';

const initialState = {
  jobs: [],
  selectedJob: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        jobs: action.payload
      };
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
