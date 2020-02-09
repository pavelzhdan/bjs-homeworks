class AlarmClock {
    constructor(){
        this.clocks = [];
        this.id =[]
    };

    addClock(time, fn, id) {
        switch(true){
            case typeof(id) == "undefined":
                console.error("Ведите id");
                break;
            case !this.includes(id):
                console.error("Такой id уже есть");
                break;
            default:
                this.clocks.push([time, fn]);
                this.id.push(id);
        };
    };

    removeClock(id){
        if (this.indexOf(id) == -1){
            return "Такого id нет"
        } else {
            let index = this.indexOf(id);
            delete this.id[index];
            delete this.clocks[index];
        };
    };

    getCurrentFormattedTime(){
        return `${getHours()}:${getMinutes()}`
    };
};