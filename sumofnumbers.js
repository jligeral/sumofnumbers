function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5]));
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3, 4, 5]));
function sumRecursion(list, index) {
  if (index === list.length) {
    return 0;
  }
  const listElement = list[index];
  const otherListElements = sumRecursion(list, index + 1);
  return listElement + otherListElements;
}
console.log(sumRecursion([1, 2, 3, 4, 5], 0));
function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) { return memo + num; }, 0);
  return sum;
}
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
