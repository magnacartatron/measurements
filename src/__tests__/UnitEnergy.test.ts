import { Measurement, UnitEnergy, UnitLength, UnitMass, UnitVolume, UnitTemperature } from '../index';

const caloriesValue = new Measurement<UnitEnergy>(100,UnitEnergy.calories);
const joulesValue = new Measurement<UnitEnergy>(100,UnitEnergy.joules);
const kiloCaloriesValue = new Measurement<UnitEnergy>(100,UnitEnergy.kilocalories);
const kiloJoulesValue = new Measurement<UnitEnergy>(100,UnitEnergy.kilojoules);
const kilowattHoursValue = new Measurement<UnitEnergy>(100,UnitEnergy.kilowattHours);

test('Create Mass Measurements', () => {
    const kgValue = new Measurement(100, UnitMass.kilograms);
    expect(kgValue.shortLabel).toBe("100 kg");
})

test('Create Volume Measurements', () => {
    const litersValue = new Measurement(100, UnitVolume.liters);
    expect(litersValue.shortLabel).toBe("100 L");
})

test('Create Temperature Measurements', () => {
    const kelvinValue = new Measurement(100, UnitTemperature.kelvin);
    expect(kelvinValue.shortLabel).toBe("100 K");
})

test('Create Energy Measurements', () => {

    expect(caloriesValue.shortLabel).toBe("100 cal");
    expect(caloriesValue.longLabel).toBe("100 Calories");
    expect(joulesValue.shortLabel).toBe("100 J");
    expect(kiloCaloriesValue.shortLabel).toBe("100 kCal");
    expect(kiloJoulesValue.shortLabel).toBe("100 kJ");
    expect(kilowattHoursValue.shortLabel).toBe("100 kWh")
    
});

test('Convert Energy Measurements', () => {
    const newCalorieValue = new Measurement<UnitEnergy>(100,UnitEnergy.calories);
    const newJoulesValue = newCalorieValue.converted(UnitEnergy.joules);
    expect(newJoulesValue.value).toBeCloseTo(418.4);
    expect(newJoulesValue.symbol).toBe("J");
})

test('Add Energy Measurements', () => {
    const newResult = Measurement.add(caloriesValue,joulesValue);
    expect(newResult.value).toBeCloseTo(518.4)
    expect(newResult.symbol).toBe("J")
})

test('Subtract Energy Measurements', () => {
    const subtractedResult = Measurement.substract(caloriesValue,joulesValue);
    expect(subtractedResult.value).toBeCloseTo(318.4);
    expect(subtractedResult.symbol).toBe("J");
})

test('Scale Energy Measurement', () => {
    const newScaledCaloriesValue = Measurement.scale(2,caloriesValue);
    expect(newScaledCaloriesValue.shortLabel).toBe("200 cal");
})

test('Divide Energy Measurements', () => {
    const dividedResult = Measurement.divide(caloriesValue,joulesValue);
    expect(dividedResult.value).toBeCloseTo(4.184);
})

test('Energy Measurement is equal', () => {
    const caloriesEqualValue = new Measurement(100,UnitEnergy.calories);
    const joulesEqualValue = caloriesEqualValue.converted(UnitEnergy.joules);
    expect(Measurement.equals(caloriesEqualValue,joulesEqualValue)).toBe(true);
    expect(Measurement.notEquals(caloriesEqualValue,joulesEqualValue)).toBe(false);
})

test('Energy Measurement is not equal', () => {
    const caloriesNotEqualValue = new Measurement(100,UnitEnergy.calories);
    const joulesNotEqualValue = Measurement.add(caloriesNotEqualValue,caloriesNotEqualValue);
    joulesNotEqualValue.convert(UnitEnergy.joules);
    expect(Measurement.notEquals(caloriesNotEqualValue,joulesNotEqualValue)).toBe(true);
    expect(Measurement.equals(caloriesNotEqualValue,joulesNotEqualValue)).toBe(false);
})

test('Energy Measurement is greater than', () => {
    const cValue = new Measurement(100,UnitEnergy.calories);
    const jValue = Measurement.add(cValue,cValue);
    jValue.convert(UnitEnergy.joules);
    expect(Measurement.greaterThan(cValue,jValue)).toBe(false);
    expect(Measurement.greaterThan(jValue,cValue)).toBe(true);
})

