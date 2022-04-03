import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Info {
  name: string;
  age: string | number;
}

function App() {
  const [info, SetInfo] = useState<Info | null>();
  useEffect(() => {
    axios.get('https://my-typescript-worker.nodejs-org.workers.dev/').then(res => {
      console.log(res);
      const data = res.data;
      SetInfo(data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            `name: ${info && info.name}---age: ${info && info.age}`
          }
        </a>
      </header>
    </div>
  );
}

export default App;
