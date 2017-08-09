import React, {Component} from 'react';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
class LeftBar extends Component{

    render(){
        return(
            <nav className=" navbar-default hidden-xs">
                <ul className="nav navbar-nav">
                    <NavDropdown title="English" id="nav-dropdown">
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                    </NavDropdown>
                    <li><a href="">Files</a></li>
                    <li><a href="../frontend/" target="_blank">Frontend</a></li>
                </ul>
            </nav>
        );
    }
}

export default LeftBar;