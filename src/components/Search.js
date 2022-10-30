import React from "react";
import PropTypes from "prop-types";
//https://api.github.com/search/users?q=aaa
const Search = (props) => {
  const onSubmitSearch = (e) => {
    // console.log(e.target.elements.username.value);
    // console.log(e.target.username.value);
    props.onClickSearch(e.target.username.value);
    e.target.username.value = "";
    e.preventDefault();
    // e.stopPropagation();
  };

  return (
    <form onSubmit={onSubmitSearch}>
      <div className="input-group mb-3 border-bottom pb-3">
        <input
          name="username"
          type="text"
          className="form-control"
          placeholder="search username"
          aria-label="search username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-primary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {};

export default Search;
