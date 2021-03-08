import React, {useState, useEffect} from 'react';
import JoblyApi from '../api/Api';
import LoadingSpinner from '../common/LoadingSpinner';
import JobCardList from './JobCardList';
import SearchForm from '../common/SearchForm';

const JobList = () => {
    const [jobs,setJobs] = useState(null);
    useEffect(function getAllJobs(){
        searchJobs();
    },[])
    async function searchJobs(title){
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if(!jobs) return <LoadingSpinner/>
    return (
        <div>
        <h1>Welcome to the joblist page!</h1>
        <SearchForm searchFor={searchJobs} />
        {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
        </div>
    )
}

export default JobList;
