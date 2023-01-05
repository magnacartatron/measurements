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
console.log(kiloJoulesValue.shortLabel());

//Add the two energy values together, the unit type is the last parameter used
const addedValues = UnitEnergy.add(caloriesValue,kiloJoulesValue);
console.log(addedValues.longLabel());

//Check if two values are equal
const equals = UnitEnergy.equal(caloriesValue,kiloJoulesValue);
console.log(equals);

```