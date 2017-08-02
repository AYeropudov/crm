import React, { Component , PropTypes} from 'react';

class NavItem extends Component{

    constructor(props) {
        super(props);
        this.state = props.data;
    }

    render(){
        let classesMain = "";

        if (this.state.active){
            classesMain +=' active';
        }

        return(
            <li className={ classesMain } >
                <a href={this.state.href} onClick={()=>this.props.onClickHandle(this.state.key, this.state.parentKey)}>
                    <i className={this.state.icon}></i>
                    <span className="nav-label">{this.state.label}</span>
                </a>
            </li>
        )
    }
}
NavItem.propTypes= {
    onClickHandle: PropTypes.func
};
export default NavItem;
