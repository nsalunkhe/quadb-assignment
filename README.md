# Welcome to Job Search Application

This README provides an in-depth overview of the Job Search Application. It covers the application's functionalities, how to set it up locally, access the deployed version, the API used, key components, and the implemented debouncing functionality.

## Table of Contents

- [Introduction](#introduction)
- [Functionalities](#functionalities)
- [Deployed Application](#deployed-application)
- [API](#api)
- [Key Components](#key-components)
- [Debouncing Functionality](#debouncing-functionality)
- [Local Setup](#local-setup)
- [Contributors](#contributors)
- [screenshots](#screenshots)

## Introduction

The Job Search Application is a React-based web application that facilitates users in searching for job opportunities. Users can sign up, log in, explore job listings, view detailed job information, and apply for jobs. The application utilizes Redux for state management and communicates with an API to fetch job data.

## Functionalities

### 1. Signup
Allows users to create an account by providing a username, email, and password.

### 2. Login
Registered users can log in using their username and password.

### 3. User Dashboard
Enables users to search for jobs based on a job title, view job details, and apply for jobs.

### 4. Job Details
Users can view detailed information about a specific job.

### 5. Apply for a Job
Users can apply for a job by providing their name, email, cover letter, and uploading a resume (PDF, DOCX).

## Deployed Application

The application is deployed and can be accessed at [Job Search App](https://quadb-y6qq.onrender.com/).

## API

The application fetches job data from the following API endpoint:
- [Job API](https://amaranth-sheep-hat.cyclic.app/jobs)

## Key Components

1. **Signup Component (`Signup.jsx`)**: Allows users to sign up by providing necessary information.
2. **Login Component (`Login.jsx`)**: Enables registered users to log in.
3. **User Dashboard Component (`User.jsx`)**: Displays job search and job information.
4. **Job Details Component (`Info.jsx`)**: Provides detailed information about a specific job and allows users to apply for the job.
5. **Redux Actions (`actions` directory)**: Contains actions to apply for a job and update application data.
6. **Redux Reducers (`reducer` directory)**: Contains reducers for application data, authentication, and job-related actions.
7. **Redux Store Configuration (`store.js`)**: Configures the Redux store and combines reducers.
8. **Routing (`AllRoutes.jsx`)**: Defines application routes using React Router.
9. **Main Entry Point (`index.js`)**: Renders the main application component and sets up Redux store.

## Debouncing Functionality

Debouncing has been implemented for the job title search input to improve user experience and optimize API calls. The debouncing technique delays the API call until the user stops typing for a specified period, reducing the number of unnecessary API requests.

## Local Setup

To run the application locally, follow these steps:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application using `npm start`.


## Contributors

- [Niranjan Salunkhe](https://github.com/yourgithubusername) - [Contact](https://www.linkedin.com/in/niranjan-salunkhe/)

## screenshots
  Signup Page

  ![Quadb-signup](https://github.com/nsalunkhe/quadb-assignment/assets/101391587/a8e08284-41e8-43f2-903a-8b7f8b1bc6d1)

Login Page 

![Quadb-login](https://github.com/nsalunkhe/quadb-assignment/assets/101391587/b24feec3-c628-4c0b-b565-e6753432b048)

Job Details Page 

![Quadb-jobdata](https://github.com/nsalunkhe/quadb-assignment/assets/101391587/3b537e0f-1f0f-4916-bfe6-bfef9254cc1f)

Form for details 

![Quadb-Form](https://github.com/nsalunkhe/quadb-assignment/assets/101391587/62d3aa92-2c56-43fc-b1f4-81a84cb6bbd3)

Application Details With Resume 

![Quadb-Details](https://github.com/nsalunkhe/quadb-assignment/assets/101391587/f0516940-22cd-45ba-95df-b61cb728a754)









