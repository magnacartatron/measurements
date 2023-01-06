import { MeasurementType, TMeasurements } from '.';

export class UnitLength implements MeasurementType {
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
    this.type = 'UnitLength';
  }

  public static megameters: UnitLength = new UnitLength('Mm', 'Megameters', 1000000.0, 0);

  public static kilometers: UnitLength = new UnitLength('kM', 'Kilometers', 1000.0, 0);

  public static hectometers: UnitLength = new UnitLength('hm', 'Hectometers', 100.0, 0);

  public static decameters: UnitLength = new UnitLength('dam', 'Decameters', 10.0, 0);

  public static meters: UnitLength = new UnitLength('m', 'Meters', 1.0, 0);

  public static decimeters: UnitLength = new UnitLength('dm', 'Decimeters', 0.1, 0);

  public static centimeters: UnitLength = new UnitLength('cm', 'Centimeters', 0.01, 0);

  public static millimeters: UnitLength = new UnitLength('mm', 'Millimeters', 0.001, 0);

  public static micrometers: UnitLength = new UnitLength('µm', 'Micrometers', 0.0000001, 0);

  public static nanometers: UnitLength = new UnitLength('nm', 'Nanometers', 1e-9, 0);

  public static picometers: UnitLength = new UnitLength('pm', 'Picometers', 1e-12, 0);

  public static inches: UnitLength = new UnitLength('in', 'Inches', 0.0254, 0);

  public static feet: UnitLength = new UnitLength('ft', 'Feet', 0.3048, 0);

  public static yards: UnitLength = new UnitLength('yd', 'Yards', 0.9144, 0);

  public static miles: UnitLength = new UnitLength('mi', 'Miles', 1609.34, 0);

  public static scandinavianMiles: UnitLength = new UnitLength('smi', 'Scandinavian Miles', 10000, 0);

  public static lightyears: UnitLength = new UnitLength('ly', 'Light Years', 9.461e15, 0);

  public static nauticalMiles: UnitLength = new UnitLength('NM', 'Nautical Miles', 1852, 0);

  public static fathoms: UnitLength = new UnitLength('ftm', 'Fathoms', 1.8288, 0);

  public static furlongs: UnitLength = new UnitLength('fur', 'Furlongs', 201.168, 0);

  public static astronomicalUnits: UnitLength = new UnitLength('ua', 'Astronomical Units', 1.496e11, 0);

  public static parsecs: UnitLength = new UnitLength('pc', 'Parsecs', 3.086e16, 0);

  public static baseUnit: UnitLength = UnitLength.meters;
}
