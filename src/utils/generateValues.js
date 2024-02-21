function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const generateValues = (size, avg, min, max) => {
  let arr = [];
  let tmax = max;
  let tmin = min;
  while (arr.length < size) {
    const variable1 = getRandom(min, tmax);
    let variable2 = avg * 2 - variable1;
    if (variable2 < min) {
      tmax = max - (min - variable2);
      variable2 = min;
    } else if (variable2 > max) {
      tmin = min + (variable2 - max);
      variable2 = max;
    } else {
      tmax = max;
      tmin = min;
    }
    arr = arr.concat([variable1, variable2]);
  }
  let sumErr = arr.reduce((a, b) => a + b, 0) - avg * size;
  if (sumErr > 0) {
    arr = arr.map((x) => {
      if (x > min && sumErr > 0.001) {
        let maxReduce = x - min;
        if (maxReduce > sumErr) {
          const toReturn = x - sumErr;
          sumErr = 0;
          return toReturn;
        } else {
          sumErr -= maxReduce;
          return min;
        }
      }
      return x;
    });
  } else {
    arr = arr.map((x) => {
      if (x < max && sumErr < -0.001) {
        let maxAdd = max - x;
        if (maxAdd > Math.abs(sumErr)) {
          const toReturn = x + Math.abs(sumErr);
          sumErr = 0;
          return toReturn;
        } else {
          sumErr += maxAdd;
          return max;
        }
      }
      return x;
    });
  }
  return arr;
};
