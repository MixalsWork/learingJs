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
    "savings": true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдеться?", '');

            if ((typeof (a)) === 'string' && a != null && b != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.Бюджет / 30).toFixed();
        alert("Твой бюджет на 1 день составляет : " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов", ''),
                b = prompt("Во сколько обойдеться?", '');

            if ((typeof (a)) === 'string' && a != null && b != null &&
                a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i] = b;
            } else {
                alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
                i = i - 1;
            }
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                procent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * procent;
            alert("Доход в месяц с вашего деспозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        let itemsMore = prompt("Что-то еще?", '');
        let arrIncome = []; 
        if ((typeof (items)) === 'string' && items != null && (typeof (items)) === 'string' && itemsMore != null && items != '' && itemsMore != '' && items.length < 50 && itemsMore.length < 50) {
            appData.income = items.split(", ");
            appData.income.push(itemsMore);
            appData.income.sort();
            appData.income.forEach(function (item,index) {
                arrIncome.push(index+1 +" : "+item);
            });
            alert("Способы доп. заработка: " + arrIncome);
        } else {
            alert('Данные введены не верно. Бюджет на месяц должен быть в числовом формате больше нуля.');
            return appData.chooseIncome();
        }
    },
    showAll: function() {
        console.log("Наша программа включает в себя данные: ")
        for ( let key in appData){
            console.log( key);
        }
    }

};









