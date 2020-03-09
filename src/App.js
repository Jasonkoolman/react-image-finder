import React from 'react';
import './App.scss';
import Dog from './components/Dog';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header"></header>
      <main className="app-content">
        <h1>Image Finder</h1>
        <Dog/>
      </main>
    </div>
  );
}

export default App;
