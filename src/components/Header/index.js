import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchForm from "./SearchForm";
import LeftBar from "./LeftBar";
import RigthBar from "./RightBar";

class Header extends Component{

    render(){
        return(
            <header className="top-head container-fluid">
                <button type="button" className="navbar-toggle pull-left" onClick={this.props.handleCollapseSide}>
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
    handleCollapseSide: PropTypes.func.isRequired
}
export default Header;