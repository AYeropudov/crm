import axios from "axios";

export const CALL_API = Symbol('Call Api');

const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_HOST,
    timeout: 2000,
    headers: {'Content-Type': 'application/json'},

});

function makeRequest(requestData) {
    switch (requestData.method){
        case "post":
            return {
                url:requestData.url,
                method:"POST",
                data:JSON.stringify(requestData.post),
                params:requestData.params,
                responseType:"json"
            };
        case "put":
            return {
                url:requestData.url,
                method:"PUT",
                data:JSON.stringify(requestData.post),
                params:requestData.params,
                responseType:"json"
            };
        case "get":
            return {
                url: requestData.url,
                method: "GET",
                params:requestData.params,
                responseType:"json",
            };
    }
}


function callApiRequest(rawData) {
    let request = makeRequest(rawData);
    return axiosInstance(request).then(response => response).catch(response => Promise.reject(response));
}

export default (store, dispatch) => next => action => {
    const RAW_DATA = action[CALL_API];
    if (typeof RAW_DATA === 'undefined') {
        return next(action)
    }

    return callApiRequest(RAW_DATA.request).then(
        response => {if(RAW_DATA.hasOwnProperty('dispatch')){return store.dispatch(RAW_DATA.dispatch)} return next({type:RAW_DATA.type, data: response.data})},
        error => next({type:(error.response === undefined)? 'API_ERROR_CONN': "API_ERROR_"+error.response.status, ...error.response})
    )
}