import React, {Component} from 'react';

class ScriptElement extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.title}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget-panel widget-style-2 bg-pink">
                                        <i className="ion-help-circled"></i>
                                        <h2 className="m-0 counter">{this.props.countQuestions}</h2>
                                        <div>Вопроса</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ScriptElement;