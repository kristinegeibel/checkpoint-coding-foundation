/* -----------code does not work---------------
function zipStrings(strA, strB) {
  let arrA = strA.split("");
  let arrB = strB.split("");
  console.log(arrA);
  console.log(arrB);

  let together = arrB.map(function (arrB, i) {
    return [arrB + arrA[i]];
  });
  let backToString = together.join();
}
*/-----------------------------------------------

function zipStrings(strA, strB) {
  let arrA = strA.split("");
  let arrB = strB.split("");
  let zippedArray = [];

  if (arrA.length >= arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      zippedArray.push(arrA[i]);
      zippedArray.push(arrB[i]);
    }
  } else {
    for (let i = 0; i < arrB.length; i++) {
      zippedArray.push(arrA[i]);
      zippedArray.push(arrB[i]);
    }
  }
  let zippedString = zippedArray.join("");
  return zippedString;
}
