import axios from "axios";
import CookieManager from "./CookieManager";

export const host = 'localhost';
export const hostWithPort = `${host}:3001`;
export const baseHttpURL = `http://${hostWithPort}`;
export const baseURLPref = `${baseHttpURL}`;
export const baseWsURL = `ws://${hostWithPort}`;
const timeout = 30000e3;

export const axiosInstanceToAPI = axios.create({
    baseURL: baseURLPref,
    timeout,
});

export const axiosAuthInstanceToAPI = axios.create({
    baseURL: baseURLPref,
    timeout,
    headers: {
        Authorization: CookieManager.getCookie('jwt')
    }
});