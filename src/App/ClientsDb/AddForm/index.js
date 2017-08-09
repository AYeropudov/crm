import React, {Component} from 'react';

class AddForm extends Component{
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
                                    <input type="text" className="form-control" id="titleInput" placeholder="Введите наименование контрагента" />
                                </div>
                                <div className="form-group">
                                    <label formTarget="contactInput">Контакт</label>
                                    <input type="text" className="form-control" id="contactInput" placeholder="Контактное лицо" />
                                </div>
                                <div className="form-group">
                                    <label formTarget="regionInput">Регион</label>
                                    <input type="text" className="form-control" id="regionInput" placeholder="Регион" />
                                </div>
                                <div className="form-group">
                                    <label formTarget="cityInput">Город</label>
                                    <input type="text" className="form-control" id="cityInput" placeholder="Город" />
                                </div>
                                <div className="form-group">
                                    <label formTarget="phoneInput">Телефон</label>
                                    <input type="text" className="form-control" id="phoneInput" placeholder="Телефон" />
                                </div>
                                <button type="submit" className="btn btn-purple">Добавить</button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
export default AddForm;