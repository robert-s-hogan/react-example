import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className='App'>
        <header className='App-header'>
          {data.map((person) => (
            <div key={person.name}>
              <h1>{person.name}</h1>
              <p>{person.height}</p>
            </div>
          ))}
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  );
}

export default App;
