class Weapon{
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    };

    takeDamage(damage){
        this.durability -= damage;
        if (this.durability <= 0){
            this.durability = 0;
        };
    };

    set getDamage(){
        if (this.durability <= this.durability/100*30){
            return this.attack/2
            } if (this.durability == 0){
                return = 0} else {
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

class EnforcedWeapon extends Weapon{
    constructor(name, originName, attack, range, durability){
        super(originName, attack, range, durability);
        this.name = name;
        this.originName = originName;
        switch(true){
            case originName === "Лук" :
                let x = bow.durability;
                this.durability = x;
                break;
            case originName === "Меч":
                let y = sword.range;
                this.range = y;
                break;
            case originName === "Посох":
                let z = staff.durability;
                this.durability = z;
                break;
        };
    };
};


/*class EnforcedBow {
    constructor(name, originName, attack, range){
        this.name = name;
        this.originName = originName;
        this.attack = attack;
        this.range = range;
        this.durability = bow.durability;
    }
}

class Poleaxe {
    constructor(name, originName, attack, durability){
        this.name = name;
        this.originName = originName;
        this.attack = attack;
        this.range = sword.range;
        this.durability = durability;        
    };
};

class StormStaff {
    constructor(name, originName, attack, range){
        this.name = name;
        this.originName = originName;
        this.attack = attack;
        this.range = range;
        this.durability = staff.durability;        
    };
};*/

const longbow = new EnforcedWeapon("Длинный лук", "Лук", 15, 4);
const poleaxe = new EnforcedWeapon("Секира", "Меч", 27,"-", 800);
const stormStaff = new EnforcedWeapon("Посох Бури", "Посох", 10, 3);