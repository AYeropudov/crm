import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import LeftBar from "./LeftBar";
import RigthBar from "./RightBar";
import {connect} from "react-redux";
import {toggleAside} from "../../actions/appActions";

class Header extends PureComponent{

    render(){
        return(
            <header className="top-head container-fluid">
                <button type="button" className="navbar-toggle pull-left" onClick={() =>{this.props.dispatch(toggleAside())}}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <SearchForm/>
                <LeftBar/>
                <RigthBar/>
            </header>
        )

    }
}
Header.propTypes ={
}
function mapStoreToProps(store) {
    return {...store.app};
}
export default connect(mapStoreToProps)(Header);