import React, { Component } from 'react';
import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';

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
        console.log(process.env.REACT_APP_API_HOST);
    return (
      <some>
          <Aside collapsed={this.state.aside}/>
          <Section content={<div><h1>toto</h1></div>} handleCollapseSide={this.collapseAside}/>
      </some>
    );
  }
}

export default App;

