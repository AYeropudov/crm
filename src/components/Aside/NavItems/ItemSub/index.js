import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from '../Item';
import {selectMenu} from "../../../../actions/appActions";
import {connect} from "react-redux";

class NavItemSub extends Component{

    render(){
        let classesMain = "has-submenu";

        if (this.props.active){
            classesMain +=' active';
        }
        return(
            <li className={ classesMain }>
                <a onClick={()=>(this.props.dispatch(selectMenu({parent:this.props.parentKey, target:this.props.identity})))}>
                    <i className={this.props.icon}></i>
                    <span className="nav-label">{this.props.label}</span>
                </a>
                <ul className="list-unstyled">
                    {this.props.sub.toArray().map(itm => <NavItem identity={itm.get('key')} {...itm.toObject()}/>)}
                </ul>
            </li>
        )
    }
}
function mapStoreToProps(store) {
    return {};
}
export default connect(mapStoreToProps)(NavItemSub);

