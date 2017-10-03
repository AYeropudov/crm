import {List, Map} from "immutable";

export function showConn(state) {
    return state.updateIn(['api', 'connection'], e => true);
}

export function hideConn(state) {
    return state.updateIn(['api', 'connection'], e => false);
}

export function show404(state) {
    return state.updateIn(['api', 'request_404'], e => true);
}

export function hide404(state) {
    return state.updateIn(['api', 'request_404'], e => false);
}

export function show405(state) {
    return state.updateIn(['api', 'request_405'], e => true);
}

export function hide405(state) {
    return state.updateIn(['api', 'request_405'], e => false);
}

export function show401(state) {
    return state.updateIn(['api', 'request_401'], e => true);
}

export function hide401(state) {
    return state.updateIn(['api', 'request_401'], e => false);
}

export function show400(state) {
    return state.updateIn(['api', 'request_400'], e => true);
}

export function hide400(state) {
    return state.updateIn(['api', 'request_400'], e => false);
}

export function show500(state) {
    return state.updateIn(['api', 'request_500'], e => true);
}

export function hide500(state) {
    return state.updateIn(['api', 'request_500'], e => false);
}