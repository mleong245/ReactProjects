import React from 'react';
import ReactDOM from 'react-dom';

import config from './config'
import SearchBar from './components/search_bar';

const API_KEY = config.YOUTUBE_API_KEY;

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar /> // created an instance of SearchBar
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
