import React, {Component} from 'react';
class GraphComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            answers:[],
            graph:{nodes:[], edges:[]},
        }

    }


    setGraph(data){
        this.setState({graph:{nodes:data.nodes, edges:data.edges}});
    }

    setAnswers(data){
        this.setState({answers:data});
    }
    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="portlet">
                        <div className="portlet-heading">
                            <h3 className="portlet-title text-dark text-uppercase">
                                Website Stats
                            </h3>
                            <div className="portlet-widgets">
                                <a href="" data-toggle="reload"><i className="ion-refresh"></i></a>
                                <span className="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i className="ion-minus-round"></i></a>
                                <span className="divider"></span>
                                <a href="" data-toggle="remove"><i className="ion-close-round"></i></a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div id="portlet1" className="panel-collapse collapse in">
                            <div className="portlet-body">
                                <div className="row">
                                    <div className="col-md-12">
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