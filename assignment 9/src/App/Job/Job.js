import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Job.css'; // Make sure to create and link the corresponding CSS file

const jobListings = [
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.', location: 'New York, NY' },
    { id: 2, title: 'Product Manager', description: 'Lead product development from ideation to launch.', location: 'San Francisco, CA' },
    { id: 3, title: 'Graphic Designer', description: 'Create visual concepts to communicate ideas.', location: 'Remote' },
    // ... more job listings
];

function Jobs() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="jobs-container">
            <h2>Job Openings</h2>
            <div className="jobs-list">
                {jobListings.map(job => (
                    <div key={job.id} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                        <span>{job.location}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Jobs;
