import CookieManager from "../utils/CookieManager";
import { axiosAuthInstanceToAPI, axiosInstanceToAPI } from "../utils/APIUtils";

export default class UserAPI {
    static async register({ username, email, password, passwordConf }) {
        const { data } = await axiosInstanceToAPI.post('users', {
            username, email, password, password_confirmation: passwordConf,
        })
        return data;
    }

    static async login(email, password) {
        const { data } = await axiosInstanceToAPI.post('/auth/login', {
            email, password
        });
        return data;
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

    static async getAllUSers() {
        const {data} = await axiosAuthInstanceToAPI.get('/users');
        return data;
    }
}