export type TMeasurements = 'UnitLength' | 'UnitMass' | 'UnitTemperature' | 'UnitEnergy' | 'UnitVolume' | 'UnitTest';

export interface MeasurementType {
  coefficient: number;
  constant: number;
  symbol: string;
  name: string;
  type: TMeasurements;
}

