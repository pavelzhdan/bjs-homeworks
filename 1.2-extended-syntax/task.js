"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let result = [];

    let d = Math.pow(b,2)-4*a*c;
    let x1 = (-b+Math.sqrt(d))/2*a;
    let x2 = (-b-Math.sqrt(d))/2*a;

    switch(true) {
        case d<0:
            result = [];
            break;
        case d===0:
            result = [x1];
            break;
        default:
            result = [x1, x2];
    };

    return result;
};

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length > 5){
        alert (`Вы ввели более пяти оценок! Всего оценок ${marks.length}, посление(яя) ${marks.length-5} будут(ет) удалены(а)`);
        marks.splice(5,marks.length-5);
      };
      
    let marksSum = 0;
      
    for (let i=0; i<marks.length; i++){
        marksSum = marksSum + marks[i];
    };
      
    let averageMark = marksSum / marks.length;
    
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let yearOfBirth = dateOfBirthday.getFullYear();
    let today = new Date();
    let thisYear = today.getFullYear();

    let age = thisYear-yearOfBirth;
    let result;

    switch(true){
        case age < 18:
            result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
            break;
        case age > 18:
            result = `Не желаете ли олд-фэшн, ${name}?`;
            break;
        }
    console.log(result);
    return result;
}