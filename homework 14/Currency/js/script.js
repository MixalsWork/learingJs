let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function getUsd() {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                resolve(data.usd);
            } else if (request.status != 200) {
                reject();
            }
        });
    });
}

inputRub.addEventListener('input', () => {
    getUsd()
        .then(usd => inputUsd.value = inputRub.value / usd)
        .catch(() =>inputUsd.value = "Что-то пошло не так!");
});










//  inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });