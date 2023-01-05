import { MeasurementType, TMeasurements } from './types';

export class UnitTemperature implements MeasurementType {
  public coefficient: number;
  public constant: number;
  public symbol: string;
  public name: string;
  public type: TMeasurements;

  constructor(symbol: string, name: string, coefficient: number, constant: number) {
    this.symbol = symbol;
    this.coefficient = coefficient;
    this.constant = constant;
    this.name = name;
    this.type = 'UnitTemperature';
  }

  public static kelvin: UnitTemperature = new UnitTemperature('K', 'Kelvin', 1, 0);
  public static celsius: UnitTemperature = new UnitTemperature('°C', 'Degree Celsius', 1.0, 273.15);
  public static fahrenheit: UnitTemperature = new UnitTemperature(
    '°F',
    'Degree Fahrenheit',
    0.55555555555556,
    255.37222222222427,
  );
  public static baseUnit: UnitTemperature = this.kelvin;
}
