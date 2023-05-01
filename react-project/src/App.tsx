import React from 'react';
import './App.css';
import { FetchComponent } from './components/FetchComponent';
import { HoverComponent } from './components/HoverComponent';
import { LocalStorageComponent } from './components/LocalStorageComponent';

function App() {
  return (
    <>
      <FetchComponent />
      <LocalStorageComponent />
      <HoverComponent />
    </>
  );
}

export default App;
