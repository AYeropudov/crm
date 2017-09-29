import {Map, fromJs} from "immutable";

const errorsInit = Map({
    api: Map({
        connection:false,
        request400: false,
        request404: false,
        request500:false,
        request401:false
    }),
    references:Map({
        edit: false,
        remove: false,
        add: false
    })
});

export function errors(state=errorsInit, action){
    switch(action.type){
        case "API_ERROR":
            return state.updateIn(['api', 'request_'+ action.status], e => true);
        case "ADD_REFERENCE":
            return state;
    }
    return state;
}