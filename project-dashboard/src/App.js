import React from 'react';
import {Component} from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
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
      </div>
    );
  }
}

export default App;
