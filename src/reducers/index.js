import {combineReducers} from 'redux';
import {app} from "./app";
import {refs} from "./references";
import {errors} from "./errors"
const globalReducer = combineReducers({app, refs, errors});

export default globalReducer;