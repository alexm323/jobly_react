import React from 'react';
import {Link} from 'react-router-dom';

const CompanyCard = ({name,description,logoUrl,handle}) => {
  let url = logoUrl ? logoUrl : '/logos/defaultLogo.png';
  const src = require(`.${url}`).default;

    return (
        <div >
          
          <div class='p-10'>
          <div class=" w-full lg:max-w-full lg:flex">
            <Link to={`/companies/${handle}`}>{name}</Link>
              
              <p>
                <b>{description}</b>
                <b>{console.log(logoUrl)}</b>
                <img src={src} alt="logo" height="25px" width='25px' />
              </p>
          </div>
          </div>
          
        </div>
      );
}
export default CompanyCard;