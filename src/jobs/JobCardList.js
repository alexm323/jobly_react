import React from 'react';
import JobCard from './JobCard';

const JobCardList = ({jobs}) => {
    return(
        <div>
        {jobs.map(job => (
            <JobCard key ={job.handle} id = {job.id} title={job.title} salary={job.salary} />
        ))}
        </div>
    )
}

export default JobCardList;