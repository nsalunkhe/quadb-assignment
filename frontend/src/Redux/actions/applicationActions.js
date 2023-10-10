import { APPLY_JOB, UPDATE_APPLICATION_DATA } from '../constants/actionTypes';

export const applyJob = (applicationData) => {
  return {
    type: APPLY_JOB,
    payload: applicationData
  };
};

export const updateApplicationData = (data) => {
  return {
    type: UPDATE_APPLICATION_DATA,
    payload: data
  };
};
