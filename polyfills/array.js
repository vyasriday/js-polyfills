// map
function customMap(callback) {
  let array = [];

  for (let i = 0; i < this.length; i++) {
    array.push(callback(this[i]));
  }

  return array;
}

Array.prototype.customMap = customMap;

// filter
function customFilter(callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) array.push(this[i]);
  }

  return array;
}

// reduce
function customReduce(callback, total) {
  let accumulated = total === 'undefined' ? this[0] : total;
  for (let i = 0; i < this.length; i++) {
    accumulated = callback(accumulated, this[i]);
  }

  return accumulated;
}

// flat
let flattenedArray = [];
function customFlat() {
  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      this[i].customFlat();
    } else {
      flattenedArray.push(this[i]);
    }
  }
  return flattenedArray;
}

Array.prototype.customFilter = customFilter;
Array.prototype.customMap = customMap;
Array.prototype.customReduce = customFilter;
Array.prototype.customFlat = customFlat;
