import { apiUrl } from '../config';

export const apiService = {
    getArticles
}

function getArticles() {
    return new Promise((resolve, reject) => {
        // т.к. нужна поддержка старых браузеров использую XMLHttpRequest(), fetch не работает в IE11
        let xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, false);
        xhr.send();
        //костыль потому что webpack dev server всегда отправляет 200, даже если адрес неверен
        let response = JSON.parse(xhr.responseText);
        if (xhr.status != 200 || !response.success) {
            reject(xhr.status + ': ' + xhr.statusText);
        } else {
            resolve(response.tiles);
        }
    });
}