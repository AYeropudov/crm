import {Map, fromJs} from "immutable";
import {show400, hide400, show401, hide401, show404, hide404, show405, hide405, show500, hide500} from "./cleanFuncs/errors";

const errorsInit = Map({
    api: Map({
        connection:false,
        request_400: false,
        request_404: false,
        request_500:false,
        request_401:false
    }),
    references:Map({
        edit: false,
        remove: false,
        add: false
    })
});

export function errors(state=errorsInit, action){
    switch(action.type){
        case "API_ERROR_404":
            return show404(state);
        case "API_ERROR_400":
            return show400(state);
        case "API_ERROR_401":
            return show401(state);
        case "API_ERROR_405":
            return show405(state);
        case "API_ERROR_500":
            return show500(state);
        case "HIDE_ERROR_404":
            return hide404(state);
        case "HIDE_ERROR_400":
            return hide400(state);
        case "HIDEERROR_401":
            return hide401(state);
        case "HIDE_ERROR_405":
            return hide405(state);
        case "HIDE_ERROR_500":
            return hide500(state);
    }
    return state;
}