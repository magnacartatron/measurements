import { MeasurementType, TMeasurements } from './types';

export class UnitEnergy implements MeasurementType {
  coefficient: number;
  constant: number;
  symbol: string;
  name: string;
  type: TMeasurements;

  constructor(symbol: string, name: string, coefficient: number, constant: number) {
    this.symbol = symbol;
    this.coefficient = coefficient;
    this.constant = constant;
    this.name = name;
    this.type = 'UnitEnergy';
  }

  public static kilojoules: UnitEnergy = new UnitEnergy('kJ', 'Kilojoules', 1000.0, 0);

  public static joules: UnitEnergy = new UnitEnergy('J', 'Joules', 1.0, 0);

  public static kilocalories: UnitEnergy = new UnitEnergy('kCal', 'Kilocalories', 4184.0, 0);

  public static calories: UnitEnergy = new UnitEnergy('cal', 'Calories', 4.184, 0);

  public static kilowattHours: UnitEnergy = new UnitEnergy('kWh', 'Kilowatt Hours', 3600000, 0);

  public static baseUnit: UnitEnergy = this.joules;
}
