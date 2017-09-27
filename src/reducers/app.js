import {List, Map} from 'immutable';
import {toggleAside, selectMenu} from "./cleanFuncs/app";

const aside = Map({
    m1: Map({
        href:'#dashboard',
        key:'m1',
        icon: "ion-home",
        label: "Dashboard",
        type: "simple",
        active: false,
        parentKey: false,
        sub: Map()
    }),
    m2: Map({
        href:'#',
        key:'m2',
        icon: "ion-flask",
        label: "LAB",
        type: "nested",
        active: false,
        parentKey: false,
        sub: Map({
            smenu1: Map({
                href:'#scripts',
                key:'smenu1',
                icon: "",
                label: "Скрипты",
                type: "simple",
                active: false,
                parentKey:"m2"
            })
            ,
            smenu2: Map({
                href:'#',
                key:'smenu2',
                icon: "",
                label: "Sub2",
                type: "simple",
                active: false,
                parentKey:"m2"
            })
        })
    }),
    m3: Map({
        href:'#',
        key:'m3',
        icon: "ion-settings",
        label: "Свойства",
        type: "nested",
        active: false,
        parentKey: false,
        sub:Map({
            smenu4: Map({
                href:'#dictionaries',
                key:'smenu4',
                icon: "",
                label: "Справочники",
                type: "simple",
                active: false,
                parentKey:"m3"
            })
        })
    }),
});

export function app(state=Map({
    asideCollapsed:false,
    aside:aside
}), action) {
    switch (action.type){
        case "TOGGLE_ASIDE":
            return toggleAside(state);
        case "SELECT_MENU":
            return selectMenu(state, action.selected)
    }
    return state;
}