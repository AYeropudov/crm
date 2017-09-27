import React, {PureComponent} from 'react';
import ScriptElement from "./ScriptElement";
import axios from 'axios'
class Scripts extends PureComponent{
    constructor(props){
        super(props);
        axios({
            method:'get',
            url: process.env.REACT_APP_API_HOST + 'scripts',
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
            <some>
                <div className="page-title">
                    <h3 className="title">Welcome Dashboard!</h3>
                </div>
                {this.state.scripts.map((item)=> <ScriptElement countQuestions={item.countQuestions} id={item.id} title={item.title} key={item.id}/>)}
            </some>
        );
    }
}

export default Scripts