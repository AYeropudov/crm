import React, {PureComponent} from 'react';
import axios from "axios";
import Question from "./Question/index";

class Attempt extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
                title: "",
                client:"",
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
    getNextQuestion(id, answer){
        let urlToScript = process.env.REACT_APP_API_HOST + "question/" + this.props.id + "/"+ answer + "/"+ id;
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
            client: data.client,
            content:[
                {
                    key: data.key,
                    text:data.text,
                    answers: data.answers
                }
            ]
        });
    }
    renderQuestion(item){
        return <Question handleAnswer={this.getNextQuestion} key={item.key} content={item}/>
    }
    render(){
        return(
            <some>
                <div className="page-title">
                    <h3 className="title">Опрос {this.state.title} для <i>{this.state.client}</i></h3>
                </div>
                {/*{Object.keys(this.state.question).map((k,index) => <Question key={} text={this.state.question['text']} answers={this.state.question['answers']}/>)}*/}
                {this.state.content.map((item)=> this.renderQuestion(item))}
                {/*<Question content={this.state.content}/>*/}
            </some>
        );
    }
}
export default Attempt;