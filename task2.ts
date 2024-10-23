// Интерфейс двигателя
interface Engine {
    type: string;             // Тип двигателя (бензиновый, дизельный, электрический)
    horsepower: number;
    status: 'on' | 'off';
    start(): void;
    stop(): void;
}

// Интерфейс трансмиссии
interface Transmission {
    type: 'manual' | 'automatic';
    gears: number; 
    currentGear: number;
    shiftUp(): void;
    shiftDown(): void;
}

// Интерфейс топливной системы
interface FuelSystem {
    fuelType: 'gasoline' | 'diesel' | 'electric';
    fuelLevel: number;  // Уровень топлива (в процентах)
    refuel(amount: number): void;
}

// Интерфейс электрической системы
interface ElectricalSystem {
    batteryLevel: number;   // Уровень заряда батареи (в процентах)
    charge(amount: number): void;
}

// Интерфейс колес
interface Wheels {
    tirePressure: number;   // Давление в шинах (в PSI)
    checkPressure(): void;
    inflate(amount: number): void;
}

// Главный интерфейс автомобиля
interface Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;
    transmission: Transmission;
    fuelSystem: FuelSystem;
    electricalSystem: ElectricalSystem;
    wheels: Wheels;
    displayInfo(): void;
}

// Реализация двигателя
class CarEngine implements Engine {
    type: string;
    horsepower: number;
    status: 'on' | 'off' = 'off';

    constructor(type: string, horsepower: number) {
        this.type = type;
        this.horsepower = horsepower;
    }

    start(): void {
        if (this.status === 'off') {
            this.status = 'on';
            console.log(`Двигатель запущен.`);
        } else {
            console.log(`Двигатель уже работает.`);
        }
    }

    stop(): void {
        if (this.status === 'on') {
            this.status = 'off';
            console.log(`Двигатель остановлен.`);
        } else {
            console.log(`Двигатель уже выключен.`);
        }
    }
}

// Реализация трансмиссии
class CarTransmission implements Transmission {
    type: 'manual' | 'automatic';
    gears: number;
    currentGear: number = 0;

    constructor(type: 'manual' | 'automatic', gears: number) {
        this.type = type;
        this.gears = gears;
    }

    shiftUp(): void {
        if (this.currentGear < this.gears) {
            this.currentGear++;
            console.log(`Переключено на передачу ${this.currentGear}.`);
        } else {
            console.log(`Достигнута максимальная передача.`);
        }
    }

    shiftDown(): void {
        if (this.currentGear > 0) {
            this.currentGear--;
            console.log(`Переключено на передачу ${this.currentGear}.`);
        } else {
            console.log(`Вы находитесь на нейтральной передаче.`);
        }
    }
}

// Реализация топливной системы
class CarFuelSystem implements FuelSystem {
    fuelType: 'gasoline' | 'diesel' | 'electric';
    fuelLevel: number = 100;

    constructor(fuelType: 'gasoline' | 'diesel' | 'electric') {
        this.fuelType = fuelType;
    }

    refuel(amount: number): void {
        this.fuelLevel = Math.min(100, this.fuelLevel + amount);
        console.log(`${this.fuelType === 'electric' ? 'Главная батарея заряжена' : 'Топливо заправлено'}. Текущий уровень: ${this.fuelLevel}%.`);
    }
}

// Реализация электрической системы
class CarElectricalSystem implements ElectricalSystem {
    batteryLevel: number = 100;

    charge(amount: number): void {
        this.batteryLevel = Math.min(100, this.batteryLevel + amount);
        console.log(`Батарея заряжена. Текущий уровень: ${this.batteryLevel}%.`);
    }
}

// Реализация колес
class CarWheels implements Wheels {
    tirePressure: number;

    constructor(tirePressure: number) {
        this.tirePressure = tirePressure;
    }

    checkPressure(): void {
        console.log(`Давление в шинах: ${this.tirePressure} PSI.`);
    }

    inflate(amount: number): void {
        this.tirePressure += amount;
        console.log(`Шины накачаны. Текущее давление: ${this.tirePressure} PSI.`);
    }
}

// Реализация автомобиля
class MyCar implements Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;
    transmission: Transmission;
    fuelSystem: FuelSystem;
    electricalSystem: ElectricalSystem;
    wheels: Wheels;

    constructor(
        make: string,
        model: string,
        year: number,
        engine: Engine,
        transmission: Transmission,
        fuelSystem: FuelSystem,
        electricalSystem: ElectricalSystem,
        wheels: Wheels
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
        this.fuelSystem = fuelSystem;
        this.electricalSystem = electricalSystem;
        this.wheels = wheels;
    }

    displayInfo(): void {
        console.log(`--- Информация об автомобиле: ---`);
        console.log(`Марка: ${this.make}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`Двигатель: ${this.engine.type}, ${this.engine.horsepower} л.с.`);
        console.log(`Трансмиссия: ${this.transmission.type}`);
        console.log(`Тип топлива: ${this.fuelSystem.fuelType}`);
    }
}

// Демонстрация работы

// Создаем подсистемы
const engine = new CarEngine('бензиновый', 123);
const transmission = new CarTransmission('manual', 10);
const fuelSystem = new CarFuelSystem('gasoline');
const electricalSystem = new CarElectricalSystem();
const wheels = new CarWheels(40);

// Создаем автомобиль
const myCar = new MyCar('Лифан', 'Лифанович', 2077, engine, transmission, fuelSystem, electricalSystem, wheels);

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
myCar.fuelSystem.refuel(50);  // Заправляемся

console.log('\n--- Электрическая система ---');
myCar.electricalSystem.charge(-20); // Расходуем заряд батареи
myCar.electricalSystem.charge(30);  // Заряжаем батарею

console.log('\n--- Колеса ---');
myCar.wheels.checkPressure(); // Проверяем давление
myCar.wheels.inflate(2); // Накачиваем шины
