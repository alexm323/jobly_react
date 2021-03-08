import { Button, Input, TextField } from "@material-ui/core";
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
          <TextField
              variant="outlined"
              size="small"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={handleChange}
          />
          <Button 
          variant="outlined"
          color="secondary"
          size="large"
          type="submit">
            Submit
          </Button>
        </form>
      </div>
  );
}

export default SearchForm;
