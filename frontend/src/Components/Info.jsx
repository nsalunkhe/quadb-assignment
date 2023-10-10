import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './Info.css'; // Import the CSS file
const Info = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null
  });
  const [jobInfo, setJobInfo] = useState(null);
  const { jobId } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  // Fetch job information based on jobId
  useEffect(() => {
    const fetchJobInfo = async () => {
      try {
        const response = await fetch(`https://amaranth-sheep-hat.cyclic.app/jobs/${jobId}`);
        const data = await response.json();
        setJobInfo(data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    if (jobId) {
      fetchJobInfo();
    }
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const goToJobSearchPage = () => {
    navigate('/user');
  };

  return (
    <div className="info-container">
      
      {submitted && (
        <div className="submitted-info">
          <h2>Thank You for Applying for this Job</h2>

          <h3>Your Information</h3>
          <table>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <th>Cover Letter:</th>
                <td>{formData.coverLetter}</td>
              </tr>
            </tbody>
          </table>

          <h3>Job Information</h3>
          <table>
            <tbody>
              <tr>
                <th>Job Title:</th>
                <td>{jobInfo.job_title}</td>
              </tr>
              <tr>
                <th>Company:</th>
                <td>{jobInfo.company_name}</td>
              </tr>
              <tr>
                <th>Experience Needed:</th>
                <td>{jobInfo.experience}</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td>{jobInfo.salary}</td>
              </tr>
            </tbody>
          </table>

          {formData.resume && (
            <div className="pdf-container">
              <h3>Uploaded Resume</h3>
              <embed src={URL.createObjectURL(formData.resume)} type="application/pdf" width="100%" height="500px" />
            </div>
          )}

<button onClick={goToJobSearchPage} className="go-to-search-button">
        Go to Job Search Page
      </button>
        </div>
        
      )}

      {!submitted && (
        <form onSubmit={handleSubmit}>
          <h1 className="titl">Please fill the following information.</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
          />

          <label htmlFor="resume">Resume (PDF, DOCX):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default Info;
