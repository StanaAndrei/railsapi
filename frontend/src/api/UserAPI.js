import CookieManager from "../utils/CookieManager";
import { axiosAuthInstanceToAPI, axiosInstanceToAPI } from "../utils/APIUtils";

export default class UserAPI {
    static async register({ username, email, password, passwordConf }) {
        const { data } = await axiosInstanceToAPI.post('users', {
            username, email, password, password_confirmation: passwordConf,
        })
        return data;
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

    static async update(id, { username, email, password, passwordConf }) {
        await axiosAuthInstanceToAPI.patch(`/users/${id}`, {
            username, email, password, password_confirmation: passwordConf,
        })
    }

    static delete(id) {
        axiosAuthInstanceToAPI.delete(`/users/${id}`).then(res => {
            if (res.status === 200) {
                alert('user deleted!');
                window.location.reload();
            }
        }, err => {
            alert('error!');
            console.error(err);
        })
    }

    static async getUserData(id) {
        const res = await axiosAuthInstanceToAPI.get(`/users/${id}`);
        return res?.data;
    }

    static async getUserDataFromJwtReq() {
        const res = await axiosAuthInstanceToAPI.get('/users/me');
        return res?.data;
    }

    static isLoggedIn() {
        return CookieManager.getCookie('jwt') != null;
    }
}