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
        loading: 'Загрузка...',
        loadingImg: 'img/ajax-loader.gif',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        successImg: 'img/smartphone.png',
        failure: 'Что-то пошло не так...'
    };

    let mainForm = document.querySelector('.main-form'),
        form = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        popapForm = document.querySelector('.popup-form'),
        contactForm = document.querySelector('.contact-form'),

        statusMessage = document.createElement('div'),
        statusFormImg = document.createElement('img'),
        statusFormP = document.createElement('p');

    statusFormImg.style.cssText = 'height: 100px; margin: 10px auto; display: block;';
    statusMessage.style.cssText = 'width: 100%; text-align: center; color: white';

    function sendForm(elem, popap) {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            popap.appendChild(statusMessage);
            statusMessage.appendChild(statusFormImg);
            statusMessage.appendChild(statusFormP);
            let formData = new FormData(elem);


            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        elem.style.display = 'none';
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }

                        }
                    }
                    let jsonObject = {};

                    for (const [key, value] of data.entries()) {
                        jsonObject[key] = value;

                    }
                    request.send(JSON.stringify(jsonObject));
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }

            }
            postData(formData)
                .then(() => {
                    statusFormImg.src = message.loadingImg;
                    statusFormP.textContent = message.loading;
                })
                .then(() => {
                    statusFormImg.src = message.successImg;
                    statusFormP.textContent = message.success;
                })
                .catch(() => statusFormP.textContent = message.failures)
                .then(clearInput);


        });
    }

    sendForm(form, contactForm);
    sendForm(mainForm, popapForm);

    //slider
    let sliderWrap = document.querySelector('.slider'),
        sliders = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'),
        slideIndex = 1;

    showSlider(slideIndex);

    function showSlider(n) {

        if (n < 1) {
            slideIndex = sliders.length;
        } else if (n > sliders.length) {
            slideIndex = 1;
        }

        sliders.forEach((item) => {
            item.style.display = 'none';
        });
        dots.forEach((item) => item.classList.remove('dot-active'));

        sliders[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    // showSlider(slideIndex);
    function plusSlides(n) {
        showSlider(slideIndex += n);
    }

    next.addEventListener('click', function () {
        plusSlides(1);
        console.log(slideIndex);

    });
    prev.addEventListener('click', function () {
        plusSlides(-1);
        console.log(slideIndex);
    });


    function currentSlides(n) {
        showSlider(slideIndex = n);
    }

    dotWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlides(i);
            }
        }
    });

//calc
    let personInput = document.querySelectorAll('.counter-block-input')[0],
        dayInput = document.querySelectorAll('.counter-block-input')[1],
        placeSelect = document.querySelector('#select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daySum = 0,
        totalSum = 0;
    
    totalValue.innerHTML = 0;

    personInput.addEventListener('input', function() {
        personSum = this.value;
        totalSum = (personSum * daySum )*4000;
        if(dayInput.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    dayInput.addEventListener('input', function() {
        daySum = this.value;
        totalSum = (personSum * daySum )*4000;
        if(personInput.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    placeSelect.addEventListener('change', function() {
        if(personInput.value == "" || dayInput.value == ""){
            totalValue.innerHTML = 0;
        } else {
            let a = totalSum;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

});