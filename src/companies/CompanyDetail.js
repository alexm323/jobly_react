import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import JoblyApi from '../api/Api';
import JobCardList from '../jobs/JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';




// we are going to need to access the param string so we can search for the right company so we can use useParams from react router 

// need to load in company details specific to that company which we can search using the handle 
// anytime the handle changes in the param string then we can reload the page which we will do with useEffect 
// this will require a method call from our jobly api class 

const CompanyDetail = () => {
    const {handle} = useParams();
    const [company,setCompany] = useState(null);

    useEffect(function getCompanyDetails() {
        async function getCompanyData(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompanyData();
    },[handle])

    if (!company) return <LoadingSpinner/>


    return(
        <div className='flex justify-center'>
        <div>
            <div className="bg-red-100 mt-5 text-black-700 rounded p-3">
            
            <h1 className='text-2xl py-2'>Company: {company.name}</h1>
            <h3 className='text-1xl py-2'>{company.description}</h3>
            </div>
            <div className="">
            <JobCardList jobs={company.jobs} />
            </div>

            
            </div>
        </div>
        
    )
}

export default CompanyDetail;