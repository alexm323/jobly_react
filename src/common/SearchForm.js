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
      <div className="shadow flex w-1/2 bg-gray-200">
        <form onSubmit={handleSubmit}>
          <input 
          className="w-1/2 rounded p-2"
              type="text"
              size="small"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
          />
          <button 
          className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400"
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
