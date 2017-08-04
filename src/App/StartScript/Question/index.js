import React, {Component} from 'react';
import Answer from "../Answer/index";

class Question extends Component{
    constructor(props) {
        super(props);

        this.state={
            text: props.content.text,
            answers: props.content.answers
        };

        console.log(props);
    }
    render(){
        return(
            <div className="col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.text}</h3>
                </div>
                <div className="panel-body">
                    {this.state.answers.map(item => <Answer key={Math.random()+item.next} handleClick={this.props.handleAnswer} data={item}/>)}
                </div>
            </div>
        </div>
        )
    }
}

export default Question;