import React, {Component} from 'react';
import Answer from "../Answer/index";

class Question extends Component{
    constructor(props) {
        super(props);

        this.state={
            text: props.content.text,
            answers: props.content.answers
        };
        this.classes_btn = [
            'btn-primary',
            'btn-pink',
            'btn-success',
            'btn-purple',
            'btn-info',
            'btn-warning',
            'btn-danger',
            'btn-inverse'
        ];
        this.color_bnt = 0;
        console.log(props);
    }
    getColor(){
        if(this.color_bnt > this.classes_btn.length) {
            this.color_bnt = 0;
        }
        let color = this.classes_btn[this.color_bnt];
        this.color_bnt+=1;
        return color;
    }
    render(){

        return(
            <div className="col-md-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.text}</h3>
                </div>
                <div className="panel-body">
                    {this.state.answers.map(item => <Answer type_class={this.getColor()} key={Math.random()+item.next} handleClick={this.props.handleAnswer} data={item}/>)}
                </div>
            </div>
        </div>
        )
    }
}

export default Question;