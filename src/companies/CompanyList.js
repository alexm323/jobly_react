import React, {useState,useEffect} from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api/Api'
import SearchForm from '../common/SearchForm'
import LoadingSpinner from '../common/LoadingSpinner'

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);
  useEffect(function getCompaniesOnLoad() {
    search();
  }, []);
  
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingSpinner />;

  return (
      <div>
        <SearchForm searchFor={search} />
        {companies.length
            ? (
                <div>
                  {companies.map(company => (
                      <CompanyCard
                          key={company.handle}
                          handle={company.handle}
                          name={company.name}
                          description={company.description}
                          logoUrl={company.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p>Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default CompanyList;