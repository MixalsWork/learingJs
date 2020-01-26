let money = +prompt('"Ваш бюджет на месяц?"');
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData ={
    "Бюджет" : money,
    "timeData" : time,
    "expenses" : {},
    "optionalExpenses" : {},
    "income": [],
    "savings" : false
};

let oneQuestion = prompt("Введите обязательную статью расходов в этом месяцe");
let twoQuestion = prompt("Во сколько обойдется?");
let threeQuestion = prompt("Введите обязательную статью расходов в этом месяцe");
let fourQuestion = prompt("Во сколько обойдется?");

appData.expenses.oneQuestion = twoQuestion;
appData.expenses.threeQuestion = fourQuestion;

alert("Твой бюджет на 1 день составляет : "+ money/30);

