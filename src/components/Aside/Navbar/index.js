import React, {Component} from 'react';
import NavItem from '../NavItems/Item';
import NavItemSub from "../NavItems/ItemSub";

class NavbarVelonic extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            active: true,
            menus: {
                "m1": {
                    href:'#dashboard',
                    key:'m1',
                    icon: "ion-home",
                    label: "Dashboard",
                    type: "simple",
                    active: false,
                    clickHandle: this.handleItemClick,
                    parentKey: false
                },
                "m2": {
                    href:'#',
                    key:'m2',
                    icon: "ion-flask",
                    label: "LAB",
                    type: "nested",
                    active: false,
                    parentKey: false,
                    sub: {
                        'smenu1': {
                            href:'#question',
                            key:'smenu1',
                            icon: "",
                            label: "Question GraphComponent",
                            type: "simple",
                            active: false,
                            parentKey:"m2"
                        },
                        'smenu2': {
                            href:'#scripts',
                            key:'smenu2',
                            icon: "",
                            label: "Скрипты",
                            type: "simple",
                            active: false,
                            parentKey:"m2"
                        },
                        'smenu3': {
                            href:'#',
                            key:'smenu3',
                            icon: "",
                            label: "Sub2",
                            type: "simple",
                            active: false,
                            parentKey:"m2"
                        }
                    }

                }
            }

        }
    }

    handleItemClick(key, parentKey=false) {
        let subs = this.state.menus;
        Object.keys(subs).map(function (key, index) {
              subs[key].active=false;
              if(subs[key].type === 'nested'){
                  Object.keys(subs[key].sub).map(function (j, i) {
                      subs[key].sub[j].active=false;
                      return true;
                  })
              }
              return true;
        });
        if(!parentKey) {
            subs[key].active = true;
        } else {
            subs[parentKey].active = true;
            subs[parentKey].sub[key].active= true;
        }
        this.setState({menus:subs});
    }

    renderNested(obj) {
        return (
            <NavItemSub onClickHandle={this.handleItemClick} key={obj.key} data={obj}/>
        );
    }

    renderSimple(obj) {
        return (
            <NavItem onClickHandle={this.handleItemClick} key={obj.key} data={obj}/>
        )
    }

    renderListMenu(item) {
        if (item.type === 'nested') {
            return this.renderNested(item);
        }
        return this.renderSimple(item);
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="list-unstyled">
                    {Object.keys(this.state.menus).map((k,index) => this.renderListMenu(this.state.menus[k]))}
                </ul>
            </nav>
        )
    }
}

export default NavbarVelonic;