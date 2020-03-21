import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer';

import { useDarkMode } from './hooks/useDarkMode';

const App = () => {

  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);;
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="dark-mode__toggle">
          <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >Dark Mode</button>
        </div>
        <ListContainer />
      </header>
    </div>
  );
}


export default App;
