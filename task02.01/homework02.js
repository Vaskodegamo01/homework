//Класс Механизм
class Machine {
    constructor () {
        //свойство action где true - включено
        this.action = false;
    }

    //метод включение
    turnOn () {
        this.action = true;
        console.log("Механизм включен");
    }
    //метод выключения
    turnOff () {
        this.action = false;
        console.log("Механизм выключен");
    }

}

//Класс бытовой прибор
class HomeAppliance extends Machine{
    constructor () {
        super();
        //свойство power где true - включение питания
        this.power =false;
    }
    //метод включение
    plugIn () {
        this.power = true;
        console.log("Питание включено!");
    }
    //выключения
    plugOff () {
        this.power = false;
        console.log("Питание выключено!");
    }
    //метод включение
    turnOn () {
        if (this.power) {
            this.action = true;
            console.log("Механизм включен!");
        } else{
            console.log("Нет питания!");
        }
    }
}

//Класс стиральная машина
class WashingMachine extends HomeAppliance{
    constructor () {
        super();
    }
    //метод запуска Run
    run () {
        if (this.power && this.action){
            console.log("Программа запущена!");
        }
    }
}


//Класс источник света
class LightSource extends HomeAppliance{
    constructor () {
        super();
        //свойство lightLevel от 1 до 100
        this.lightLevel = 0;
    }
    //метод установки уровня освещения
    setLevel (Level) {
        if (Level>=1 && Level<=100) {
            this.lightLevel = Level;
            console.log(`Уровень освещения выставлен в ${this.lightLevel}%`);
        }else {
            if (Level>100) {
                this.lightLevel = 100;
                console.log("Уровень уровень должен быть в диапозне от 1 до 100");
                console.log(`Уровень выставлен в ${this.lightLevel}`);
            }else{
                this.lightLevel = 1;
                console.log("Уровень уровень должен быть в диапозне от 1 до 100");
                console.log(`Уровень выставлен в ${this.lightLevel}`);
            }
        }
    }
}


//Класс автоматическое транпортное средство
class AutoVihicle extends Machine{
    constructor () {
        super();
        //свойство координаты по х
        this.x =0;
        //свойство координаты по y
        this.y =0;
    }
    //метод установки позиции по координатам x и y
    setPosition (x,y) {
        this.x = x;
        this.y = y;
        console.log(`координаты установлены x=${this.x},y=${this.y}`);
    }
}

//Класс автомабиль
class Car extends AutoVihicle{
    constructor(){
        super();
        //свойство скорость
        this.speed = 10;
        this.X = 0;
        this.Y = 0;
    }
    //метод установки позиции по координатам x и y
    setSpeed (speed) {
        this.speed = speed;
        console.log(`скорость установлена ${this.speed}`);
    }
    //промежуточный метод установки позиции по координатам x и y
    MysetPosition (x,y) {
        //вычисляем катиты А и Б
        let A =  y - this.y;
        let B =  x - this.x;
        //вычисляем гипатинузу
        let C = A*A + B*B;
        C = Math.sqrt(C);
        //вычисляем угол альфа
        let alpha = A/C;
        alpha = Math.sin(alpha);
        //вычисляем угол бета
        let Beta = 90 - alpha;
        Beta = Math.sin(Beta);
        //вычисляем на сколько сместиться по x
        B = this.speed * Beta;
        this.X = Math.round(B);
        //вычисляем на сколько сместиться по y
        A = this.speed * alpha;
        this.Y = Math.round(A);
        //меняем координаты смещения по x и y
        A = this.x + this.X;
        B = this.y + this.Y;
        //делаем проверку не вышли мы за диапозон
        A = A <= x ? A : x;
        B = B <= y ? B : y;
        //устанавливаем координаты
        this.setPosition(A,B);
        //делаем проверку приехали мы или нет
        if (A === x && B === y){
            //удаляем setInterval
            clearInterval(this.IdTimer);
            console.log("вы приехали!!!");
        }
    }
    //метод движение авто
    run (x,y) {
        if (this.action) {
           this.IdTimer  = setInterval(() => {this.MysetPosition(x,y);}, 1000);
        }        else{
            console.log("машина выключена");
        }
    }
}


let bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();
bosch.run();

let lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(60);
lightBulb.turnOn();

let honda = new Car();
honda.setPosition(30, 40);
honda.turnOn();
honda.setSpeed(60);
honda.run(180, 240);
