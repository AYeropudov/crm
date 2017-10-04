import {List, Map, fromJS} from 'immutable';

export function refs(state = Map({references:List(), types:List()}), action) {
    switch(action.type){
        case 'GET_REFERENCES':
            return state.merge(fromJS(action.data));
        case 'ADD_REFERENCE':
            return state;
    }
    return state;
}