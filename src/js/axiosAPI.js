import axios from 'axios';
const serverDomain = (process.env.NODE_ENV === 'development') ? 'localhost' : 'api.primeplusglobal.com';
const serverPort = (process.env.NODE_ENV === 'development') ? '1337' : '1337';
const baseDomain = 'http://' + serverDomain + ':' + serverPort + '/';

const userRequest = axios.create({
    baseURL: baseDomain,
    responseType: 'json',
});

export const apiGET_User = (url, data) => userRequest.get(url);
export const apiPOST_User = (url, data) => userRequest.post(url, data);
export const apiDELETE_User = (url, data) => userRequest.delete(url);
