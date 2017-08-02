import React, {Component, PropTypes} from 'react';
import Messages from "./Messages";
import Notifications from "./Notifications";
import UserBar from "./UserBar";

class RigthBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul className="list-inline navbar-right top-menu top-right-menu">
                <Messages/>
                <Notifications/>
                <UserBar/>
            </ul>
        );
    }
}

export default RigthBar;