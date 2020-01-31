window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // tabs

    let infoHeader = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };
            };
        };
    });

    // timer

    let deadlineForTimer = '2020-01-30';

    function getTime(finishDate) {
        let t = Date.parse(finishDate) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24 - 2),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));
        if (t < 0) {
            seconds = 0;
            minutes = 0;
            hours = 0;
            days = 0;
        }
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerId = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTime(endtime);

            if (String(t.seconds).length < 2) {
                seconds.textContent = `0${t.seconds}`;
            } else {
                seconds.textContent = t.seconds;
            }

            if (String(t.minutes).length < 2) {
                minutes.textContent = `0${t.minutes}`;
            } else {
                minutes.textContent = t.minutes;
            }

            if (String(t.hours).length < 2) {
                hours.textContent = `0${t.hours}`;
            } else {
                hours.textContent = t.hours;
            }

            if (t.total <= 0) {
                clearInterval(timerId);
            }
        }
    }

    setClock('timer', deadlineForTimer);

    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabBtn = document.querySelectorAll('.description-btn');
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add = 'more-splash';
        document.body.style.overflow = 'hidden';
    });
    tabBtn.forEach(element => {
        element.addEventListener('click', function () {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove = 'more-splash';
        document.body.style.overflow = '';
    });

    // form
    let message = {
        loading: 'загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

         statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        let obj ={};
        formData.forEach(function(value,key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);


        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }

    });
    // contact form 
    let contactForm = document.querySelector('#form'),
        contactInput = contactForm.getElementsByTagName('input'),
        statusMessageInCF = document.createElement('div');

    statusMessageInCF.classList.add('status');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactForm.appendChild(statusMessageInCF);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        let formData = new FormData(contactForm);
        let obj ={};
        formData.forEach(function(value,key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessageInCF.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessageInCF.innerHTML = message.success;
            } else {
                statusMessageInCF.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = "";
        }

    });



});