Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
  callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const result = [];

  this.myEach(el => {
    result.push(callback(el));
  });

  return result;
};

Array.prototype.myReduce = function(callback, initialValue = this[0]) {
  let result = initialValue;
  let arr = [];
  if (initialValue === this[0]) {
    arr = this.slice(1);
  } else {
    arr = this;
  }

  arr.myEach(el => {
    result = callback(result, el);
  });

  return result;
};
