import React from 'react';
import {GlobalProvider} from './context/GlobalState'
import {SearchBar} from './components/SearchBar'
import {Recipe} from './components/Recipe'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="header">
        <SearchBar/>
      </div>
      
      <Recipe/>
    </GlobalProvider>
  );
}

export default App;
