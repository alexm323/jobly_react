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
        <div className=''>
            <div className='block w-full my-3 border bg-blue-200 p-10 rounded'>
                <div className='bg-blue-100 rounded mb-5'>
                    <h2 className='text-2xl'>{title}</h2>
                    <h3 className='text-2xl'>{companyName ? `Company: ${companyName}` : null}</h3>
                </div>
                
                <div className='flex justify-between'>
                    <div>
                    <h3>Salary: {salary}</h3>
                    <h3>Equity: {equity ? equity:0}</h3>
                    </div>
                
            
                    <button
                        className={applied ? "w-1/4 bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" :"w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
                        onClick={handleApply}
                        disabled={applied}
                    >
                        {applied ? "Applied" : "Apply"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default JobCard;
