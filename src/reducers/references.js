import {List, Map} from 'immutable';

export function references(state = Map(), action) {
    switch(action.type){
        case 'GET_REFERENCES':
            return state;
    }
    return state;
}