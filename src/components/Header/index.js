import React, {Component, PropTypes} from 'react';
import SearchForm from "./SearchForm";
import LeftBar from "./LeftBar";
import RigthBar from "./RightBar";

class Header extends Component{
    constructor(props){
        super(props);
    }
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
    handleCollapseSide: React.PropTypes.func
}
export default Header;