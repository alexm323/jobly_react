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
        <div>
            <h1>Company:{handle}</h1>
            <h3>{company.name}</h3>
            <h3>{company.description}</h3>

            <JobCardList jobs={company.jobs} />
        </div>
        
    )
}

export default CompanyDetail;