function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let dateOFBirth = Date.parse(birthday);
    let currentDate = Date.now();
    let diff = currentDate-dateOFBirth;
    let age = Math.floor(diff / 31556952000);
    if (age >= 18){
        return age
    };
    if (isNaN(dateOFBirth)){
        alert("Ошибка введния даты");
    }
};

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound
    if (animal === "undefined"){
        return null}
        else {
        return sound
        };
    };

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);
        console.log(typeof average);
        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let gradeSumm = 0;
    for(let i=0; i<marks.length; i++){
        gradeSumm = gradeSumm + Number(marks[i]);
        };
    let roundedAverage = Math.round(Number(gradeSumm) / Number(marks.length));
    return roundedAverage
    };