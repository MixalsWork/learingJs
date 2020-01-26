//Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start');

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с и заканчивая )
let budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');

//  Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.getElementsByClassName('expenses-item');

//  Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let allItemBtn = document.getElementsByTagName('button'),
    expensesItemBtn = allItemBtn[0],
    optionalExpensesBtn =allItemBtn[1],
    countBudgetBtn = allItemBtn[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

//  Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('input[type = checkbox]'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    
