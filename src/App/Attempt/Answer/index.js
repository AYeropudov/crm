import React, {Component} from 'react';

class Answer extends Component{

    render(){
        let def_class = 'btn btn-block btn-lg ';
        def_class += this.props.type_class;
        return(
            <button className={def_class} onClick={()=>this.props.handleClick(this.props.data.next, this.props.data.id)}>{this.props.data.text}</button>
        )
    }
}

export default Answer;