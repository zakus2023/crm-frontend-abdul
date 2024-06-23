import React from "react";
import "./SearchTicketFrm.css";

const SearchTicketFrm = ({ handleChange, str }) => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search"
          name="searchStr"
          value={str}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchTicketFrm;
