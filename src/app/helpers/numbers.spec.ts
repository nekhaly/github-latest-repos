import { formatNumber } from "./numbers";

describe('Numbers helper', () => {
  it('should return string of number if less than 1000', () => {
    expect(formatNumber(900)).toEqual("900");
  });
  it('should format number with adding K and one decimal if larger than 1000', () => {
    expect(formatNumber(1524)).toEqual("1.5K");
  });
});
