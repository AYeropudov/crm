import React, {Component} from 'react';
import NavItem from '../NavItems/Item';
import NavItemSub from "../NavItems/ItemSub";
import {connect} from "react-redux";

class NavbarVelonic extends Component {

    renderNested(obj) {
        return (
            <NavItemSub identity={obj.get('key')} {...obj.toObject()}/>
        );
    }

    renderSimple(obj) {
        return (
            <NavItem identity={obj.get('key')} {...obj.toObject()}/>
        )
    }

    renderListMenu(item) {
        if (item.get('type') === 'nested') {
            return this.renderNested(item);
        }
        return this.renderSimple(item);
    }

    render() {
        let {menus} = this.props;
        return (
            <nav className="navigation">
                <ul className="list-unstyled">
                    {menus.map(itm => this.renderListMenu(itm))}
                </ul>
            </nav>
        )
    }
}

function mapStoreToProps(store) {
    return {menus: store.app.get('aside')};
}
export default connect(mapStoreToProps)(NavbarVelonic);