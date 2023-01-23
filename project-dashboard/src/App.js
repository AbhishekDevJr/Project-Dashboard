import React from 'react';
import {Component} from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App">
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
