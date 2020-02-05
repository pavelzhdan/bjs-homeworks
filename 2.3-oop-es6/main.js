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

/*class EnforcedWeapon extends Weapon{
    constructor(name, originName, attack, range, durability){
        super(originName, attack, range, durability);
        this.name = name;
        this.originName = originName;
        switch(true){
            case originName == "Лук":
                this.durability = bow._durability;
                break;
            case originName == "Меч":
                this.range = sword.range;
                break;
            case originName == "Посох":
                this.durability = staff._durability;
                break;
        };
    };
};


const longbow = new EnforcedWeapon("Длинный лук", "Лук", 15, 4, "-");
const poleaxe = new EnforcedWeapon("Секира", "Меч", 27,"-", 800);
const stormStaff = new EnforcedWeapon("Посох Бури", "Посох", 10, 3, "-")*/

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