test('Energy Measurement is less than', () => {
    const cValue = new Measurement(100,UnitEnergy.calories);
    const jValue = Measurement.add(cValue,cValue);
    jValue.convert(UnitEnergy.joules);
    expect(Measurement.lessThan(cValue,jValue)).toBe(true);
    expect(Measurement.lessThan(jValue,cValue)).toBe(false);
})

test('Energy Measurement is greather than or equal', () => {
    const cValue = new Measurement(100,UnitEnergy.calories);
    const jValue = Measurement.add(cValue,cValue);
    jValue.convert(UnitEnergy.joules);
    const cEqualValue = cValue.converted(UnitEnergy.calories);
    expect(Measurement.greaterThanOrEqual(cValue,jValue)).toBe(false);
    expect(Measurement.greaterThanOrEqual(jValue,cValue)).toBe(true);
    expect(Measurement.greaterThanOrEqual(cValue,cEqualValue)).toBe(true);
    expect(Measurement.greaterThanOrEqual(jValue,cEqualValue)).toBe(true);
})

test('Energy Measurement is less than or equal', () => {
    const cValue = new Measurement(100,UnitEnergy.calories);
    const jValue = Measurement.add(cValue,cValue);
    jValue.convert(UnitEnergy.joules);
    const cEqualValue = cValue.converted(UnitEnergy.calories);
    expect(Measurement.lessThanOrEqual(cValue,jValue)).toBe(true);
    expect(Measurement.lessThanOrEqual(jValue,cValue)).toBe(false);
    expect(Measurement.lessThanOrEqual(cValue,cEqualValue)).toBe(true);
    expect(Measurement.lessThanOrEqual(jValue,cEqualValue)).toBe(false);
})

test('Energy Measurement get name', () => {
    const cValue = new Measurement(100,UnitEnergy.calories);
    expect(cValue.name).toBe("Calories")
})

test('Incompatabile Energy Measurements should throw error for opeartions', () => {
    const calValue = new Measurement(100, UnitEnergy.calories);
    const metersValue = new Measurement(100, UnitLength.meters);

    function testConvertedError() {
        const calValue = metersValue.converted(UnitEnergy.joules);
    }

    function testConvertError() {
        calValue.convert(UnitLength.meters);
    }

    function testAddError() {
        Measurement.add(calValue, metersValue)
    }

    function testSubtractError() {
        Measurement.substract(calValue, metersValue);
    }

    function testDivideError() {
        Measurement.divide(calValue, metersValue);
    }

    function testEqualsError() {
        Measurement.equals(calValue, metersValue);
    }

    function testNotEqualsError() {
        Measurement.notEquals(calValue, metersValue);
    }

    function testGreaterThanError() {
        Measurement.greaterThan(calValue, metersValue);
    }

    function testGreaterThanOrEqualsError() {
        Measurement.greaterThanOrEqual(calValue,metersValue);
    }

    function testLessThanError() {
        Measurement.lessThan(calValue,metersValue);
    }

    function testLessThanOrEqualsError() {
        Measurement.lessThanOrEqual(calValue,metersValue);
    }

    expect(testConvertedError).toThrow(new Error('Trying to convert to different measurement types'));
    expect(testConvertError).toThrow(new Error('Trying to convert to a different measurement type'))
    expect(testAddError).toThrow(new Error('Trying to add measurements of different dimensions'));
    expect(testSubtractError).toThrow(new Error('Trying to substract measurements of different dimensions'));
    expect(testDivideError).toThrow(new Error('Trying to divide measurements of different dimensions'));
    expect(testEqualsError).toThrow(new Error('Trying to equate measurements of different dimensions'));
    expect(testNotEqualsError).toThrow(new Error('Trying to equate measurements of different dimensions'));
    expect(testGreaterThanError).toThrow(new Error('Trying to compare measurements of different dimensions'));
    expect(testGreaterThanOrEqualsError).toThrow(new Error('Trying to compare measurements of different dimensions'));
    expect(testLessThanError).toThrow(new Error('Trying to compare measurements of different dimensions'));
    expect(testLessThanOrEqualsError).toThrow(new Error('Trying to compare measurements of different dimensions'));
})

test('Should create Measurement', () => {
    expect(new Measurement(100,UnitEnergy.baseUnit)).toMatchObject(new Measurement(100,UnitEnergy.joules))
})