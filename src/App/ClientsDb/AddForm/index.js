import React, {Component} from 'react';
import FormValidator from "../../FormValidator";
import axios from 'axios';

class ErrorField extends Component{
    render(){
        return(
            <label id="cname-error" className="error" formTarget={this.props.target}>{this.props.error}</label>
        )
    }
}

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            submitButtonState: true,
            inputs: {
                titleInput: '',
                contactInput: '',
                regionInput: '',
                cityInput: '',
                phoneInput: '',
                emailInput: ''
            },
            states: {
                titleInput: false,
                contactInput: false,
                regionInput: false,
                cityInput: false,
                phoneInput: false,
                emailInput: false
            },
            validators: {
                titleInput: 'empty',
                contactInput: 'empty',
                regionInput: 'empty',
                cityInput: 'empty',
                phoneInput: 'empty',
                emailInput: 'email'
            }
        };
        this.validateFormBeforeSubmit = this.validateFormBeforeSubmit.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.blurInput = this.blurInput.bind(this);
    }

    validateFormBeforeSubmit(){
        let validator = new FormValidator();
        let statesInputs = this.state.states;
        let values = this.state.inputs;
        let validators = this.state.validators;
        let invalid = false;
        Object.keys(statesInputs).map((key, index) => {
            let result = validator.validate(values[key], validators[key]);
            if(!result) { invalid = true;}
            statesInputs[key] = !result;
            return true;
        });
        this.setState({states:statesInputs});
        return invalid;
    }

    submitForm(){
        if(!this.state.submitButtonState){return false;}
        let valid = this.validateFormBeforeSubmit();
        if(!valid){
            this.setState({submitButtonState:false});
            axios({
                method:'post',
                url: process.env.REACT_APP_API_HOST + 'addclient',
                responseType:'json',
                data: this.state.inputs
            })
                .then((response) => this.continue(response));
        }
    }

    continue(response){
        if(response['status'] === 202) {
            this.props.handleSuccessAdd(response.data);
        }
    }

    blurInput(event) {
        let inputsVal = this.state.inputs;
        inputsVal[event.target.id] = event.target.value;
        this.setState({inputs:inputsVal});
    }

    render(){
        return(
                <div className="col-md-12">
                    <div className="panel panel-color panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Добавление контрагента</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="form-group">
                                    <label formTarget="titleInput">Название</label>
                                    <input type="text" className="form-control" id="titleInput" placeholder="Введите наименование контрагента" onBlur={this.blurInput}/>
                                    {this.state.states.titleInput ? <ErrorField target="titleInput" error="Поле не может быть пустым"/>: ''}
                                </div>
                                <div className="form-group">
                                    <label formTarget="contactInput">Контакт</label>
                                    <input type="text" className="form-control" id="contactInput" placeholder="Контактное лицо" onBlur={this.blurInput} />
                                    {this.state.states.contactInput ? <ErrorField target="contactInput" error="Поле не может быть пустым"/>: ''}
                                </div>
                                <div className="form-group">
                                    <label formTarget="regionInput">Регион</label>
                                    <input type="text" className="form-control" id="regionInput" placeholder="Регион" onBlur={this.blurInput} />
                                    {this.state.states.regionInput ? <ErrorField target="regionInput" error="Поле не может быть пустым"/>: ''}
                                </div>
                                <div className="form-group">
                                    <label formTarget="cityInput">Город</label>
                                    <input type="text" className="form-control" id="cityInput" placeholder="Город" onBlur={this.blurInput} />
                                    {this.state.states.cityInput ? <ErrorField target="cityInput" error="Поле не может быть пустым"/>: ''}
                                </div>
                                <div className="form-group">
                                    <label formTarget="phoneInput">Телефон</label>
                                    <input type="text" className="form-control" id="phoneInput" placeholder="Телефон" onBlur={this.blurInput} />
                                    {this.state.states.phoneInput ? <ErrorField target="phoneInput" error="Поле не может быть пустым"/>: ''}
                                </div>
                                <div className="form-group">
                                    <label formTarget="emailInput">Адрес e-mail</label>
                                    <input type="email" className="form-control" id="emailInput" placeholder="E-mail" onBlur={this.blurInput} />
                                    {this.state.states.emailInput ? <ErrorField target="emailInput" error="Введите корректный адрес электронной почты"/>: ''}
                                </div>
                                <button type="button" onClick={this.submitForm} className={this.state.submitButtonState? "btn btn-purple":"disabled btn btn-purple"}>Добавить</button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
export default AddForm;