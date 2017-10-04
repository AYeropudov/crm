import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import Form from "react-bootstrap/es/Form";
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";

class EditReferenceForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            ...props.state
        };
        this.save = this.save.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        // this.setState({ showModal: false });
        this.props.closeHandler();
    }

    save() {
        this.props.saveHandler(this.state);
    }

    render() {
        return(
            <Modal show={this.state.show} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактор справочника</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.state.title}</h4>
                    <Form>
                        <FormGroup controlId={"title"}>
                            <ControlLabel>Значение</ControlLabel>
                            <FormControl placeholder={"Название"} defaultValue={this.state.title} onBlur={(e) => this.setState({title:e.target.value})}/>
                        </FormGroup>
                        <FormGroup controlId={"value"}>
                            <ControlLabel>Значение</ControlLabel>
                            <FormControl placeholder={"значение"} defaultValue={this.state.value} onBlur={(e) => this.setState({value:e.target.value})}/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsClass={'btn btn-primary m-b-5 pull-left'} onClick={this.save}>Сохранить</Button>
                    <Button bsClass={'btn btn-warning m-b-5'} onClick={this.close}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
EditReferenceForm.PropTypes = {
    closeHandler: React.PropTypes.func.isRequired,
    state: React.PropTypes.object.isRequired,
    saveHandler: React.PropTypes.object.isRequired
};

export default EditReferenceForm;