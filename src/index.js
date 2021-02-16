exports.min = function min(array) {
  if (!array || array.length === 0) { // checking for undefined or empty arrays
    return 0;
  } else {
    return Math.min.apply(null, array); // checking for minimal element of the array
  }
}

exports.max = function max(array) {
  if (!array || array.length === 0) { // checking for undefined or empty arrays
    return 0;
  } else {
    return Math.max.apply(null, array); // checking for maximum element of the array
  }
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {  // checking for undefined or empty arrays
    return 0;
  } else {
    let sum = 0;
    array.forEach(
      function elementSum(element) { // sum of all array elements
        sum += element;
      });
    let average = sum / array.length; // the average value of the array
    return average;
  }
}