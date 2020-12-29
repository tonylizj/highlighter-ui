// eslint-disable-next-line no-use-before-define
import React from 'react';
import FormPage from './FormPage'; // eslint-disable-line
import './App.css';
import InfoAlert from './InfoAlert'; // eslint-disable-line

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="container">
        <div className="card text-center bg-light">
          <div className="card-header">
            <h4>Make a request to the highlighter API</h4>
          </div>
          <div className="card-body">
            <FormPage />
          </div>
        </div>
        <div className="card-footer bg-dark">
          <InfoAlert />
        </div>
      </div>
    </div>
  );
}

export default App;
