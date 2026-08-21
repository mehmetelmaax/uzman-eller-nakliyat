import { describe, it, expect } from 'vitest';
import { estimatePrice } from '@/lib/pricing';

describe('Pricing Engine Tests', () => {
  it('should calculate valid price estimates where min is always less than max', () => {
    const res = estimatePrice({
      rooms: '2+1',
      fromFloor: 3,
      toFloor: 5,
      fromElevator: true,
      toElevator: true,
      distanceType: 'sehirici',
      packing: true,
      carpentry: true,
      storage: false
    });

    expect(res.min).toBeLessThanOrEqual(res.max);
    expect(res.min).toBeGreaterThan(0);
  });

  it('should use default 500km when distanceKm is not provided for intercity routes', () => {
    const res = estimatePrice({
      rooms: '3+1',
      fromFloor: 1,
      toFloor: 1,
      fromElevator: false,
      toElevator: false,
      distanceType: 'sehirlerarasi',
      packing: true,
      carpentry: true,
      storage: false
    });

    const resWithKm = estimatePrice({
      rooms: '3+1',
      fromFloor: 1,
      toFloor: 1,
      fromElevator: false,
      toElevator: false,
      distanceType: 'sehirlerarasi',
      distanceKm: 500,
      packing: true,
      carpentry: true,
      storage: false
    });

    expect(res.min).toEqual(resWithKm.min);
    expect(res.max).toEqual(resWithKm.max);
  });

  it('should handle different room sizes and adjust base price accordingly', () => {
    const inputs: ('1+1' | '2+1' | '3+1' | '4+1+')[] = ['1+1', '2+1', '3+1', '4+1+'];
    const results = inputs.map(rooms => estimatePrice({
      rooms,
      fromFloor: 1,
      toFloor: 1,
      fromElevator: false,
      toElevator: false,
      distanceType: 'sehirici',
      packing: false,
      carpentry: false,
      storage: false
    }));

    // Each sequential room size should have a strictly greater min price
    for (let i = 1; i < results.length; i++) {
      const currentRes = results[i];
      const prevRes = results[i - 1];
      if (currentRes && prevRes) {
        expect(currentRes.min).toBeGreaterThan(prevRes.min);
      }
    }
  });

  it('should apply elevator fees correctly for single and double elevator configurations', () => {
    const zeroElevators = estimatePrice({
      rooms: '2+1',
      fromFloor: 2,
      toFloor: 2,
      fromElevator: false,
      toElevator: false,
      distanceType: 'sehirici',
      packing: false,
      carpentry: false,
      storage: false
    });

    const oneElevator = estimatePrice({
      rooms: '2+1',
      fromFloor: 2,
      toFloor: 2,
      fromElevator: true,
      toElevator: false,
      distanceType: 'sehirici',
      packing: false,
      carpentry: false,
      storage: false
    });

    const twoElevators = estimatePrice({
      rooms: '2+1',
      fromFloor: 2,
      toFloor: 2,
      fromElevator: true,
      toElevator: true,
      distanceType: 'sehirici',
      packing: false,
      carpentry: false,
      storage: false
    });

    expect(oneElevator.min).toEqual(zeroElevators.min + 2500);
    expect(twoElevators.min).toEqual(zeroElevators.min + 5000);
  });
});
