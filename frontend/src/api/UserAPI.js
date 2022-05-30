import CookieManager from "../utils/CookieManager";
import { axiosAuthInstanceToAPI, axiosInstanceToAPI } from "../utils/APIUtils";

export default class UserAPI {
    static register(username, email, password, passwordConf) {
        axiosInstanceToAPI.post('users', {
            username, email, password, password_confirmation: passwordConf,
        }).then(({ data }) => {
            CookieManager.setCookie('jwt', data.jwt);
            window.location.assign('/');
        }, err => {
            console.error(err);
        }).catch(err => {
            console.warn(err);
            alert('error!');
        })
    }

    static login(email, password) {
        axiosInstanceToAPI.post('/auth/login', {
            email, password
        }).then(({ data }) => {
            CookieManager.setCookie('jwt', data.jwt);
            window.location.assign('/');
        }, err => {
            alert('wrong login data');
            console.error(err);
        })
    }

    static update(username, email, password, passwordConf) {
        axiosAuthInstanceToAPI.patch('/users/update', {
            username, email, password, password_confirmation: passwordConf,
        }).then(({ data }) => {
            window.location.assign('/profile');
        }, err => {
            alert('error');
            console.error(err);
        })
    }

    static async getUserDataFromJwtReq() {
        const res = await axiosAuthInstanceToAPI.get('/users/me');
        return res?.data;
    }

    static isLoggedIn() {
        return CookieManager.getCookie('jwt') != null;
    }
}