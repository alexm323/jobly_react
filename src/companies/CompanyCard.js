import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({name,description,url,handle}) => {
    return (
        <section >
          
          <Card >
            <CardBody style={{border: "1px solid grey",margin:"5px"}}>
            <Link to={`/companies/${handle}`}>
              <CardTitle className="font-weight-bold text-center">
                {name}
              </CardTitle>
              </Link>
              <CardText className="font-italic">Company Description</CardText>
              {/* {url && <img src={url} alt={name}/>} */}
              <p>
                <b>{description}</b>
              </p>
            </CardBody>
          </Card>
          
          
        </section>
      );
}
export default CompanyCard;