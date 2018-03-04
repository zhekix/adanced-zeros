module.exports = function getZerosCount(number, base = 0) {
  // your implementation

  var tempB,
      a = 0,
      c,
      z,
      tempNumber,
      temp;

  tempNumber = number;
  tempB = base;

  for (let i = 2; i <= base; i++) {
    if (tempB % i == 0) {
      a = 0;
      while (tempB % i == 0) {
        a++;
        tempB = Math.floor(tempB / i);
      }
      z = 0;
      temp = number;
      while (temp / i > 0) {
        z += Math.floor(temp / i);
        temp = Math.floor(temp / i);
      }
      if (tempNumber > z / a) {
        tempNumber = z / a;
      }
    }
  }
  return Math.floor(tempNumber);


}
