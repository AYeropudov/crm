import React, {Component} from 'react';
import axios from "axios";
import Question from "./Question/index";

class StartScript extends Component{
    constructor(props){
        super(props);
        this.state = {
                title: "",
                content:[
                    {
                        key:"some_key",
                        text:"placeholder",
                        answers:[]
                    }
                ]
        }
        let urlToScript = process.env.REACT_APP_API_HOST + "startscript/" + this.props.id;
        axios({
            url: urlToScript,
            method : 'GET',
            responseType:'json'
        })
            .then((response)=>this.setFirstQuestion(response.data));

        this.getNextQuestion = this.getNextQuestion.bind(this);
    }
    getNextQuestion(id){
        // console.log(id);
        let urlToScript = process.env.REACT_APP_API_HOST + "question/" + id;
        axios({
            url: urlToScript,
            method : 'GET',
            responseType:'json'
        })
            .then((response)=>this.setQuestion(response.data));
    }
    setQuestion(data){
        this.setState({
            content:[
                {
                    key: data.key,
                    text:data.text,
                    answers: data.answers
                }
            ]
        });
    }
    setFirstQuestion(data){
        this.setState({
            title:data.title,
            content:[
                {
                    key: data.key,
                    text:data.text,
                    answers: data.answers
                }
            ]
        });
        console.log(this.state);
    }
    renderQuestion(item){
        return <Question handleAnswer={this.getNextQuestion} key={item.key} content={item}/>
    }
    render(){
        return(
            <some>
                <div className="page-title">
                    <h3 className="title">Опрос {this.state.title}</h3>
                </div>
                {/*{Object.keys(this.state.question).map((k,index) => <Question key={} text={this.state.question['text']} answers={this.state.question['answers']}/>)}*/}
                {this.state.content.map((item)=> this.renderQuestion(item))}
                {/*<Question content={this.state.content}/>*/}
            </some>
        );
    }
}
export default StartScript;