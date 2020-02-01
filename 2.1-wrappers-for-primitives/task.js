"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
};

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let now = new Date();
    let loanDate = new Date(date);
    let monthQuantity = 0;

    function checkDate(loanDate){

        let currentYear = now.getFullYear();
        let currentMonth = now.getMonth()+1;

        let loanYear = loanDate.getFullYear();
        let loanMonth = loanDate.getMonth()+1;


        if (loanYear == currentYear){
            monthQuantity = loanMonth-currentMonth;}
            if (loanYear == currentYear+1)  {
            monthQuantity = (12 - currentMonth) + loanMonth;}
            if (loanYear > currentYear+1)   {
            monthQuantity = ((loanYear-currentYear-1)*12) + (12 - currentMonth) + loanMonth;
        };
        return monthQuantity
        };
        checkDate(loanDate);
        
    switch(true){
        case percent<=0: 
        case isNaN(percent): 
        case typeof percent == "undefined":
              alert("Ошибка заполнения графы \"Процентная ставка\"");
              break;
        case contribution<0: 
        case isNaN(contribution): 
        case typeof contribution == "undefined":
              alert("Ошибка заполнения графы \"Начальный взнос\"");
              break;
        case amount<=0: 
        case isNaN(amount): 
        case typeof amount == "undefined":
              alert("Ошибка заполнения графы \"Общая стоимость\"");
              break;
        case now >= loanDate: 
        case typeof date == "undefined":
              alert("Ошибка заполнения графы \"Срок ипотеки\"");
              break;
              };

    let loanSumm = Number(amount)-Number(contribution);
    let calculatedPercent = Number(((Number(percent)/100)/12));
    // или let calculatedPercent = Number(((Number(percent)/100)/12)).toFixed(4);
    let monthPayment = Number((Number(loanSumm)*(calculatedPercent + calculatedPercent/((Math.pow((1+calculatedPercent),Number(monthQuantity))-1)))));
    console.log(calculatedPercent);
    console.log(typeof calculatedPercent);
    console.log( monthQuantity);
    console.log(monthPayment);
    console.log(typeof monthPayment); 
    let totalAmount = (monthPayment*Number(monthQuantity)).toFixed(2);
    console.log(totalAmount );
    console.log(typeof monthPayment); 
    return totalAmount;
};

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
    console.log(name.length);
};

function getGreeting(name) {
    let currentName;
    if (name.length === 0)
        {currentName = "Аноним";}
        else {currentName = name};
    let greeting = `Привет, мир! Меня зовут ${currentName}.`;
    return greeting;
};