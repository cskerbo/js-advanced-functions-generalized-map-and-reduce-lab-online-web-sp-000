function map(sourceArray, func){
  let newArray = [];
  sourceArray.forEach(item => newArray.push(func(item)));
  return newArray;
}

function reduce(sourceArray, memo, func){
  memo = memo || sourceArray[0];
  sourceArray.forEach(item => memo = func(item, memo));
  return memo;
}
