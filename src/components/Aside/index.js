import React, { Component } from 'react';
import NavbarVelonic from './Navbar';
class Logo extends Component{

    render(){
        return(
            <div className="logo">
                <a href="/" className="logo-expanded">
                    <img src="/static/img/single-logo.png" alt="logo" />
                    <span className="nav-label">Velonic</span>
                </a>
            </div>
        )
    }
}


class Aside extends Component {

    render(){
        let classSide = "left-panel";
        if(!this.props.collapsed){
            classSide += " collapsed";
        }
        return(
        <aside style={{overflow:"hidden"}} className={classSide}>
            <Logo/>
            <NavbarVelonic/>
        </aside>
        )
    }
}

export default Aside;