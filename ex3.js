
//Write two functions to chain together.  The first function, makeAllCaps, will take in array of words and capitalize them.  A second function, sortWords, will sort the words in alphabetical order.

//If the array contains anything besides a single word (string) an error should be thrown.

let animals = ['dog', 'cat', 'rabbit', 'fish'];
let list =['seven', 8, 'nine'];


const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    
    if (array.every(array =>{
        return typeof array === 'string';
    })
    ){ resolve(sort(array.map(array => {
            return array.toUpperCase();
          }))
      )
    } else {
      reject('You should only use words.');
    }
  });
};


const sort = array => {
  return new Promise((resolve, reject) => {
    if (array) {
      resolve(array.sort());
    } else {
      reject('Error: strings only!');
    }
  });
};

makeAllCaps(animals)
  .then(sort(animals))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(list)
  .then(sort(list))
  .then(result => console.log(result))
  .catch(error => console.log(error));

