import { MeasurementType, TMeasurements } from '.';

export class UnitVolume implements MeasurementType {
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
    this.type = 'UnitVolume';
  }

  public static megaliters: UnitVolume = new UnitVolume('ML', 'Megaliters', 1000000.0, 0);
  public static kiloliters: UnitVolume = new UnitVolume('kL', 'Kiloliters', 1000.0, 0);
  public static liters: UnitVolume = new UnitVolume('L', 'liters', 1.0, 0);
  public static deciliters: UnitVolume = new UnitVolume('dL', 'Deciliters', 0.1, 0);
  public static centiliters: UnitVolume = new UnitVolume('cL', 'Centiliters', 0.01, 0);
  public static milliliters: UnitVolume = new UnitVolume('mL', 'Milliliters', 0.001, 0);
  public static cubicKilometers: UnitVolume = new UnitVolume('km³', 'Cubic Kilometers', 1e12, 0);
  public static cubicMeters: UnitVolume = new UnitVolume('m³', 'Cubic Meters', 1000.0, 0);
  public static cubicDecimeters: UnitVolume = new UnitVolume('dm³', 'Cubic Decimeters', 1.0, 0);
  public static cubicMillimeters: UnitVolume = new UnitVolume('mm³', 'Cubic Millimeters', 0.000001, 0);
  public static cubiInches: UnitVolume = new UnitVolume('in³', 'Cubic Inches', 0.0163871, 0);
  public static cubicFeet: UnitVolume = new UnitVolume('ft³', 'Cubic Feet', 28.3168, 0);
  public static cubicYards: UnitVolume = new UnitVolume('yd³', 'Cubic Yards', 764.555, 0);
  public static cubicMiles: UnitVolume = new UnitVolume('mi³', 'Cubic Miles', 4.168e12, 0);
  public static acreFeet: UnitVolume = new UnitVolume('af', 'Acre Foeet', 1.233e6, 0);
  public static bushels: UnitVolume = new UnitVolume('bsh', 'Bushels', 35.2391, 0);
  public static teaspoons: UnitVolume = new UnitVolume('tsp', 'Teaspoons', 0.00492892, 0);
  public static tablespoons: UnitVolume = new UnitVolume('tbsp', 'Tablespoons', 0.0147868, 0);
  public static fluidOunces: UnitVolume = new UnitVolume('fl oz', 'Fluid Ounces', 0.0295735, 0);
  public static cups: UnitVolume = new UnitVolume('cup', 'Cups', 0.24, 0);
  public static pints: UnitVolume = new UnitVolume('pt', 'Pints', 0.473176, 0);
  public static quarts: UnitVolume = new UnitVolume('qt', 'Quarts', 0.946353, 0);
  public static gallons: UnitVolume = new UnitVolume('gal', 'Gallons', 3.78541, 0);
  public static imperialTeaspoons: UnitVolume = new UnitVolume('tsp', 'Imperial Teaspoons', 0.00591939, 0);
  public static imperialTablespoons: UnitVolume = new UnitVolume('tbsp', 'Imperial Tablespoons', 0.0177582, 0);
  public static imperialFluidOunces: UnitVolume = new UnitVolume('fl oz', 'Imperial Fluid Ounces', 0.0284131, 0);
  public static imperialPints: UnitVolume = new UnitVolume('pt', 'Imperial Pints', 0.568261, 0);
  public static imperialQuarts: UnitVolume = new UnitVolume('qt', 'Imperial Quarts', 1.13652, 0);
  public static imperialGallons: UnitVolume = new UnitVolume('gal', 'Imperial Gallons', 4.54609, 0);
  public static metricCups: UnitVolume = new UnitVolume('metric cup', 'Metric Cups', 0.25, 0);
  public static baseUnit: UnitVolume = this.liters;
}
