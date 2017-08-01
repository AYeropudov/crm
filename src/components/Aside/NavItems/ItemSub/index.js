import React, { Component, PropTypes } from 'react';
import NavItem from '../Item';
class NavItemSub extends Component{

    constructor(props) {
        super(props);
        this.state = props.data
    }

    render(){
        let classesMain = "";

        if (this.state.active){
            classesMain +=' active';
        }
        return(
            <li className={ classesMain }>
                <a href="#" onClick={()=>this.props.onClickHandle(this.state.key, this.state.parentKey)}>
                    <i className={this.state.icon}></i>
                    <span className="nav-label">{this.state.label}</span>
                </a>
                <ul className="list-unstyled">
                    {Object.keys(this.state.sub).map((k,index)=><NavItem onClickHandle={this.props.onClickHandle} key={this.state.sub[k]['key']} data={this.state.sub[k]}/>)}
                </ul>
            </li>
        )
    }
}
NavItemSub.propTypes= {
    onClickHandle: PropTypes.func
};
export default NavItemSub;

