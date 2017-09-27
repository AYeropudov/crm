import React, { PureComponent } from 'react';
import NavbarVelonic from './Navbar';
import {connect} from "react-redux";
class Logo extends PureComponent{

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


class Aside extends PureComponent {

    render(){
        let classSide = "left-panel";
        if(!this.props.asideCollapsed){
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
function mapStoreToProps(store) {
    return store.app.toObject();
}
export default connect(mapStoreToProps)(Aside);
