import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
class ErrorAlert extends PureComponent {
    render() {
        return (
            <errors>
                <SweetAlert
                    show={this.props.api.get('request_404')}
                    title="Что-то пошло не так..."
                    text="Ресурс на удаленном сервере не найден...Обратитесь в поддержку"
                    type="error"
                    button="ОК"
                    onConfirm={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_404'})
                        })
                    }}
                    onCancel={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_404'})
                        })
                    }}
                    onEscapeKey={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_404'})
                        })
                    }}
                />
                <SweetAlert
                    show={this.props.api.get('request_401')}
                    title="Что-то пошло не так..."
                    text="Действие требует авторизации. Пожалуйста, войдите, используя форму логина"
                    type="error"
                    button="ОК"
                    onConfirm={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_401'})
                        })
                    }}
                    onCancel={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_401'})
                        })
                    }}
                    onEscapeKey={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_401'})
                        })
                    }}
                />
                <SweetAlert
                    show={this.props.api.get('request_405')}
                    title="Что-то пошло не так..."
                    text="Удаленный сервер не может выполнить это действие. Обратитесь в службу поддержки"
                    type="error"
                    button="ОК"
                    onConfirm={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_405'})
                        })
                    }}
                    onCancel={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_405'})
                        })
                    }}
                    onEscapeKey={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_405'})
                        })
                    }}
                />
                <SweetAlert
                    show={this.props.api.get('request_400')}
                    title="Что-то пошло не так..."
                    text="Сервис временно не доступен, попробуйте повторить действие позже."
                    type="error"
                    button="ОК"
                    onConfirm={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_400'})
                        })
                    }}
                    onCancel={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_400'})
                        })
                    }}
                    onEscapeKey={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_400'})
                        })
                    }}
                />
                <SweetAlert
                    show={this.props.api.get('request_500')}
                    title="Что-то пошло не так..."
                    text="ВНИМАНИЕ! Обнаружена поломка! Срочно сообщите админимстрации ресурса!"
                    type="error"
                    button="ОК"
                    onConfirm={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_500'})
                        })
                    }}
                    onCancel={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_500'})
                        })
                    }}
                    onEscapeKey={() => {
                        this.props.dispatch(dispatch => {
                            dispatch({type: 'HIDE_ERROR_500'})
                        })
                    }}
                />
            </errors>
        )
    }
}

function mapStoreToProps(store) {
    return store.errors.toObject();
}

export default connect(mapStoreToProps)(ErrorAlert);