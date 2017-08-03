import React, {Component} from 'react';
import ScriptElement from "./ScriptElement";
import axios from 'axios'
class Scripts extends Component{
    constructor(props){
        super(props);
        axios({
            method:'get',
            url:'http://localhost:5000/scripts',
            responseType:'json'
        })
            .then((response) => this.setScripts(response.data));
        this.state = {
            scripts:[]
        }
    }

    setScripts(data){
        this.setState({scripts:data});
    }

    render(){
        return(
            <div className="wraper container-fluid">
                <div className="page-title">
                    <h3 className="title">Welcome Dashboard!</h3>
                </div>
                {this.state.scripts.map((item)=> <ScriptElement countQuestions={item.countQuestions} id={item.id} title={item.title} key={item.id}/>)}
            </div>
        );
    }
}

export default Scripts