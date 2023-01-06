# Measurements

A Measurement object represents a quantity and unit of measure. The Measurement type provides a programmatic interface to converting measurements into different units, as well as calculating the sum or difference between two measurements.

Measurements are initialized with a UnitMeasure and a value. 

Measurements support operator functions, including scale, add, subtract, divide as well as comparison and equality operators.

```javascript

import { Measurement, UnitEnergy } from "measurements";

//Declare a value that holds 100 calories
const caloriesValue = new Measurement(100, UnitEnergy.calories);

//Convert it to kiloJoules
const kiloJoulesValue = caloriesValue.converted(UnitEnergy.kiloJoules);

//Print a formatted label
console.log(kiloJoulesValue.shortLabel);

//Add the two energy values together, the unit type is the last parameter used
const addedValues = UnitEnergy.add(caloriesValue,kiloJoulesValue);
console.log(addedValues.longLabel);

//Check if two values are equal
const equals = UnitEnergy.equal(caloriesValue,kiloJoulesValue);
console.log(equals);

```

## API

All measurments share a common API.

* `converted(unit: MeasurementType): Measurement<MeasurementType>`

    Converts a mesaurement from a specific unit type to another

```javascript
const calories = new Measurement(100, UnitEnergy.calories)
const kilojoules = calories.converted(UnitEnergy.kiloJoules)
```

or

```javascript
const meters = new Measurement(100, UnitLength.meters)
const kilometers = meters.converted(UnitLength.kilometers)
```

Measurement objects are mutable

* `convert(to: MeasurementType)`

    Transforms a measurement from its existing type to another

```javascript
const weight = new Measurement(1, UnitMass.kilograms)
weight.convert(UnitMass.grams)
```

Get values from a measurement

* `measure.name`

    Returns the name of the measurement e.g. Kilograms

* `measure.symbol`

    Returns the symbol of the measurment e.g. kg

* `measure.shortLabel`

    Returns a formatted label with the value and symbol e.g. 100 L

* `measure.longLabel`

    Returns a full label with value and name e.g. 100 Kilograms

Perform Operations on measurements

All operations return new Measurement object

* `Measurement.add(gramsValue, kilosVaulue)`

    Takes two measurmenets of same dimensions and performs addition operation

* `Measurement.scale(2, gramsValue)`

    Takes a scalar value e.g. 2 and applies it to measurement

* `Measurement.substract(kilosValue, gramsValue)`

    Takes two measurements of same dimensions and performs substraction

* `Measurement.divide(kilosValue, gramsValue)`

    Takes two measurments of same dimensions and performs division

Perform Equality check on measurements

* `Measurement.equals(m1, m2): boolean`

    Takes two measurements of same dimension and returns true if they're equal

* `Measurement.netEquals(m1, m2): boolean`

    Takes two measurements of same dimension and returns true if they're not equal

* `Measurement.greaterThan(m1, m2): boolean`

    Takes two measurements and checks if the first measure is greater than the second measure

* `Measurement.lessThan(m1, m2): boolean`

    Takes two measurements and checks if the first measure is less than the second measure

* `Measurement.greaterThanOrEqual(m1, m2): boolean`

    Takes two measurements and checks if the first measure is greater than or equal the second measure

* `Measurement.lessThanOrEqual(m1, m2): boolean`

    Takes two measurements and checks if the first measure is less than or equal the second measure


## Supported MeasurementTypes

* `UnitEnergy`

    This measurement type supports kilojoules, joules, kilocalories, calories & kilowattHours. 
    
    The base unit is joules.

* `UnitMass`

    This measurement type supports kilograms, grams, decigrams, centigrams, milligrams, micrograms, nanograms, picograms, ounces, pounds, stones, metricTons, shortTons, carats, ouncesTroy, slugs. 
    
    The base unit is kilograms.

* `UnitLength`

    This measurement type supports megameters, kilometers, hectometers, decameters, meters, decimeters, centimeters, millimeters, micrometers, nanometers, picometers, inches, feet, yards, miles, scandinavianMiles, lightyears, fathoms, furlongs, astronomicalUnits, parsecs. 
    
    The base unit is meters/

* `UnitVolume`

    This measurement type supports megaliters, kiloliters, liters, deciliters, centiliters, milliliters, cubicKilometers, cubicMeters, cubicDecimeters, cubicMilliliters, cubicInches, cubicFeet, cubicYards, cubicMiles, acreFeet, bushels, teaspoons, tablespoons, fluidOunces, cups, pints, quarts, gallons, imperialTeaspoons, imperialTablespoons, imperialFluidOunces, imperialPints, imperialQuarts, imperialGallons, metricCups.

    The base unit is liters.

* `UnitTemperature`

    This measurement type supports kelvin, celsius, fahrenheit.

    The base unit is kelvin.

## Examples

Convert celsius to fahrenheit

```javascript
const celsius = new Measurement(32, UnitTemperature.celsius);
const fahrenheit = celsius.converted(UnitTemperature.fahrenheit);
console.log(fahrenheit.shortLabel)
```


## More Measurement Dimensions To Come

The following is a list to be implemented 

UnitAcceleration
UnitAngle
UnitArea
UnitConcentrationMass
UnitDisperion
UnitDuration
UnitElectricalCharge
UnitElectricCurrent
UnitElectricPotentialDifference
UnitElectricResistance
UnitFrequency
UnitFuelEfficiency
UnitIllumination
UnitInformationStorage
UnitPower
UnitPressure
UnitSpeed

Custom measurement types and overrides coming soon