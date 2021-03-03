import React from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './App.css';
import SearchBox from "./components/SearchBox";
import SearchIndex from "./components/SearchIndex";

function App() {
  return (
    <React.Fragment>
        <SearchIndex/>
    </React.Fragment>
  );
}

export default App;
