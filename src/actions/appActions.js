import {Map, List, fromJS} from "immutable";
export function toggleAside() {
    return dispatch => {
        dispatch({type:"TOGGLE_ASIDE"})
    }
}

export function selectMenu(selected = {}) {
    return dispatch => {
        dispatch({type:"SELECT_MENU",selected:fromJS(selected)})
    };
}