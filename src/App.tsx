// eslint-disable-next-line no-use-before-define
import React from 'react';
import FormPage from './FormPage'; // eslint-disable-line
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <h4>Make a request to the highlighter API</h4>
        </div>
        <div className="card-body">
          <FormPage />
        </div>
      </div>
    </div>
  );
}

export default App;
