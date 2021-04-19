export const formatNumber = (number: number): string => {
  if(Math.abs(number) < 1000) {
    return number.toString()
  }
  return `${(number/1000).toFixed(1)}K`
};
