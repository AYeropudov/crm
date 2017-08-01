import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            aside:true
        };
        this.collapseAside = this.collapseAside.bind(this);
    }

    collapseAside()
    {
        let asideState = !(this.state.aside);
        this.setState({aside:asideState});
    }
  render() {
    return (
      <div>
          <Aside collapsed={this.state.aside}/>
          <Section handleCollapseSide={this.collapseAside}/>
      </div>
    );
  }
}

export default App;
