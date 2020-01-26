// Обявление переменных
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
let menuWithLi = document.querySelector('.menu');
let newLi = document.createElement('li');

// работа с пунктами меню 
menuWithLi.children[1].textContent ='Второй пункт';
menuWithLi.children[2].textContent ='Третий пункт';
newLi.classList.add('menu-item');
newLi.textContent = "Пятый пункт";
menuWithLi.appendChild(newLi);
// убираем рекламу
column[1].removeChild(adv);

// меняем бекграунд
document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
// меняем текст заголовка 
document.querySelector('#title').textContent = "Мы продаем только подлинную технику Apple";
// задаем вопрос пользователю 
let ask = prompt('Какое ваше отношение к технике apple?');
//добавляем ответ в див 
document.querySelector('#prompt').textContent = ask;
