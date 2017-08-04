import React, {Component} from 'react';

class Answer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={()=>this.props.handleClick(this.props.data.next)}>{this.props.data.text}</button>
        )
    }
}

export default Answer;