import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="searchbarContainer">
      <input
        type="text"
        placeholder="Search for a movie"
        className="searchbar"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
