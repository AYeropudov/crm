import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import {HashRouter, Route} from 'react-router-dom'
import Client from "./Client";
import AddForm from "./AddForm";
import axios from "axios";

class ClientsDb extends Component{
    constructor(props){
        super(props);
        this.state = {showModalAddClient: false, clientsDb:[]};
        axios({
            method:'get',
            url: process.env.REACT_APP_API_HOST + 'getclientslist',
            responseType:'json'
        })
            .then((response) => this.setDb(response.data));
        this.showAddNewClientModal = this.showAddNewClientModal.bind(this);
        this.closeAddNewClientModal = this.closeAddNewClientModal.bind(this);
        this.handleSuccessAdd = this.handleSuccessAdd.bind(this);
        this.startAttemptForClient = this.startAttemptForClient.bind(this);
    }

    setDb(date){
        this.setState(prevState => ({
            clientsDb: date
        }));
        // this.setState({clientsDb:date});
    }

    showAddNewClientModal(event)
    {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showModalAddClient: true});
    }

    handleSuccessAdd(data){
        let db = this.state.clientsDb.concat([data]);
        // console.log(db);
        this.setDb(db);
        this.setState({showModalAddClient: false});
    }

    updateDb(newclient){
        let db = this.state.clientsDb.concat([newclient]);
        this.setDb(db);
    }

    closeAddNewClientModal(event)
    {
        this.setState({showModalAddClient: false});
    }

    startAttemptForClient(event){
        axios({
            method:'post',
            url: process.env.REACT_APP_API_HOST + 'createattempt',
            responseType:'json',
            data: {client_id: event.target.id, script_id: this.props.scriptId}
        }).
            then((response) => this.startAttempt(response));
    }

    startAttempt(response){
        if(response.status===202){
            window.location='/#startattempt/'+response.data.id;
        }
    }

    render(){
        return(
            <div className="wraper container-fluid" style={{backgroundColor:"#edf0f0"}}>
                <button onClick={this.showAddNewClientModal}>TEST</button>
                <div className="row">
                    {this.state.clientsDb.map((item)=>
                    <Client handleAttempt={this.startAttemptForClient} title={item.title} name={item.contact} email={item.email} phone={item.phone} key={item.id} clientId={item.id}/>)}
                </div>
                <Modal backdrop="static" show={this.state.showModalAddClient} onHide={this.closeAddNewClientModal}>
                    <Modal.Body>
                        <AddForm handleSuccessAdd = {this.handleSuccessAdd}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeAddNewClientModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ClientsDb;