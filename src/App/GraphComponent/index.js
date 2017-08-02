import React, {Component} from 'react';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';
import Graph from 'react-graph-vis' ;
class GraphComponent extends Component{
    render(){
        let myGraph = {
            nodes:[
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
                                        <Graph graph={myGraph} options={options}/>
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