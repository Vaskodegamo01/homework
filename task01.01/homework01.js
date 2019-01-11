//Класс Механизм
function Machine() {
    //свойство action где true - включено
    this.action = false;
    //метод включение
    this.turnOn = function () {
        this.action = true;
        console.log("Механизм включен");
    }
    //метод выключения
    this.turnOff = function () {
        this.action = false;
        console.log("Механизм выключен");
    }

};

//Класс бытовой прибор
function HomeAppliance() {
    //наследуем все из Machine
    Machine.call(this);
    //свойство power где true - включение питания
    this.power =false;
    //метод включение
    this.plugIn = function () {
        this.power = true;
        console.log("питание включено");
    }
    //выключения
    this.plugOff = function () {
        this.power = false;
        console.log("питание выключено");
    }
    //метод включение
    this.turnOn = function () {
        if (this.power) {
            action = true;
            console.log("Механизм включен!");
        } else{
            console.log("нет питания");
        }

    }

};

//Класс стиральная машина
function WashingMachine() {
    //наследуем все из бытового прибора
    HomeAppliance.call(this);
    //метод запуска Run
    this.run = function () {
        if (this.power){
            this.turnOn();
        }
        console.log("Механизм запущен");
    }

}


//Класс источник света
function LightSource() {
    //свойство lightLevel от 1 до 100
    this.lightLevel = 0;
    //наследуем все из бытового прибора
    HomeAppliance.call(this);
    //метод установки уровня освещения
    this.setLevel = function (Level) {
        if (Level>=1 && Level<=100) {
            this.lightLevel = Level;
            console.log("Уровень освещения выставлен в " + Level + "%");
        }else {
            if (Level>100) {
                this.lightLevel = 100;
                console.log("Уровень уровень должен быть в диапозне от 1 до 100");
                console.log("Уровень выставлен в 100");
            }else{
                this.lightLevel = 1;
                console.log("Уровень уровень должен быть в диапозне от 1 до 100");
                console.log("Уровень выставлен в 1");
            }

        }

    }

};


//Класс автоматическое транпортное средство
function AutoVihicle() {
    //наследуем все из Machine
    Machine.call(this);
    //свойство координаты по х
    this.x =0;
    //свойство координаты по y
    this.y =0;
    //метод установки позиции по координатам x и y
    this.setPosition = function (x,y) {
        this.x = x;
        this.y = y;
        console.log("координаты установлены " + "x= " + x + " , " + "y= " + y);
    }

};

//Класс автомабиль
function Car() {
    //наследуем все из AutoVihicle
    AutoVihicle.call(this);
    var self = this;
    //свойство скорость
    this.speed = 10;
    this.X = 0;
    this.Y = 0;
    this.myx = 0;
    this.myy = 0;

    //метод установки позиции по координатам x и y
    this.setSpeed = function (speed) {
        this.speed = speed;
        console.log("скорость установлена " + speed);
    }

    //промежуточный метод установки позиции по координатам x и y
    this.MysetPosition = function (x,y) {
        this.myx = x;
        this.myy = y;
        var A =  y - this.y;
        var B =  x - this.x;
        var C = A*A + B*B;
        C = Math.sqrt(C);
        var alpha = A/C;
        var Beta = 90 - alpha;
        var sinalpha = Math.sin(alpha);
        var sinbeta = Math.sin(Beta);
        A = this.speed * sinalpha;
        B = this.speed * sinbeta;
        this.X = Math.round(B);
        this.Y = Math.round(A);
        var a = this.x + this.X;
        var b = this.y + this.Y;
        a = a <= this.myx ? a : this.myx;
        b = b <= this.myy ? b : this.myy;
        // console.log(this.X + " , " + this.Y);
        // console.log(this.x + " , " + this.y);
        // console.log(this.myx + " , " + this.myy);
        self.setPosition(a,b);
        if (a == this.myx && b == this.myy){
            clearInterval(this.IdTimer);
            console.log("вы приехали!!!");
        }
    }

    //метод движение авто
    this.run = function (x,y) {
        // this.myx = x;
        // this.myy = y;
        // this.IdTimer = null;
        // var A =  y - this.y;
        // var B =  x - this.x;
        // var C = A*A + B*B;
        // C = Math.sqrt(C);
        // var alpha = A/C;
        // var Beta = 90 - alpha;
        // var sinalpha = Math.sin(alpha);
        // var sinbeta = Math.sin(Beta);
        // A = this.speed * sinalpha;
        // B = this.speed * sinbeta;
        // this.X = Math.round(B);
        // this.Y = Math.round(A);
        if (this.action) {
            // this.MysetPosition(x,y);
           this.IdTimer  = setInterval(function (){self.MysetPosition(x,y);}, 1000);
           // var idtimer = setInterval(function () {
           //      var a = this.x + this.X;
           //      var b = this.y + this.Y;
           //     console.log(a,b);
           //      a = a <= this.myx ? a : this.myx;
           //      b = b <= this.myy ? b : this.myy;
           //      console.log(this.X + " , " + this.Y);
           //      console.log(this.x + " , " + this.x);
           //      console.log(this.myx + " , " + this.myy);
           //      // var Position = new AutoVihicle();
           //      // Position.setPosition(a,b);
           //     setPosition(a,b);
           //      if (a == this.myx && b == this.myy){
           //          clearInterval(this.idtimer);
           //          console.log("вы приехали!!!");
           //      }
           //  },1000)
        }        else{
            console.log("машина выключена");
        }
    }

};


var bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();

var lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(60);
lightBulb.turnOn();

var honda = new Car();
honda.setPosition(30, 40);
honda.turnOn();
honda.setSpeed(60);
honda.run(180, 240);


// var IdTimer1  = setInterval(function () {
//     honda.run(180, 240);
//
// }, 1000);
// honda.MysetPosition();
// honda.MysetPosition();
// honda.MysetPosition();
// honda.MysetPosition();
// honda.MysetPosition();