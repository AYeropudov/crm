import {CALL_API} from '../middlewares/api';
export function getReferences() {
    return dispatch => {
        dispatch({[CALL_API]:{request:{
            url:'/references',
            params:{},
            method:"get"
        },
            type: "GET_REFERENCES"
        }});
    }
}