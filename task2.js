// Реализация двигателя
var CarEngine = /** @class */ (function () {
    function CarEngine(type, horsepower) {
        this.status = 'off';
        this.type = type;
        this.horsepower = horsepower;
    }
    CarEngine.prototype.start = function () {
        if (this.status === 'off') {
            this.status = 'on';
            console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0437\u0430\u043F\u0443\u0449\u0435\u043D.");
        }
        else {
            console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442.");
        }
    };
    CarEngine.prototype.stop = function () {
        if (this.status === 'on') {
            this.status = 'off';
            console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D.");
        }
        else {
            console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0443\u0436\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D.");
        }
    };
    return CarEngine;
}());
// Реализация трансмиссии
var CarTransmission = /** @class */ (function () {
    function CarTransmission(type, gears) {
        this.currentGear = 0;
        this.type = type;
        this.gears = gears;
    }
    CarTransmission.prototype.shiftUp = function () {
        if (this.currentGear < this.gears) {
            this.currentGear++;
            console.log("\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 ".concat(this.currentGear, "."));
        }
        else {
            console.log("\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430.");
        }
    };
    CarTransmission.prototype.shiftDown = function () {
        if (this.currentGear > 0) {
            this.currentGear--;
            console.log("\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 ".concat(this.currentGear, "."));
        }
        else {
            console.log("\u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435.");
        }
    };
    return CarTransmission;
}());
// Реализация топливной системы
var CarFuelSystem = /** @class */ (function () {
    function CarFuelSystem(fuelType) {
        this.fuelLevel = 100;
        this.fuelType = fuelType;
    }
    CarFuelSystem.prototype.refuel = function (amount) {
        this.fuelLevel = Math.min(100, this.fuelLevel + amount);
        console.log("".concat(this.fuelType === 'electric' ? 'Главная батарея заряжена' : 'Топливо заправлено', ". \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: ").concat(this.fuelLevel, "%."));
    };
    return CarFuelSystem;
}());
// Реализация электрической системы
var CarElectricalSystem = /** @class */ (function () {
    function CarElectricalSystem() {
        this.batteryLevel = 100;
    }
    CarElectricalSystem.prototype.charge = function (amount) {
        this.batteryLevel = Math.min(100, this.batteryLevel + amount);
        console.log("\u0411\u0430\u0442\u0430\u0440\u0435\u044F \u0437\u0430\u0440\u044F\u0436\u0435\u043D\u0430. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: ".concat(this.batteryLevel, "%."));
    };
    return CarElectricalSystem;
}());
// Реализация колес
var CarWheels = /** @class */ (function () {
    function CarWheels(tirePressure) {
        this.tirePressure = tirePressure;
    }
    CarWheels.prototype.checkPressure = function () {
        console.log("\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0448\u0438\u043D\u0430\u0445: ".concat(this.tirePressure, " PSI."));
    };
    CarWheels.prototype.inflate = function (amount) {
        this.tirePressure += amount;
        console.log("\u0428\u0438\u043D\u044B \u043D\u0430\u043A\u0430\u0447\u0430\u043D\u044B. \u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435: ".concat(this.tirePressure, " PSI."));
    };
    return CarWheels;
}());
// Реализация автомобиля
var MyCar = /** @class */ (function () {
    function MyCar(make, model, year, engine, transmission, fuelSystem, electricalSystem, wheels) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
        this.fuelSystem = fuelSystem;
        this.electricalSystem = electricalSystem;
        this.wheels = wheels;
    }
    MyCar.prototype.displayInfo = function () {
        console.log("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435:");
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.make));
        console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.model));
        console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.year));
        console.log("\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C: ".concat(this.engine.type, ", ").concat(this.engine.horsepower, " \u043B.\u0441."));
        console.log("\u0422\u0440\u0430\u043D\u0441\u043C\u0438\u0441\u0441\u0438\u044F: ".concat(this.transmission.type));
        console.log("\u0422\u0438\u043F \u0442\u043E\u043F\u043B\u0438\u0432\u0430: ".concat(this.fuelSystem.fuelType));
    };
    return MyCar;
}());
// Демонстрация работы
// Создаем подсистемы
var engine = new CarEngine('бензиновый', 123);
var transmission = new CarTransmission('manual', 10);
var fuelSystem = new CarFuelSystem('gasoline');
var electricalSystem = new CarElectricalSystem();
var wheels = new CarWheels(40);
// Создаем автомобиль
var myCar = new MyCar('Лифан', 'Лифанович', 2077, engine, transmission, fuelSystem, electricalSystem, wheels);
// Выводим основную информацию об автомобиле
myCar.displayInfo();
console.log('\n--- Состояние двигателя ---');
myCar.engine.start();
myCar.engine.stop();
console.log('\n--- Состояние трансмиссии ---');
myCar.transmission.shiftUp();
myCar.transmission.shiftUp();
myCar.transmission.shiftDown();
console.log('\n--- Топливная система ---');
myCar.fuelSystem.refuel(-30); // Расходуем топливо
myCar.fuelSystem.refuel(50); // Заправляемся
console.log('\n--- Электрическая система ---');
myCar.electricalSystem.charge(-20); // Расходуем заряд батареи
myCar.electricalSystem.charge(30); // Заряжаем батарею
console.log('\n--- Колеса ---');
myCar.wheels.checkPressure(); // Проверяем давление
myCar.wheels.inflate(2); // Накачиваем шины
console.log('\n--- Обновленная информация об автомобиле ---');
myCar.displayInfo();
