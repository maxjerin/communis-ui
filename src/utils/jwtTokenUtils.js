import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import {GLOBAL_CONSTANT} from './../utils/constants'


export function isExpired(token) {
    if (token && jwt.decode(token)) {
        const expiry = jwt.decode(token).exp;
        const now = new Date();
        return now.getTime() > expiry * 1000;
    }
    return true;
}

export function setWebCookie(token) {
    Cookies.set(GLOBAL_CONSTANT.Cookie, token, {expires: 1})
}

export function getLocalToken() {
    return Cookies.get(GLOBAL_CONSTANT.Cookie);
}

export function signoutFromWeb() {
    Cookies.remove(GLOBAL_CONSTANT.Cookie);
}

export function isValidToken(){
    let cookie = getLocalToken();
    let expired = isExpired(cookie);
    if(expired){
        signoutFromWeb();
        return false;
    }

    return true;
}
