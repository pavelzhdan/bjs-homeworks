class Weapon{
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this._durability = durability;
    };

    takeDamage(damage){
        this.durability -= damage;
        if (this.durability < 0){
            this.durability = 0;
        };
    };

    get getDamage(){
        switch(true){
            case Number(this.durability) == 0:
                return 0
            case this.durability < (Number((this._durability)/100*30)):
                return this.attack/2
            default:
                return this.attack
        };
    };

    get isBroken(){
        if (this.durability > 0){
            return false
        } else{
            return true
        };
    };
};

const hand = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);

const longbow = new Weapon("Длинный лук", 15, 200, 4);
const poleaxe = new Weapon("Секира", 27, 800, 1);
const stormStaff = new Weapon("Посох Бури", 10, 300, 3);

class Hand extends Weapon{
    constructor(){
    super("Рука", 1, Infinity, 1)
    };
};

class Bow extends Weapon{
    constructor(){
    super("Лук", 10, 200, 3);
    };
};

class Sword extends Weapon{
    constructor(){
    super("Меч", 25, 500, 1);
    };
};

class Knife extends Weapon{
    constructor(){
    super("Нож", 5, 300, 1);
    };
};

class Staff extends Weapon{
    constructor(){
    super("Посох", 8, 300, 2);
    };
};

class Longbow extends Bow{
    constructor(){
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    };
};

class Poleaxe extends Sword{
    constructor(){
        super();
        this.name = "Секира";
        this.attack = 27;
        this.durability = 800;
        this._durability = 800;
    };
};

class StormStaff extends Staff{
    constructor(){
        super();
        this.name = "Посох Бури";
        this.attack = 10;
        this.range = 3;
    };
};

const hand1 = new Hand();
const bow1 = new Bow();
const sword1 = new Sword();
const knife1 = new Knife();
const staff1 = new Staff();

const longbow1 = new Longbow();
const poleaxe1 = new Poleaxe();
const stormStaff1 = new StormStaff();



//Задача 3

class StudentLog{
    constructor(studentName){
        this.studentName = studentName;
    };

    get getName(){
        return this.studentName
    };

    addGrade(grade, subject){
        if (grade > 5 || grade < 0 || typeof(grade) == "string"){
                alert(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
                if (!this[subject]){
                    return 0
                } else {
                    return this[subject].length
                };
            } if (this.hasOwnProperty(subject)) {
                this[subject][this[subject].length] = grade;   
                return this[subject].length
            } else {
            this[subject] = [grade];
            return this[subject].length
        };
    };

    getAverageBySubject(subject){
        if (!this[subject]){
            return 0
        } else{
            let averageGrade = 0;
            for (let i = 0; i < this[subject].length; i++){
                averageGrade += this[subject][i];
            };
            return averageGrade / this[subject].length;
        };
    };

    get getTotalAverage(){
        let subjectList = Object.getOwnPropertyNames(this);
        subjectList.splice(0,2);
        let marksQuntity = 0;
        let gradeSumm = 0;
        for (let l=0; l<subjectList.length; l++){
            let currentSubject = String(this.subjectList[l]);
            marksQuntity += Number(this[currentSubject].length);
            for(let i=0; i<this[currentSubject].length; i++){
                let subject = this[currentSubject].length;
                gradeSumm += subject[i];
            };
        };
        if(marksQuntity === 0){
            return 0
        } else {
            return gradeSumm / marksQuntity
        };
    };
};