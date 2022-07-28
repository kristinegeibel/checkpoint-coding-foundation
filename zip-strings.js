function zipStrings(strA, strB) {
  let arrA = strA.split("");
  let arrB = strB.split("");
  console.log(arrA);
  console.log(arrB);

  let together = arrB.map(function (arrB, i) {
    return [arrB + arrA[i]];
  });

  console.log(together);
  let backToString = together.join();
}
console.log(backToString);
