import { MeasurementType } from './types';

export class Measurement<T> {
  public value: number;
  public unit: MeasurementType;

  constructor(value: number, unit: MeasurementType) {
    this.value = value;
    this.unit = unit;
  }

  public converted(unit: MeasurementType): Measurement<MeasurementType> {
    if (this.unit.type !== unit.type) throw Error('Trying to convert to different measurement types');
    return new Measurement(
      (this.value + this.unit.constant - unit.constant) * (this.unit.coefficient / unit.coefficient),
      unit,
    );
  }

  public convert(to: MeasurementType) {
    if (this.unit.type !== to.type) throw Error('Trying to convert to a different measurement type');
    const newMeasurement = this.converted(to);
    this.value = newMeasurement.value;
    this.unit = to;
  }

  public static scale(by: number, measurement: Measurement<MeasurementType>): Measurement<MeasurementType> {
    measurement.value = measurement.value * by;
    return measurement;
  }

  public static add(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to add measurements of different dimensions');
    m1.convert(m2.unit);
    return new Measurement<MeasurementType>(m1.value + m2.value, m2.unit);
  }

  public static substract(
    m1: Measurement<MeasurementType>,
    m2: Measurement<MeasurementType>,
  ): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to substract measurements of different dimensions');
    m1.convert(m2.unit);
    return new Measurement<MeasurementType>(m1.value - m2.value, m2.unit);
  }

  public static divide(
    m1: Measurement<MeasurementType>,
    m2: Measurement<MeasurementType>,
  ): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    return new Measurement<MeasurementType>(m1.value / m2.value, m2.unit);
  }

  public static equals(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value === m2.value) return true;
    return false;
  }

  public static notEquals(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value !== m2.value) return true;
    return false;
  }

  public static greaterThan(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value > m2.value) return true;
    return false;
  }

  public static lessThan(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value < m2.value) return true;
    return false;
  }

  public static greaterThanOrEqual(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value >= m2.value) return true;
    return false;
  }

  public static lessThanOrEqual(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw Error('Trying to divide measurements of different dimensions');
    m1.convert(m2.unit);
    if (m1.value <= m2.value) return true;
    return false;
  }

  public name(): string {
    return this.unit.name;
  }
  public symbol(): string {
    return this.unit.symbol;
  }

  public shortLabel(): string {
    return this.value + ' ' + this.unit.symbol;
  }

  public longLabel(): string {
    return this.value + ' ' + this.unit.name;
  }
}
