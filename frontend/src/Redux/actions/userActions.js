import { FETCH_JOBS, SELECT_JOB } from '../constants/actionTypes';

export const fetchJobs = (jobs) => {
  return {
    type: FETCH_JOBS,
    payload: jobs
  };
};

export const selectJob = (job) => {
  return {
    type: SELECT_JOB,
    payload: job
  };
};
