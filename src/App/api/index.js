import axios from 'axios';
// import config from 'config';

const app_url = 'localhost:4000';//config.get('app_url');

const getAppList = () => {
    console.log('****** in API');
    return new Promise((resolve, reject) => {
        axios.get('http://' + app_url + '/all')
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

const postApp = (postObject) => {
    return new Promise((resolve, reject) => {
        axios.post('http://' + app_url + '/app', postObject)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

const putApp = (postObject) => {
    return new Promise((resolve, reject) => {
        axios.put('http://' + app_url + '/app', postObject)
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

export {
    getAppList,
    postApp,
    putApp
}