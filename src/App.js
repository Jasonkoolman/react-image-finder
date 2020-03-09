import React from 'react';
import { ReactComponent as Logo } from './assets/img/logo.svg';
import Dog from './components/Dog';
import Cat from './components/Cat';
import './App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <Logo/>
      </header>
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
