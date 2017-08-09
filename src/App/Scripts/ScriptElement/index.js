import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ClientsDb from "./../../ClientsDb";


class ScriptElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            showSelectModalClient: false
        }
        this.selectClientModalClick = this.selectClientModalClick.bind(this);
        this.closeSelectModalClient = this.closeSelectModalClient.bind(this);
    }

    selectClientModalClick(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({showSelectModalClient: true});
    }

    closeSelectModalClient(){
        this.setState({showSelectModalClient:false});
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title"><a href={ "#script/" + this.props.id}>{this.props.title}</a></h3>
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
                            <a href="" onClick={this.selectClientModalClick}>НАЧАТЬ ОПРОС</a>
                            {/*<a href={ "#start/" + this.props.id}>НАЧАТЬ ОПРОС</a>*/}
                        </div>
                    </div>
                </div>
                <Modal bsSize="large" show={this.state.showSelectModalClient} onHide={this.closeSelectModalClient}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ClientsDb/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeSelectModalClient}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ScriptElement;