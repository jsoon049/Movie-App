import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/search'
import Results from './components/results'
import Popup from './components/popup'

function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.query).then(({ data }) => {
        console.log(data);
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, query: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App