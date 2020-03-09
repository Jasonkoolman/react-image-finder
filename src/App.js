import React from 'react';
import './App.scss';
import Dog from './components/Dog';
import Cat from './components/Cat';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header"></header>
      <main className="app-content">
        <h1>Image Finder</h1>
        <div className="row">
          <div className="column">
            <Dog/>
          </div>
          <div className="column">
            <Cat/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
