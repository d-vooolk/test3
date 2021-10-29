const requestURL1 = 'https://jsonplaceholder.typicode.com/users';
const requestURL2 = 'https://jsonplaceholder.typicode.com/posts';


function sendRequest(method, request) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, request);

        xhr.onload = () =>  {
            xhr.status === 200
                ? resolve()
                : reject()
            }

        xhr.send();
    });
}

let clickHandler = () => {
    Promise.all([sendRequest('GET', requestURL1), sendRequest('GET', requestURL2)])
        .then( () => {
            console.log('оба ответа получены');
        })
        .catch( () => {
            console.log('При запросе произошла ошибка');
        })
}



