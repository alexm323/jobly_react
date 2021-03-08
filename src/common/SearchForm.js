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
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
