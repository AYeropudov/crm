import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {seen:false, active:false};

    }

    renderTime(){
        return '10 minutes';
    }

    render(){
        return(
            <li>
                <a href="">
                    <span className="pull-left"><img src={this.props.Avatar} className="img-circle thumb-sm m-r-15" alt="img" /></span>
                    <span className="block"><strong>{this.props.Title}</strong></span>
                    <span className="media-body block">{this.props.Body}<br/><small className="text-muted">{this.renderTime} ago</small></span>
                </a>
            </li>
        );
    }
}
Message.PropTypes = {
    Avatar: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Body: PropTypes.string.isRequired
}
class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {active:false,messages:[1,2,3,4,5]};
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
                    <a data-toggle="dropdown" className="dropdown-toggle" href="">
                        <i className="fa fa-envelope-o"></i>
                        <span className="badge badge-sm up bg-purple count">{this.state.messages.length}</span>
                    </a>
                    <ul className="dropdown-menu extended fadeInUp animated nicescroll" tabIndex="5001">
                        <li>
                            <p>Messages</p>
                        </li>
                        <Message Avatar="/static/img/avatar-2.jpg" Title="John smith" Body="New tasks needs to be done"/>
                        <Message Avatar="/static/img/avatar-3.jpg" Title="John Dhoe" Body="New tasks needs to be done"/>
                        <Message Avatar="/static/img/avatar-4.jpg" Title="John Y" Body="New tasks needs to be done"/>
                        <li>
                            <p><a href="inbox.html" className="text-right">See all Messages</a></p>
                        </li>
                    </ul>
                </li>
        );
    }
}

export default Messages;