import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, selectJob } from '../Redux/actions/userActions';
import './User.css';

const User = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.user.jobs);
  const selectedJob = useSelector(state => state.user.selectedJob);

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleSeeJobInfo = (job) => {
    dispatch(selectJob(job));
    setModalOpen(true);
  };

  const handleApply = () => {
    if (selectedJob) {
      navigate(`/info/${selectedJob.id}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://amaranth-sheep-hat.cyclic.app/jobs');
        const data = await response.json();
        dispatch(fetchJobs(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (jobTitle.trim() !== '') {
      fetchData();
    } else {
      dispatch(fetchJobs([]));
    }
  }, [dispatch, jobTitle]);

  return (
    <div className="jobs-container">
      <h1 className='welcome'> &#x1F64F;Welcome to our app&#x1F64F;</h1>
      <h1>Which job are you looking for?</h1>
      <input
        type="text"
        id="jobTitle"
        value={jobTitle}
        onChange={handleJobTitleChange}
        placeholder="Enter job title"
      />

      {jobs.length > 0 ? (
        <div className="job-cards">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-logo">
                <img src={job.logo_url} alt="Job Logo" />
              </div>
              <div className="job-details">
                <h2>{job.job_title}</h2>
                <p><strong>Company:</strong> {job.company_name}</p>
                <p><strong>Experience Needed:</strong> {job.experience}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <button onClick={() => handleSeeJobInfo(job)}>See Job Info</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs found.</p>
      )}

      {modalOpen && selectedJob && (
        <div className="job-info-modal">
          <div className="modal-content">
            <h2>{selectedJob.job_title}</h2>
            <p><strong>Company:</strong> {selectedJob.company_name}</p>
            <p><strong>Experience Needed:</strong> {selectedJob.experience}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Desc:</strong> {selectedJob.description}</p>
            <button className="apply-button" onClick={handleApply}>Apply Now</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default User;
