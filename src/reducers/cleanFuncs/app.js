import {List, Map} from "immutable";

export function toggleAside(state) {
    return state.updateIn(['asideCollapsed'], collapsed => !collapsed);
}

export function selectMenu(state, selected) {

    if(selected.get('parent')){
        let preState = state.updateIn(['aside'], itms => itms.map(itm => itm.update('active', active => false)));
        preState = preState.updateIn(['aside'], itms => itms.map(itm => itm.update('sub', sub => sub.map(s => s.update('active', activeSub => false)))));
        preState = preState.updateIn(['aside',selected.get('parent'), 'active'], active => true);
        return preState.updateIn(['aside',selected.get('parent'), 'sub', selected.get('target'), 'active'], active => true);
    }
    if(state.get('aside').get(selected.get('target')).get('type') === 'simple'){
        let preState = state.updateIn(['aside'], itms => itms.map(itm => itm.update('active', active => false)));
        preState = preState.updateIn(['aside'], itms => itms.map(itm => itm.update('sub', sub => sub.map(s => s.update('active', activeSub => false)))));
        return preState.updateIn(['aside',selected.get('target'), 'active'], active => true);
    }
    return state.updateIn(['aside',selected.get('target'), 'active'], active => true);
}