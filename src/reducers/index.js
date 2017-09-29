import {combineReducers} from 'redux';
import {app} from "./app";
import {references} from "./references";
import {errors} from "./errors"
const globalReducer = combineReducers({app, references, errors});

export default globalReducer;