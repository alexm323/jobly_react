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
        <div >
        <SearchForm searchFor={searchJobs} />
        <div className='flex justify-center'>
        <div className='w-1/2'>
        {jobs.length
            ? <JobCardList jobs={jobs} />
            : <p className="lead">Sorry, no results were found!</p>
        }
        </div>
        </div>
        </div>
    )
}

export default JobList;
