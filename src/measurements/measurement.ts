import { MeasurementType } from ".";

export class Measurement<T> {
  /**
   * @type {number}
   */
  public value: number;

  /**
   * @type {MeasurementType}
   */
  public unit: MeasurementType;

  constructor(value: number, unit: MeasurementType) {
    this.value = value;
    this.unit = unit;
  }

  public converted(unit: MeasurementType): Measurement<MeasurementType> {
    if (this.unit.type !== unit.type) throw new Error('Trying to convert to different measurement types');
    return new Measurement(
      (this.value + this.unit.constant - unit.constant) * (this.unit.coefficient / unit.coefficient),
      unit,
    );
  }

  public convert(to: MeasurementType) {
    if (this.unit.type !== to.type) throw new Error('Trying to convert to a different measurement type');
    const newMeasurement = this.converted(to);
    this.value = newMeasurement.value;
    this.unit = to;
  }

  public static scale(by: number, measurement: Measurement<MeasurementType>): Measurement<MeasurementType> {
    return new Measurement<MeasurementType>(measurement.value * by, measurement.unit);
  }

  public static add(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to add measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    return new Measurement<MeasurementType>(first.value + m2.value, m2.unit);
  }

  public static substract(
    m1: Measurement<MeasurementType>,
    m2: Measurement<MeasurementType>,
  ): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to substract measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    return new Measurement<MeasurementType>(first.value - m2.value, m2.unit);
  }

  public static divide(
    m1: Measurement<MeasurementType>,
    m2: Measurement<MeasurementType>,
  ): Measurement<MeasurementType> {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to divide measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    return new Measurement<MeasurementType>(first.value / m2.value, m2.unit);
  }

  public static equals(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to equate measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value === m2.value) return true;
    return false;
  }

  public static notEquals(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to equate measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value !== m2.value) return true;
    return false;
  }

  public static greaterThan(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to compare measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value > m2.value) return true;
    return false;
  }

  public static lessThan(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to compare measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value < m2.value) return true;
    return false;
  }

  public static greaterThanOrEqual(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to compare measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value >= m2.value) return true;
    return false;
  }

  public static lessThanOrEqual(m1: Measurement<MeasurementType>, m2: Measurement<MeasurementType>): boolean {
    if (m1.unit.type !== m2.unit.type) throw new Error('Trying to compare measurements of different dimensions');
    const first = new Measurement(m1.value,m1.unit);
    first.convert(m2.unit);
    if (first.value <= m2.value) return true;
    return false;
  }

  get name(): string {
    return this.unit.name;
  }
  get symbol(): string {
    return this.unit.symbol;
  }

  get shortLabel(): string {
    return this.value + ' ' + this.unit.symbol;
  }

  get longLabel(): string {
    return this.value + ' ' + this.unit.name;
  }
}
