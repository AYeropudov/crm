import React, { PureComponent} from 'react';
import {selectMenu} from "../../../../actions/appActions";
import {connect} from "react-redux";

class NavItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className={ this.props.active && "active" } >

                <a href={this.props.href} onClick={()=>{this.props.dispatch(selectMenu({parent:this.props.parentKey, target:this.props.identity}))}}>
                    {this.props.icon && <i className={this.props.icon}></i>}
                    {this.props.icon && <span className="nav-label">{this.props.label}</span>}
                    {!this.props.icon && this.props.label}
                </a>
            </li>
        )
    }
}
function mapStoreToProps(store) {
    return {};
}
export default connect(mapStoreToProps)(NavItem);
