function deepClone(obj) {
  let newObject = Object.create({});
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      newObject[key] = deepClone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }

  return newObject;
}

let object = {
  name: 'Hridayesh',
  school: {
    name: 'IIT Delhi',
    year: 2018,
  },
};

// let clonedObject = deepClone(object);
// console.log(clonedObject === object);
