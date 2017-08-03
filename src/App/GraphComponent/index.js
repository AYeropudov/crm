import React, {Component} from 'react';
import Graph from 'react-graph-vis' ;
import axios from 'axios'
class GraphComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            answers:[],
            graph:{nodes:[], edges:[]},
        }

        axios({
            method:'get',
            url:'http://localhost:5000/answers',
            responseType:'json'
        })
            .then((response) => this.setAnswers(response.data));
        axios({
            method:'get',
            url:'http://localhost:5000/scripts/5982f9f509531143d0c79aba',
            responseType:'json'
        })
            .then((response) => this.setGraph(response.data));


    }


    setGraph(data){
        this.setState({graph:{nodes:data.nodes, edges:data.edges}});
    }

    setAnswers(data){
        this.setState({answers:data});
    }
    render(){
        let myGraph = {
            nodes:[
                { "id": "5982cc7e09531124c4ed7289", "label": "Нет."},
                {id:"q1", label:"Question1"},
                {id:"q2", label:"Question2"},
                {id:"q3", label:"Question3"},
                {id:"q4", label:"Question4"},

                {id:"a1", label:"Answer1"},
                {id:"a2", label:"Answer2"},
                {id:"a3", label:"Answer3"},

            ],
            edges:[
                {from:"q1",to:"a1",label:"S1"},
                {from:"q1",to:"a2",label:"S2"},
                {from:"q1",to:"a3",label:"S3"},
                {from:"q2",to:"a1",label:"S7"},

                {from:"a1",to:"q2",label:"S4"},
                {from:"a2",to:"q3",label:"S5"},
                {from:"a3",to:"q4",label:"S6"}

            ]
        };
        var options = {
            layout: {
                hierarchical: true
            },
            nodes:{
                shape:'box',
                widthConstraint:{
                    minimum: 100,
                    maximum: 300,
                }
            },
            edges: {
                color: "#E63E3C"
            }
        };
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="portlet">
                        <div className="portlet-heading">
                            <h3 className="portlet-title text-dark text-uppercase">
                                Website Stats
                            </h3>
                            <div className="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></a>
                                <span className="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i className="ion-minus-round"></i></a>
                                <span className="divider"></span>
                                <a href="#" data-toggle="remove"><i className="ion-close-round"></i></a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div id="portlet1" className="panel-collapse collapse in">
                            <div className="portlet-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Graph graph={this.state.graph} options={options}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default GraphComponent;