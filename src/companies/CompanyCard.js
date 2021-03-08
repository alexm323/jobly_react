import React from 'react';
import {Link} from 'react-router-dom';

const CompanyCard = ({name,description,url,handle}) => {
    return (
        <section >
          
          <div >
            
            <Link to={`/companies/${handle}`}>
              
                {name}
              
              </Link>
              
              <p>
                <b>{description}</b>
              </p>
  
          </div>
          
          
        </section>
      );
}
export default CompanyCard;