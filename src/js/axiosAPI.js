import axios from 'axios';
const serverDomain = (process.env.NODE_ENV === 'development') ? 'localhost' : 'api.primeplusglobal.com';
const serverPort = (process.env.NODE_ENV === 'development') ? '1337' : '1337';
const baseDomain = 'http://' + serverDomain + ':' + serverPort + '/';

// const userRequest = axios.create({
//     baseURL: baseDomain,
//     responseType: 'json',
// })

const doTokenRequest = axios.create({
    baseURL: baseDomain,
    responseType: 'json',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': true ,
        'token': localStorage.getItem('token')
    }
});

export const apiGET_User = (url) => doTokenRequest.get(url);
export const apiPOST_User = (url, data) => doTokenRequest.post(url, data);
export const apiDELETE_User = (url) => doTokenRequest.delete(url);

export const apiGET_Report = (url) => doTokenRequest.get(url);
