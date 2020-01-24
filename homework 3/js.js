let money, time;

function start() {
    money = +prompt('"Ваш бюджет на месяц?"');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('"Ваш бюджет на месяц?"');
    }
}
start();

let appData = {
    "Бюджет": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдеться?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
            i = i - 1;
        }
    }
}
chooseExpenses();

// let i = 0;
// while( i  < 2 ){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдеться?", '');
//         i++;

//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50){
//             console.log('done');
//             appData.expenses[a] = b;
//     } else {

//     }    
// }

// let i =0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдеться?", '');
//         i++;

//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50){
//             console.log('done');
//             appData.expenses[a] = b;
//     } else {

//     }
// } while( i < 2) ;

function detectDayBudget() {
    appData.moneyPerDay = (appData.Бюджет / 30).toFixed();
    alert("Твой бюджет на 1 день составляет : " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов", ''),
            b = prompt("Во сколько обойдеться?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.optionalExpenses[i] = b;
        } else {
            alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
            i = i - 1;
        }
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            procent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * procent;
        alert("Доход в месяц с вашего деспозита: " + appData.monthIncome);
    }
}
checkSavings();