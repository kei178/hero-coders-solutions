// 1. Write a function that determines the area of a circle given the radius.
const circleArea = (radius) => {
  if (radius < 0) return 'error: radius is negative';
  if (!radius && radius !== 0) return 'error: radius is empty';

  const area = radius ** 2 * Math.PI;
  const roundNum = 100;
  return Math.floor(area * roundNum) / roundNum;
};

module.exports = {
  circleArea,
};
