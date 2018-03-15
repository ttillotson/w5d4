Array.prototype.uniq = function () {
  const result = [];
  this.forEach(el => {
    if (result.includes(el) !== true) {
      result.push(el);
    }
  });

  return result;
};

Array.prototype.twoSum = function() {
  const result = [];

  for(let i = 0; i < this.length-1 ; i++) {
    for(let j = i+1; j < this.length ; j++) {
      if ((this[i] + this[j]) === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

Array.prototype.transpose = function() {
  const newArr = [];

  for(let i = 0; i < this.length; i++) {
    let newRow = [];
    for(let j = 0; j < this.length; j++) {
      newRow.push(this[j][i]);
    }
    newArr.push(newRow);
  }

  return newArr;
};
