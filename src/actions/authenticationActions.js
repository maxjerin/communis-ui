import axios from 'axios';
import {GLOBAL_CONSTANT} from '../utils/constants';
import Cookies from 'js-cookie'

export function authenticateUser(username,password) {
    return function(dispatch) {
        axios({
            method: 'post',
            url: GLOBAL_CONSTANT.ENDPOINTS.AUTH,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                username: username,
                password: password
            }
        })
            .then((response) => {
               Cookies.set(GLOBAL_CONSTANT.Cookie,response.data.token)
               dispatch({type: 'AUTHENTICATE_USER_FULFILLED', payload: response.data.token})
            })
            .catch((err) => {
                if(err.response && err.response.status ==401){

                }
                dispatch({type: "AUTHENTICATE_USER_REJECTED", payload: err})
            })
    }
}
