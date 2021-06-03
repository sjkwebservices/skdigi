import logo from './logo.svg';
import './App.css';

import {PrimaryButton} from '@fluentui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PrimaryButton text="welcome" />
      </header>
    </div>
  );
}

export default App;
