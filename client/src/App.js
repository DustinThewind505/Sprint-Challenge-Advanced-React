import React from 'react';

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
          Oi!
          <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >Don't push this button or you will delete everything!</button>
        </div>
        <ListContainer />
      </header>
    </div>
  );
}


export default App;
