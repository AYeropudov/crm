import React,{Component, PropTypes} from 'react';

class UserBar extends Component{
    constructor(props){
        super(props);
        this.state = {active:false};
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
        let classLi = 'dropdown text-center';
        if(this.state.active){
            classLi +=' open';
        }
        return(
            <li className={classLi}  onClick={this.handleOpenMessageBox} onBlur={this.handleFocus}>
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <img alt="" src="/static/img/avatar-2.jpg" className="img-circle profile-img thumb-sm" />
                        <span className="username">John Deo </span> <span className="caret"></span>
                </a>
                <ul className="dropdown-menu extended pro-menu fadeInUp animated" tabIndex="5003" style={{overflow: "hidden", outline: "none"}}>
                    <li><a href="profile.html"><i className="fa fa-briefcase"></i>Profile</a></li>
                    <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                    <li><a href="#"><i className="fa fa-bell"></i> Friends <span className="label label-info pull-right mail-info">5</span></a></li>
                    <li><a href="#"><i className="fa fa-sign-out"></i> Log Out</a></li>
                </ul>
            </li>
        );
    }
}

export default UserBar;