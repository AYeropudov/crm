import {CALL_API} from '../middlewares/api';

export function getReferences() {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                request: {
                    url: '/references',
                    params: {},
                    method: "get"
                },
                type: "GET_REFERENCES"
            }
        });
    }
}

export function addReference(reference) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                request: {
                    url: '/references',
                    params: {},
                    post: reference,
                    method: "post"
                },
                type: "ADD_REFERENCE",
                dispatch: {
                    [CALL_API]: {
                        request: {
                            url: '/references',
                            params: {},
                            method: "get"
                        },
                        type: "GET_REFERENCES"
                    }
                }
            }
        })
    };
}

export function putReference(reference) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                request: {
                    url: '/references/'+reference._id,
                    params: {},
                    post: reference,
                    method: "put"
                },
                type: "PUT_REFERENCE",
                dispatch: {
                    [CALL_API]: {
                        request: {
                            url: '/references',
                            params: {},
                            method: "get"
                        },
                        type: "GET_REFERENCES"
                    }
                }
            }
        })
    };
}

export function addReferenceType(reference) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                request: {
                    url: '/references-types',
                    params: {},
                    post: reference,
                    method: "post"
                },
                type: "ADD_REFERENCE_TYPE",
                dispatch: {
                    [CALL_API]: {
                        request: {
                            url: '/references',
                            params: {},
                            method: "get"
                        },
                        type: "GET_REFERENCES"
                    }
                }
            }
        })
    };
}

export function putReferenceType(reference) {
    return dispatch => {
        dispatch({
            [CALL_API]: {
                request: {
                    url: '/references-type/'+reference._id,
                    params: {},
                    post: reference,
                    method: "put"
                },
                type: "PUT_REFERENCE_TYPE",
                dispatch: {
                    [CALL_API]: {
                        request: {
                            url: '/references',
                            params: {},
                            method: "get"
                        },
                        type: "GET_REFERENCES"
                    }
                }
            }
        })
    };
}