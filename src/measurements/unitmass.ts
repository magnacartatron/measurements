import { MeasurementType, TMeasurements } from '.';

export class UnitMass implements MeasurementType {
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
    this.type = 'UnitMass';
  }

  public static kilograms: UnitMass = new UnitMass('kg', 'Kilograms', 1.0, 0);
  public static grams: UnitMass = new UnitMass('g', 'Grams', 0.001, 0);
  public static decigrams: UnitMass = new UnitMass('dg', 'Decigrams', 0.0001, 0);
  public static centigrams: UnitMass = new UnitMass('cg', 'Centigrams', 0.00001, 0);
  public static milligrams: UnitMass = new UnitMass('mg', 'Milligrams', 0.000001, 0);
  public static micrograms: UnitMass = new UnitMass('µg', 'Micrograms', 1e9, 0);
  public static nanograms: UnitMass = new UnitMass('ng', 'Nanograms', 1e-12, 0);
  public static picograms: UnitMass = new UnitMass('pg', 'Picograms', 1e-15, 0);
  public static ounces: UnitMass = new UnitMass('oz', 'Ounces', 0.0283495, 0);
  public static pounds: UnitMass = new UnitMass('lb', 'Pounds', 0.453592, 0);
  public static stones: UnitMass = new UnitMass('st', 'Stones', 0.157473, 0);
  public static metricTons: UnitMass = new UnitMass('t', 'Metric Tons', 1000, 0);
  public static shortTons: UnitMass = new UnitMass('ton', 'Short Tons', 907.185, 0);
  public static carats: UnitMass = new UnitMass('ct', 'Carats', 0.0002, 0);
  public static ouncesTroy: UnitMass = new UnitMass('oz t', 'Ounces Troy', 0.03110348, 0);
  public static slugs: UnitMass = new UnitMass('slug', 'Slugs', 14.5939, 0);
  public static baseUnit: UnitMass = this.kilograms;
}
