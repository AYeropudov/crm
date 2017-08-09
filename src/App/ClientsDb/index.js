import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Client from "./Client";
import AddForm from "./AddForm";


class ClientsDb extends Component{
    constructor(props){
        super(props);
        this.state = {showModalAddClient: false};
        this.showAddNewClientModal = this.showAddNewClientModal.bind(this);
        this.closeAddNewClientModal = this.closeAddNewClientModal.bind(this);
    }

    showAddNewClientModal(event)
    {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showModalAddClient: true});
    }

    closeAddNewClientModal(event)
    {
        this.setState({showModalAddClient: false});
    }

    render(){
        return(
            <div>
                <button onClick={this.showAddNewClientModal}>TEST</button>
                <div className="row"><Client title="Вася пупкин" phone="831-41-88"/></div>
                <Modal backdrop="static" show={this.state.showModalAddClient} onHide={this.closeAddNewClientModal}>
                    <Modal.Body>
                        <AddForm/>
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