import { APPLY_JOB, UPDATE_APPLICATION_DATA } from '../constants/actionTypes';

const initialState = {
  applicationData: {}
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOB:
      return {
        ...state,
        applicationData: action.payload
      };
    case UPDATE_APPLICATION_DATA:
      return {
        ...state,
        applicationData: { ...state.applicationData, ...action.payload }
      };
    default:
      return state;
  }
};

export default applicationReducer;
