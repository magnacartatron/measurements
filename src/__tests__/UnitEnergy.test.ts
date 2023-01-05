import { Measurement, UnitEnergy } from '../index';

test('Calories', () => {
    expect(new Measurement(100,UnitEnergy.calories).shortLabel()).toBe("100 cal")
})