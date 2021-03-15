import React from 'react';
import {Link} from 'react-router-dom';

const CompanyCard = ({name,description,logoUrl,handle}) => {
  let url = logoUrl ? logoUrl : '/logos/defaultLogo.png';
  const src = require(`.${url}`).default;

    return (
      <div className='flex justify-center'>
        <div className='w-1/2'>
        <div className='w-full bg-blue-200 border border-blue-600 my-6 rounded'>
          
          <div className='p-6'>
            <div className="flex justify-between h-10">
              <Link className='underline text-2xl' to={`/companies/${handle}`}>Company: {name}</Link>
              <img  className=''src={src} alt="logo" />
            </div>
          </div>
          <div className='flex bg-red-100'>
          <p className=' text-2xl mb-4 w-full'>{description}</p>
          </div>
          </div>
          </div>
          </div>
      );
}
export default CompanyCard;