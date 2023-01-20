import React from 'react';
import {Component} from 'react';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "App">
        <Header />
      </div>
    );
  }
}

export default App;
