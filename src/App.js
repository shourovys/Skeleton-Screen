import React from 'react';
import './App.css';
import Article from './Components/Article/Article';
import Header from './Components/Header/Header';
import Skeleton from './Components/Skeleton/Skeleton';
import User from './Components/User/User';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="tow-side-container">
        <div className="left-side">
          <Article />
        </div>
        <div className="right-side">
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
