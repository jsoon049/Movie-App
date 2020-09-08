import React from "react";
import Result from './result'

function Results({ results, openPopup}) {
  return (
    <section className="results">
        {results.map(result => (
            <Result result={result} key={result.imdbID} openPopup={openPopup}/>
        ))}
    </section>
  );
} 

export default Results;
