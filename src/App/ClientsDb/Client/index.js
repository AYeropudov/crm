import React, {Component} from 'react';

class Client extends Component{
    render(){
        return(
            <div className="col-md-6">
            <div className="panel panel-color panel-primary">
                <div className="panel-heading">
                    <h4 className="panel-title">{this.props.title}</h4>
                </div>
                <div className="panel-body p-t-10">
                    <div className="media-main">
                        <div className="info">
                            <p>Тел. {this.props.phone}</p>
                            <p>Контакт: {this.props.contact}</p>
                            <p>E-mail: {this.props.email}</p>
                            <button className="btn btn-block btn-md btn-primary" id={this.props.clientId} onClick={this.props.handleAttempt} >Выбрать</button>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            </div>
        )
    }
}

export default Client;