import React, {useContext,useEffect,useState} from 'react';
import UserContext from '../authentication/UserContext';


const JobCard = ({id,title,salary,equity,companyName}) => {

    const {hasAppliedToJob,applyToJob} = useContext(UserContext);
    const [applied,setApplied] = useState();
    
    useEffect(function updateAppliedStatus(){
        setApplied(hasAppliedToJob(id));
    },[id,hasAppliedToJob])

    async function handleApply(evt){
        if(hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    
    return(
        <div>
        <h1>Job Card</h1>
        <h2>{title}</h2>
        <h3>{salary}</h3>
        <h3>{equity}</h3>
        <h3>{companyName}</h3>
        <button
              onClick={handleApply}
              disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
    )
}

export default JobCard;
