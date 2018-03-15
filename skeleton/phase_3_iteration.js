Array.prototype.bubbleSort = function(callback) {
  let arr = this;
  let sorted = false;
  while(sorted === false) {
    sorted = true;
    for(let i = 0; i < this.length; i++) {
      let j = i + 1;
      if (callback(arr[i], arr[j]) === true) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        sorted = false;
      }
    }
  }
  return arr;
};

String.prototype.substrings = function() {
  const subs = [];

  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length + 1; j++) {
      subs.push(this.slice(i, j));
    }
  }


  return subs;
};
