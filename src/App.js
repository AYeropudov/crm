import React, {PureComponent} from 'react';
import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import {connect} from 'react-redux';
import {selectMenu} from "./actions/appActions";


class App extends PureComponent {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let test = window.location.hash;
        let aside = this.props.app.get('aside');
        let t = aside.find(o => o.get('href') === test);
        if(t === undefined){
            aside.forEach(itm => {if(t===undefined){t = itm.get('sub').find(r => r.get('href') === test)}})
        }
        if(t!== undefined){
            this.props.dispatch(selectMenu({parent:t.get('parentKey'), target:t.get('key')}))
        }
    }
    render() {
        return (
            <some>
                <Aside/>
                <Section content={<div><h1>toto</h1></div>}/>
            </some>
        );
    }
}

function mapStoreToProps(store) {
    return {...store};
}

export default connect(mapStoreToProps)(App);

