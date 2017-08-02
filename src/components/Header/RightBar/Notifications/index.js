import React, {Component, PropTypes} from 'react';

class Notification extends Component{
    constructor(props){
        super(props);
        this.state = {seen:false, active:false};

    }


    renderTime(){
        return '10 minutes';
    }

    render(){
        let iconClass='fa fa-2x ';
        iconClass += this.props.Icon;
        return(
            <li>
                <a href="#">
                    <span className="pull-left">
                        <i className={iconClass}></i>
                    </span>
                    <span>{this.props.Body}<br/><small className="text-muted">{this.renderTime()} minutes ago</small></span>
                </a>
            </li>
        );
    }
}
Notification.PropTypes = {
    Icon: React.PropTypes.string,
    Body: React.PropTypes.string
}
class Notifications extends Component{
    constructor(props){
        super(props);
        this.state = {active:false,notifications:[1,2,3]};
        this.handleOpenMessageBox = this.handleOpenMessageBox.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleOpenMessageBox(){
        let stateActive = (!this.state.active);
        this.setState({active:stateActive});
    }

    handleFocus(){
        let stateActive = (!this.state.active);
        this.setState({active:stateActive});
    }

    render(){
        let classLi = 'dropdown';
        if(this.state.active){
            classLi +=' open';
        }
        return(
                <li className={classLi} onClick={this.handleOpenMessageBox} onBlur={this.handleFocus}>
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge badge-sm up bg-pink count">{this.state.notifications.length}</span>
                    </a>
                    <ul className="dropdown-menu extended fadeInUp animated nicescroll" tabIndex="5002">
                        <li className="noti-header">
                            <p>Notifications</p>
                        </li>
                        <Notification  Body="New user registered" Icon="fa-user-plus text-info"/>
                        <Notification Body="Send project demo files to client" Icon="fa-bell-o text-danger"/>
                        <Notification Body="Use animate.css" Icon="fa-diamond text-primary"/>
                        <li>
                            <p><a href="inbox.html" className="text-right">See all notifications</a></p>
                        </li>
                    </ul>
                </li>
        );
    }
}

export default Notifications;