function range(start, stop) {
  let arr = [start];
   if (start === stop) {
     return [start];
   } else {
     arr = arr.concat(range(start + 1, stop));
   }
   return arr;
}

function sumRec(arr) {
  let sum = arr[0];
  if (arr.length === 0) {
    return 0;
  } else {
    sum = sum + sumRec(arr.slice(1));
  }

  return sum;
}

function exponent(base, n) {
  let exp = base;
  if (n === 0) {
    return 1;
  } else {
    exp = base * exponent(base, n-1);
  }

  return exp;
}

function exponent2(base, n) {
  let exp = base;

  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return base;
  } else if (n % 2 === 0) {
    exp = Math.pow(exponent2(base, (n/2)), 2);
  } else {
    exp = base * Math.pow(exponent2(base, ((n-1)/2)), 2);
  }

  return exp;
}

function fibSum(n) {
  if (n === 2) {
    return [1, 1];
  } else if (n === 1) {
    return [1];
  }
  let arr1 = fibSum(n-1);
  let arr2 = fibSum(n-2);
  let num = arr1.slice(-1)[0] + arr2.slice(-1)[0];

  arr1.push(num);

  return arr1;
}

const getType = function(el) {
  return Object.prototype.toString.call(el).slice(8, -1);
};

function deepDup(arr) {
  const dupedArr = [];

  arr.forEach(el => {
    if (el.isArray) {
      dupedArr.push(deepDup(el));
    } else if (getType(el) === 'Function') {
      let temp = Object.assign({}, el);
      dupedArr.push(temp);
    } else if (getType(el) === 'Date') {
      let temp = Object.assign(new Date(), el);
      dupedArr.push(temp);
    } else if (getType(el) === 'RegExp') {
      let temp = Object.assign({}, el);
      dupedArr.push(temp);
    } else if (getType(el) === 'Object') {
      let temp = Object.assign({}, el);
      dupedArr.push(temp);
    } else if (getType(el) === 'Number') {
      dupedArr.push(el);
    } else if (getType(el) === 'String') {
      dupedArr.push(el);
    }
  });

  return dupedArr;
}



function nonDeepDup(arr) {
  if (getType(arr) !== "Array") {
    return arr;
  } else {
    arr.map(el => {
      return nonDeepDup(el);
  });}

}
