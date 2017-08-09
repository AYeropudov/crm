import React, {Component} from 'react';

class Client extends Component{
    render(){
        return(
            <div className="col-md-4">
            <div className="panel">
                <div className="panel-body p-t-10">
                    <div className="media-main">
                        <div className="pull-right btn-group-sm">
                            <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                <i className="fa fa-pencil"></i>
                            </a>
                            <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                <i className="fa fa-close"></i>
                            </a>
                        </div>
                        <div className="info">
                            <h4>{this.props.title}</h4>
                            <p>{this.props.phone}</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <hr />
                        <ul className="social-links list-inline p-b-10">
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a>
                            </li>
                            <li>
                                <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Message"><i className="fa fa-envelope-o"></i></a>
                            </li>
                        </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Client;