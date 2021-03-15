import React, { useState } from "react";

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

//   filter on the back end 
  function handleSubmit(evt) {
    evt.preventDefault();
    // in case of spaces 
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    
      <div className='flex justify-center  mt-10'>
        <form className="shadow w-1/2" onSubmit={handleSubmit}>
          <input 
              className="bg-blue-200 rounded p-2 w-3/4"
              type="text"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
          />
          <button 
          className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          variant="outlined"
          color="secondary"
          size="large"
          type="submit">
            Submit
          </button>
        </form>
      </div>
      
  );
}

export default SearchForm;
